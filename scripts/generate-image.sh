#!/bin/bash
# Thin wrapper for generate-image.py (OpenRouter / Gemini 3.1 Flash Image)
# Requires: OPENROUTER_API_KEY in .env at project root (or export it)
#           pip install -r scripts/requirements.txt  # requests, python-dotenv, Pillow
#
# Usage: ./generate-image.sh "prompt" output_name [--slug SLUG] [--resize WxH]
#
# Examples:
#   ./generate-image.sh "Professional office" hero-acfaty --slug acfaty --resize 1200x800
#   ./generate-image.sh "Taxi car" service-vtc

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
# Prefer venv Python (has requests, python-dotenv, Pillow)
if [ -x "$PROJECT_ROOT/.venv/bin/python3" ]; then
  exec "$PROJECT_ROOT/.venv/bin/python3" "$SCRIPT_DIR/generate-image.py" "$@"
else
  exec python3 "$SCRIPT_DIR/generate-image.py" "$@"
fi
