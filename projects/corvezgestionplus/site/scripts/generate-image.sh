#!/bin/bash

# OpenRouter Image Generation Script
# Correct implementation based on OpenRouter docs
# Usage: ./generate-image.sh "prompt" "output-filename"

API_KEY="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"
PROMPT="$1"
OUTPUT="$2"

if [ -z "$PROMPT" ] || [ -z "$OUTPUT" ]; then
    echo "Usage: ./generate-image.sh 'prompt' 'output.jpg'"
    exit 1
fi

echo "Generating image via OpenRouter..."
echo "Prompt: $PROMPT"

# Create temp file for response
RESPONSE_FILE=$(mktemp)

# Call OpenRouter API using chat completions with modalities parameter
curl -s -X POST \
  https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -H "HTTP-Referer: https://localhost" \
  -d "{
    \"model\": \"google/gemini-2.5-flash-image\",
    \"messages\": [
      {
        \"role\": \"user\",
        \"content\": \"$PROMPT\"
      }
    ],
    \"modalities\": [\"image\", \"text\"]
  }" \
  -o "$RESPONSE_FILE"

# Check if we got a valid JSON response
if ! cat "$RESPONSE_FILE" | jq empty 2>/dev/null; then
    echo "Error: Invalid response from API"
    cat "$RESPONSE_FILE"
    rm "$RESPONSE_FILE"
    exit 1
fi

# Check for errors
ERROR=$(cat "$RESPONSE_FILE" | jq -r '.error // empty')
if [ -n "$ERROR" ]; then
    echo "API Error: $ERROR"
    cat "$RESPONSE_FILE"
    rm "$RESPONSE_FILE"
    exit 1
fi

# Extract base64 image data from response
# The image is in choices[0].message.images[0].image_url.url as base64 data URL
BASE64_DATA=$(cat "$RESPONSE_FILE" | jq -r '.choices[0].message.images[0].image_url.url // empty')

if [ -n "$BASE64_DATA" ] && [ "$BASE64_DATA" != "null" ]; then
    echo "Found image data, decoding..."
    # Extract base64 part after the comma (data:image/png;base64,xxxxx)
    echo "$BASE64_DATA" | cut -d',' -f2 | base64 -d > "$OUTPUT"
    
    # Check if output was created successfully
    if [ -f "$OUTPUT" ] && [ -s "$OUTPUT" ]; then
        FILESIZE=$(stat -c%s "$OUTPUT" 2>/dev/null || stat -f%z "$OUTPUT" 2>/dev/null)
        echo "✅ Image saved to: $OUTPUT (${FILESIZE} bytes)"
        FILETYPE=$(file "$OUTPUT" 2>/dev/null)
        echo "File type: $FILETYPE"
    else
        echo "❌ Error: Failed to decode image"
        rm "$RESPONSE_FILE"
        exit 1
    fi
else
    echo "Could not extract image from response. Response content:"
    cat "$RESPONSE_FILE" | jq .
    rm "$RESPONSE_FILE"
    exit 1
fi

rm "$RESPONSE_FILE"
