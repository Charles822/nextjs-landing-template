#!/bin/bash
# Thin wrapper for generate-image.py (OpenRouter / Gemini 2.5 Flash Image)
# Usage: ./generate-image.sh "prompt" output_name [--slug SLUG]
#
# Examples:
#   ./generate-image.sh "Professional office" hero-acfaty --slug acfaty
#   ./generate-image.sh "Taxi car" service-vtc

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec python3 "$SCRIPT_DIR/generate-image.py" "$@"
