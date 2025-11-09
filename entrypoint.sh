#!/bin/sh
# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Running entrypoint.sh: Preparing to start application ---"

INDEX_FILE="/app/dist/index.html"

echo "[INFO] Checking for index.html at $INDEX_FILE..."
if [ ! -f "$INDEX_FILE" ]; then
  echo "[FATAL] index.html not found!"
  exit 1
fi
echo "[INFO] index.html found."

echo "[INFO] Checking for API_KEY..."
if [ -z "$API_KEY" ]; then
  echo "[FATAL] API_KEY environment variable is not set."
  exit 1
fi
echo "[INFO] API_KEY is set. Performing replacement..."

# Use a hash '#' as the sed delimiter to avoid conflicts if the key has slashes.
sed -i "s#__API_KEY__#$API_KEY#g" "$INDEX_FILE"

echo "[SUCCESS] API key has been injected."
echo "--- Handing over to CMD to start the server ---"

# Execute the CMD from the Dockerfile (e.g., "npm", "start")
exec "$@"