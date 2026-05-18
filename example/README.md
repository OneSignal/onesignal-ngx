# example-angular

A minimal Angular standalone app showcasing `onesignal-ngx`.

## Setup

Replace `<YOUR_APP_ID>` in `src/app/app.component.ts` with your OneSignal app id.

For a locally-trusted HTTPS cert (recommended; OneSignal requires HTTPS),
install [mkcert](https://github.com/FiloSottile/mkcert) once on your machine:

```bash
brew install mkcert nss
mkcert -install
```

If mkcert isn't installed the example falls back to Angular's self-signed
cert and the browser will show a security warning.

## Available Scripts

In the project directory, you can run:

### `npm start` (or `vp run start`)

Packs the parent `onesignal-ngx` package as a tarball, installs it locally,
generates a local HTTPS cert (via mkcert if available), and runs `ng serve`
on [https://localhost:4000](https://localhost:4000).

The page will reload if you make edits.

## Re-running setup

Run `vp run setup` to re-pack the parent package and re-install the freshly
packed tarball into the example. If you've changed the SDK source, rebuild it
first by running `npm run build` from the `web-shim-codegen` repo root.
