#!/bin/bash
set -euo pipefail

EXAMPLE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CERTS_DIR="$EXAMPLE_DIR/.certs"

cd "$EXAMPLE_DIR"

if [[ -f "$CERTS_DIR/cert.pem" && -f "$CERTS_DIR/key.pem" ]]; then
  exec vpx ng serve --port 4000 --open \
    --ssl --ssl-cert "$CERTS_DIR/cert.pem" --ssl-key "$CERTS_DIR/key.pem"
else
  exec vpx ng serve --port 4000 --open --ssl
fi
