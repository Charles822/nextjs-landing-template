#!/usr/bin/env python3
"""
OpenRouter image generation via Google Gemini 3.1 Flash Image.
Outputs PNG to landerMachine/public/ or public/{slug}/.
"""

import os
import re
import sys
import json
import base64
import argparse
import io
from math import ceil
from pathlib import Path

try:
    import requests
except ImportError:
    print("Error: requests library required. Run: pip install requests")
    sys.exit(1)

try:
    from dotenv import load_dotenv
except ImportError:
    load_dotenv = None

# Script lives in landerMachine/scripts/; public is landerMachine/public/
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent  # landerMachine/
DEFAULT_PUBLIC_DIR = PROJECT_ROOT / "public"

# Load .env from project root (Next.js puts .env at project root)
# .env first, then .env.local overrides
if load_dotenv:
    for base in (PROJECT_ROOT, Path.cwd()):
        env_file = base / ".env"
        if env_file.exists():
            load_dotenv(env_file)
        local_file = base / ".env.local"
        if local_file.exists():
            load_dotenv(local_file, override=True)
else:
    print("⚠️  python-dotenv not installed – .env will NOT be auto-loaded.")
    print("   Install: pip install python-dotenv")
    print("   Or run:  source .env  &&  python3 scripts/generate-image.py ...")

API_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "google/gemini-3.1-flash-image-preview"


def extract_base64_from_data_url(data_url: str) -> bytes:
    """Extract raw bytes from data:image/...;base64,xxx"""
    match = re.search(r"data:image/[^;]+;base64,([^)\"\s]+)", data_url)
    if match:
        return base64.b64decode(match.group(1))
    return b""


def extract_base64_from_content(content: str) -> bytes | None:
    """Fallback: extract base64 from embedded content (if API returns it there)."""
    if not content or "data:image" not in content:
        return None
    match = re.search(r"data:image/[^;]+;base64,([^)\"\s]+)", content)
    if match:
        return base64.b64decode(match.group(1))
    return None


def generate_image(prompt: str, api_key: str) -> bytes | None:
    """Call OpenRouter API, return image bytes or None on failure."""
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://localhost",
        "X-Title": "LandingMachine Image Gen",
    }

    # Use modalities for Gemini to return images
    data = {
        "model": MODEL,
        "modalities": ["image", "text"],
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                ],
            }
        ],
        "temperature": 0.7,
    }

    response = requests.post(
        API_URL,
        headers=headers,
        json=data,
        timeout=120,
    )

    if response.status_code != 200:
        print(f"❌ API Error: {response.status_code}")
        print(response.text)
        return None

    result = response.json()

    # Check for API-level error
    if "error" in result:
        print(f"❌ API Error: {result['error']}")
        return None

    if "choices" not in result or len(result["choices"]) == 0:
        print("❌ No choices in response")
        print(json.dumps(result, indent=2)[:1000])
        return None

    message = result["choices"][0].get("message", {})
    image_bytes = None

    # Primary: OpenRouter returns images in message.images[].image_url.url
    images = message.get("images", [])
    if images and len(images) > 0:
        img_obj = images[0]
        url_value = img_obj.get("image_url", {}).get("url") or img_obj.get("url")
        if url_value:
            image_bytes = extract_base64_from_data_url(url_value)
            if image_bytes:
                return image_bytes

    # Fallback: base64 embedded in message.content (some API variants)
    content = message.get("content", "")
    if isinstance(content, str):
        image_bytes = extract_base64_from_content(content)
    elif isinstance(content, list):
        for block in content:
            if isinstance(block, dict) and block.get("type") == "text":
                image_bytes = extract_base64_from_content(block.get("text", ""))
                if image_bytes:
                    break

    if image_bytes:
        return image_bytes

    print("❌ No image found in response")
    print(f"Message keys: {list(message.keys())}")
    if content:
        print(f"Content preview: {str(content)[:300]}...")
    return None


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate images via OpenRouter (Gemini 3.1 Flash Image). Outputs PNG."
    )
    parser.add_argument("prompt", help="Image generation prompt")
    parser.add_argument(
        "output_name",
        help="Output filename (e.g. hero-acfaty, service-vtc). Will be saved as .png",
    )
    parser.add_argument(
        "--slug",
        help="Project slug. Output goes to public/{slug}/{output_name}.png",
    )
    parser.add_argument(
        "--project-dir",
        help="Override output directory (default: landerMachine/public or public/{slug})",
    )
    parser.add_argument(
        "--format",
        choices=["png", "jpg"],
        default="png",
        help="Output format (default: png; Gemini returns PNG)",
    )
    parser.add_argument(
        "--resize",
        metavar="WIDTHxHEIGHT",
        help="Resize/crop output to exact dimensions (e.g. 1200x800 for hero 3:2). Center-crops to fill.",
    )
    args = parser.parse_args()

    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        print("❌ Error: OPENROUTER_API_KEY not set")
        print("   Tried .env at:", PROJECT_ROOT / ".env", "(exists:" + str((PROJECT_ROOT / ".env").exists()) + ")")
        print("   Tried .env at:", Path.cwd() / ".env", "(exists:" + str((Path.cwd() / ".env").exists()) + ")")
        print("   Fix: Add OPENROUTER_API_KEY to .env in project root, or run:")
        print("        export OPENROUTER_API_KEY=your_key")
        sys.exit(1)

    # Resolve output path
    if args.project_dir:
        out_dir = Path(args.project_dir)
    elif args.slug:
        out_dir = DEFAULT_PUBLIC_DIR / args.slug
    else:
        out_dir = DEFAULT_PUBLIC_DIR

    out_dir.mkdir(parents=True, exist_ok=True)

    # Normalize filename to requested format
    base_name = args.output_name
    if base_name.endswith(".png") or base_name.endswith(".jpg"):
        base_name = base_name.rsplit(".", 1)[0]
    ext = args.format
    output_file = out_dir / f"{base_name}.{ext}"

    print(f"Generating image...")
    print(f"Prompt: {args.prompt}")
    print(f"Output: {output_file}")

    image_bytes = generate_image(args.prompt, api_key)
    if not image_bytes:
        sys.exit(1)

    # Optional: resize/crop to exact dimensions (e.g. 1200x800 for hero)
    if args.resize:
        try:
            w, h = map(int, args.resize.lower().split("x"))
        except (ValueError, AttributeError):
            print(f"❌ Invalid --resize: expected WIDTHxHEIGHT, got {args.resize}")
            sys.exit(1)
        try:
            from PIL import Image
            img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
            orig_w, orig_h = img.size
            # Scale to cover target (object-cover style), then center-crop
            scale = max(w / orig_w, h / orig_h)
            new_w = max(w, ceil(orig_w * scale))
            new_h = max(h, ceil(orig_h * scale))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            left = (new_w - w) // 2
            top = (new_h - h) // 2
            img = img.crop((left, top, left + w, top + h))
            buf = io.BytesIO()
            img.save(buf, format="PNG" if ext == "png" else "JPEG", quality=90)
            image_bytes = buf.getvalue()
        except ImportError:
            print("❌ Pillow required for --resize. Run: pip install Pillow")
            sys.exit(1)

    with open(output_file, "wb") as f:
        f.write(image_bytes)

    size = len(image_bytes)
    print(f"✅ Image saved to: {output_file} ({size} bytes)")
    try:
        web_path = "/" + str(output_file.relative_to(DEFAULT_PUBLIC_DIR))
        print(f"   Config path: {web_path}")
    except ValueError:
        pass


if __name__ == "__main__":
    main()
