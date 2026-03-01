#!/usr/bin/env python3

import requests
import sys
import json
import base64
import re

API_KEY = "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"

if len(sys.argv) < 3:
    print("Usage: python3 generate-image.py 'prompt' output.jpg")
    sys.exit(1)

prompt = sys.argv[1]
output_file = sys.argv[2]

print(f"Generating image...")
print(f"Prompt: {prompt}")

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "HTTP-Referer": "https://localhost",
    "X-Title": "LandingMachine Image Gen"
}

# Try the chat completions endpoint with image generation model
data = {
    "model": "google/gemini-2.5-flash-image",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": prompt
                }
            ]
        }
    ],
    "temperature": 0.7
}

try:
    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        json=data,
        timeout=120
    )
    
    print(f"Response status: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"Response: {json.dumps(result, indent=2)}")
        
        # Check if there's an image in the response
        if 'choices' in result and len(result['choices']) > 0:
            message = result['choices'][0].get('message', {})
            content = message.get('content', '')
            
            # Look for base64 image data
            if content and 'data:image' in content:
                # Extract base64 data from markdown format ![...](data:image/...;base64,...)
                import re
                match = re.search(r'data:image/[^;]+;base64,([^)"\s]+)', content)
                if match:
                    base64_data = match.group(1)
                    with open(output_file, 'wb') as f:
                        f.write(base64.b64decode(base64_data))
                    print(f"✅ Image saved to: {output_file}")
                else:
                    print(f"Could not extract base64 data from content")
                    print(f"Content: {content[:500]}")
            elif content:
                print(f"Response content (no image found): {content[:500]}")
        else:
            print(f"Full response: {result}")
    else:
        print(f"❌ API Error: {response.status_code}")
        print(f"Response: {response.text}")
        
except Exception as e:
    print(f"❌ Error: {e}")
    import traceback
    traceback.print_exc()
