# Herr Magister migration pilot

This is an unchanged export of the active Cloudflare Worker `herr-magister`
(version prefix `bd33d084`), prepared on 2026-10-14. It provides Kant reading
feedback for PHIL 120. An identical inactive version has been uploaded; no
production deployment has been performed.

See [the migration inventory and safety gates](../README.md) before connecting
Git or uploading a version. API metadata parity and full rollback IDs
are verified and recorded in the parent README and production-baseline.json.

## Files

- `src/worker.js`: active ES-module source, preserved with LF line endings.
- `wrangler.jsonc`: configuration matching verified Cloudflare API settings.
- `package.json` and lockfile: pinned Wrangler tooling, no runtime dependencies.
- `test/worker.test.js`: offline HTTP and upstream-contract checks.

## Validation

```sh
npm ci
npm run check
npm test
npm run dry-run
```

All nine offline tests and the Wrangler 4.151.0 dry run passed on 2026-10-14.
No live API call was made. Do not use the simulated responses as evidence that
the unchanged Claude model still works.

The production secret `ANTHROPIC_API_KEY` stays in Cloudflare. Do not create a
new secret or copy its value into this repository. Local tests use a placeholder
and mocked network responses.

The source model, token limit, system prompt, origin, endpoint, and response
parsing intentionally match production. Improvements require a separate change.

After the parent README's parity and approval gates are met,
`npm run upload-version` uploads a version without activating production traffic.
The existing Worker is Git-connected on `migration/cloudflare-workers`, with
this folder as its root and upload-only deploy/version commands. The first Git
build is pending verification. Only changes in this folder trigger Worker builds.

Manual upload `8fd5890c-e829-47f9-aef5-2acc2f502e7b` exactly matches the
original production source and runtime metadata. See `upload-verification.json`.
Production remains on `bd33d084-d811-4ac0-bf6e-3589345d52e5` at 100%.
Version preview URLs are disabled to preserve the current setting; enabling
previews requires a reviewed safe test plan.
