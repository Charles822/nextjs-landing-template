#!/usr/bin/env python3
"""
Download assets listed in projects/{slug}/assets.md to projects/{slug}/assets/.
Used in the landing transformation workflow (Step 1.5).
Outputs a JSON mapping of original_url -> local_path to assets-map.json.
"""

import argparse
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

try:
    import requests
except ImportError:
    print("Error: requests required. Run: pip install requests")
    sys.exit(1)

SCRIPT_DIR = Path(__file__).resolve().parent
LANDER_ROOT = SCRIPT_DIR.parent
# Projects folder: sibling of landerMachine, or landerMachine/projects
PROJECTS_DIR = LANDER_ROOT.parent / "projects"
if not PROJECTS_DIR.exists():
    PROJECTS_DIR = LANDER_ROOT / "projects"


def parse_assets_md(path: Path) -> list[str]:
    """Extract URLs from assets.md. Lines starting with - and a URL are collected."""
    urls = []
    if not path.exists():
        return urls
    text = path.read_text(encoding="utf-8")
    # Match lines like: - https://example.com/image.png
    for line in text.splitlines():
        line = line.strip()
        if line.startswith("-"):
            rest = line[1:].strip()
            if rest.startswith("http://") or rest.startswith("https://"):
                urls.append(rest)
    return urls


def get_extension(url: str) -> str:
    """Infer file extension from URL path. Default to .bin if unclear."""
    parsed = urlparse(url)
    path = parsed.path
    if "." in path:
        ext = path.rsplit(".", 1)[-1].lower()
        if ext in ("png", "jpg", "jpeg", "gif", "webp", "svg", "ico"):
            return f".{ext}"
    return ".bin"


def download_assets(slug: str, output_map: bool = True) -> dict[str, str]:
    """
    Download all URLs from projects/{slug}/assets.md to projects/{slug}/assets/.
    Returns mapping {original_url: local_filename}.
    """
    project_dir = PROJECTS_DIR / slug
    assets_md = project_dir / "assets.md"
    assets_dir = project_dir / "assets"

    if not assets_md.exists():
        print(f"Warning: {assets_md} not found. Nothing to download.")
        return {}

    urls = parse_assets_md(assets_md)
    if not urls:
        print(f"No URLs found in {assets_md}")
        return {}

    assets_dir.mkdir(parents=True, exist_ok=True)
    mapping: dict[str, str] = {}

    for i, url in enumerate(urls):
        ext = get_extension(url)
        local_name = f"{slug}-{i}{ext}"
        local_path = assets_dir / local_name

        try:
            r = requests.get(url, timeout=30)
            r.raise_for_status()
            local_path.write_bytes(r.content)
            rel_path = f"assets/{local_name}"
            mapping[url] = rel_path
            print(f"Downloaded: {url} -> {rel_path}")
        except requests.RequestException as e:
            print(f"Error downloading {url}: {e}", file=sys.stderr)

    if output_map and mapping:
        map_path = project_dir / "assets-map.json"
        map_path.write_text(json.dumps(mapping, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"Mapping saved to {map_path}")

    return mapping


def main():
    parser = argparse.ArgumentParser(
        description="Download assets from projects/{slug}/assets.md to projects/{slug}/assets/"
    )
    parser.add_argument("--slug", "-s", required=True, help="Project slug (e.g. altiusconseil)")
    parser.add_argument("--no-map", action="store_true", help="Do not write assets-map.json")
    args = parser.parse_args()
    mapping = download_assets(args.slug, output_map=not args.no_map)
    sys.exit(0 if mapping else 1)


if __name__ == "__main__":
    main()
