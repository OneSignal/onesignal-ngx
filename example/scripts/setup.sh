#!/bin/bash
set -euo pipefail

bold=$(tput bold 2>/dev/null || true)
normal=$(tput sgr0 2>/dev/null || true)

log() {
  echo -e "\n${bold}$1${normal}"
}

EXAMPLE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PARENT_DIR="$(cd "$EXAMPLE_DIR/.." && pwd)"
TARBALL="onesignal-ngx.tgz"
CERTS_DIR="$EXAMPLE_DIR/.certs"

log "Packing onesignal-ngx from $PARENT_DIR"
cd "$PARENT_DIR"
bun pm pack --filename "$EXAMPLE_DIR/$TARBALL"

log "Installing tarball into example"
cd "$EXAMPLE_DIR"
vp install --force

log "Generating locally-trusted HTTPS cert"
if ! command -v mkcert >/dev/null 2>&1; then
  echo "mkcert not found. Install it for a locally-trusted HTTPS cert:"
  echo "  brew install mkcert nss && mkcert -install"
  echo "Falling back to Angular's self-signed cert (browser will warn)."
  exit 0
fi
if [[ ! -f "$CERTS_DIR/cert.pem" || ! -f "$CERTS_DIR/key.pem" ]]; then
  mkdir -p "$CERTS_DIR"
  mkcert -key-file "$CERTS_DIR/key.pem" -cert-file "$CERTS_DIR/cert.pem" localhost 127.0.0.1 ::1
else
  echo "Cert already present at $CERTS_DIR, skipping."
fi
