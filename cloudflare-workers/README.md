# Cloudflare Workers migration

Status as of 2026-10-15: **the Herr Magister pilot is in Git, its model fix is
verified, and version `742fa755-c204-4bb1-b8df-dac2e1074ee2` is serving 100% of
production traffic**.

The Cloudflare Pages project named `austin-academics` is connected to
`YugenPhotog/rcchistory`, the repository containing this directory.
Work is on branch `migration/cloudflare-workers`. The original version remains
available for rollback.
Review: [draft pull request #6](https://github.com/YugenPhotog/rcchistory/pull/6).

## Account inventory

Account: `fffc85f812c2747d6720cf27271b0658`; workers.dev subdomain: `stvastn`.

| Worker | Production URL | Active version prefix | Type | Git integration |
| --- | --- | --- | --- | --- |
| herr-magister | https://herr-magister.stvastn.workers.dev/ | 742fa755 (100%) | ES module, one worker.js module | YugenPhotog/rcchistory; upload-only migration branch |
| lecture-tracker | https://lecture-tracker.stvastn.workers.dev/ | b390a2e8 (100%) | Static assets only | austin-academics/lecture-tracker |

Only two Workers were listed. Four separate Pages projects were also listed:
`austin-academics`, `ancora-imparo-v2`, `ancora-imparo`, and `lecture-tracker`.
They are not being migrated. In particular, the lecture-tracker Worker and Pages
project are separate resources.

The original source export, updated JavaScript syntax, all 14 offline behavior
tests, Wrangler 4.151.0 dry run, candidate-source comparison, and live request
passed. The dependency lockfile has been generated.

The Pages project builds all non-production branches as public previews, using
only the `public` output directory and no build command. The migration
branch has been pushed; Pages may build public previews, while production remains on main.

Full rollback identities were verified through authenticated Cloudflare APIs:

| Worker | Original deployment ID | Original active version ID | Traffic |
| --- | --- | --- | --- |
| herr-magister | 765f8343-42cd-4948-9d6c-813de55a638f | bd33d084-d811-4ac0-bf6e-3589345d52e5 | 100% |
| lecture-tracker | 8e4553a1-9077-478a-b12f-28b9e4d41e7d | b390a2e8-f7c9-4af9-9048-12ed51f5cc1e | 100% |

Sanitized metadata is saved in [production-baseline.json](production-baseline.json).
The exact active-version API export matches the pilot source byte for byte
(5,584 bytes; one application/javascript+module named worker.js).
The documented wrangler init --from-dash herr-magister export path was attempted;
its project generator stopped at an optional dependency build approval before
downloading source. No dependency approval or deployment was performed.
The completed export instead uses the documented GET Worker Version API with
include=modules and the exact active version UUID.

Wrangler OAuth is authorized for account/user read and Workers/Workers Scripts
write. Authentication stays outside this Git checkout and no credentials are
included in the source or metadata.

### herr-magister: pilot

- Original active source: dashboard editor showed `bd33d084 (Active) Latest` before migration uploads.
- Source exported through the editor clipboard, then verified byte-for-byte
  against the exact active version via the official API. No code changes.
- SHA-256 of `src/worker.js`: `5082ae8c7bd2d99959edf910ae3ed515ec8780797ac8dac00882e6f0ae113984`.
- Compatibility date: `2026-06-06`; no compatibility flags displayed.
- Default placement; Workers Cache disabled.
- Secret name: `ANTHROPIC_API_KEY`. Value remains in Cloudflare and was not viewed/exported.
- No runtime plaintext variables, connected bindings, cron triggers, queue consumers,
  email triggers, custom domains, or routes were displayed.
- workers.dev enabled; version previews disabled.
- Logs enabled; invocation logs and persistence enabled; log sampling 100%;
  traces and issues disabled; no export destinations.
- External API: https://api.anthropic.com/v1/messages.
- Allowed origins: https://austin-academics.pages.dev and
  https://austin-academics.com.
- Production uses `claude-sonnet-5-5`, `thinking: { type: "between_tools" }`,
  first-text-block response parsing, and `max_tokens: 400`. The original system
  prompt was preserved exactly.
- No application dependencies or imports; no build command needed.
- Wrangler configuration now matches verified API settings; all log persistence,
  sampling, query-redaction, logpush, and tail-consumer values are explicit.
  The existing secret is retained by Cloudflare; no plaintext variables exist.

### lecture-tracker: special handling

- Already Git-connected to https://github.com/austin-academics/lecture-tracker.
  The available GitHub connector returned 404 for this repository; access or repository
  status must be resolved before changing that integration.
- Active version is `b390a2e8`, NOT the newer listed `13b3830d`.
  The newer version is associated with commit
  `449b4bd0e00825f27866d0e83ed4455c6ba6603e` on `cloudflare/workers-autoconfig`.
- Compatibility date `2026-07-09`; flag `nodejs_compat`; static-assets-only Worker.
- No runtime variables, secrets, bindings, or triggers supported/displayed for this type.
- No custom domains/routes shown; workers.dev and version previews enabled.
- Production branch `main`; non-production branch builds enabled.
- Build command blank; deploy command AND version command both `npx wrangler deploy`.
- Root directory `/`; include watch path `*`; no excludes displayed.
- Builds enabled; build cache enabled; no build variables/secrets or deploy hooks.
- Build credential label `lecture-tracker build token` (value not accessed).
- Do not push to its connected repository or reconnect it until the active asset
  source and automatic-deploy behavior are understood.

## Local pilot validation

From `cloudflare-workers/herr-magister`:

```sh
npm ci
npm run check
npm test
npm run dry-run
```

Wrangler is pinned to 4.151.0. The dry run compiles/validates without deployment.
Tests use synthetic input and mocked Anthropic responses, with no real secrets,
API calls, or production storage access.

The source fingerprint verifies export parity. All 14 offline tests and the
Wrangler 4.151.0 dry run passed. Tests cover HTTP, CORS, error, request,
thinking-block, and text-response behavior. One approved live request from
`https://austin-academics.com` returned HTTP 200 with non-empty feedback.

## Git builds and inactive upload status

The existing herr-magister Worker is connected to `YugenPhotog/rcchistory`,
branch `migration/cloudflare-workers`, with root `cloudflare-workers/herr-magister`.
Both deploy and version commands are `npx wrangler versions upload --keep-vars`.
The build command is empty, and the include watch path is
`cloudflare-workers/herr-magister/**`. No credentials were copied into Git.
Git build `2dd242cf-83de-4b5e-a79d-556826636c4d` succeeded for commit
`d2f6c6a013a821d49e30078b122efcb25accd409`, uploading inactive version
`eca20ea0-5ff6-4a2e-99bc-428145bf8ca8`. The uploaded source/modules, runtime
metadata, and secret-binding names exactly match the original. Both production
deployments and their traffic allocations remain unchanged.
A second build `5812a932-e4fd-4628-a1bd-1d718cc800db` also succeeded for
commit `5f7a12a9017b9d27291f9b42343222dda4e3c7f3`, uploading inactive version
`d0ca8b0e-1dbb-42d9-aa57-0488af2573cb` with the same exact parity and
unchanged-production checks passing.
See [git-build-verification.json](git-build-verification.json) and
[git-build-settings.json](git-build-settings.json). Other branch builds are disabled.

Model-fix build `ee803018-0d20-419a-9097-41fcfe013f26` succeeded for commit
`5c17f71d5c69056c277b478456baf227af6b9190` and uploaded version
`742fa755-c204-4bb1-b8df-dac2e1074ee2`. The uploaded source matched the commit;
the system prompt, runtime metadata, module metadata, and secret-binding names
were verified. After explicit approval, this version was deployed at 100%.

Manual inactive upload `8fd5890c-e829-47f9-aef5-2acc2f502e7b` was verified
against the original active version: identical source/module metadata, runtime
metadata, and secret-binding names. At that stage both Workers still served their
recorded original versions at 100%. Herr Magister later moved to the approved
model-fix version; lecture-tracker remains unchanged. Script settings and preview
settings are unchanged.
See [upload-verification.json](herr-magister/upload-verification.json).
Version URLs remain disabled; no live Anthropic or preview request was made.

For future edits, change the pilot source/config on the migration branch, run
the local validation checks above, review the diff, and push. A matching Git change should upload
an inactive version only. Verify its build log and exact version against the
production baseline. Production cutover always requires separate approval.

## Migration checklist and operating safeguards

1. Obtain full active deployment/version IDs, traffic allocations, exact server
   settings, and module metadata through authenticated read-only operations.
2. Confirm the module and configuration match the active version, not a draft or
   merely the newest uploaded version. Preserve module format and entrypoint.
3. Record the verified full rollback IDs and settings in this document.
4. Confirm `ANTHROPIC_API_KEY` remains provisioned. Never put its value in Git,
   shell history, documentation, or build output.
5. Verify the final configuration retains logs/settings/bindings and does not
   create resources or modify triggers/routes.
6. Check Pages preview build behavior before pushing this branch. Do not push to
   main or trigger production deployment during preparation.
7. Connect the EXISTING herr-magister Worker under Settings > Builds > Connect
   only after parity is complete. Inspect all settings BEFORE confirming any
   connection that may trigger a build.
8. Set the build root to `cloudflare-workers/herr-magister`, restrict watch paths
   to `cloudflare-workers/herr-magister/**`, and use the migration branch initially.
9. Set BOTH production and non-production/version commands to
   `npx wrangler versions upload --keep-vars` before any build can run.
   Keep the build command empty (or use offline checks only).
10. If the connection wizard cannot configure an upload-only command before its
    first build, STOP and use Cloudflare's documented Builds API with separately
    authorized access. Do not connect first and change the command afterward.
11. Compare active deployment IDs/traffic before and after each upload.
    Uploading is not deploying; production traffic must remain unchanged until
    a specific candidate receives explicit approval.
12. Version URLs use the version's configured resources/secrets. They are not
    automatically isolated. Keep previews disabled until a safe test plan is
    approved; use mocked local tests now. Any live test should use synthetic
    data, no production storage writes, and must not change production traffic.

`keep_vars: true` and `--keep-vars` retain dashboard-managed variables.
Existing secrets remain managed in Cloudflare. This project intentionally has
no deploy script. Do not use `wrangler deploy` without `--dry-run`, `versions deploy`,
`rollback`, or `triggers deploy` during migration preparation.

## Remaining work

- Version preview URLs remain disabled.
- Keep future Git builds upload-only and require explicit approval before moving
  production traffic.
- lecture-tracker is inventoried only. Its active static-asset source and repository
  access need to be resolved before exporting or changing its existing Git link.
  Its current automatic production-deploy commands were not changed.

## Cutover and rollback

Version `742fa755-c204-4bb1-b8df-dac2e1074ee2` was deployed at 100% only after
explicit approval. The original version remains the rollback target.

Before any approved cutover, retain the original deployed version and deployment
identity. If rollback is later authorized, restore that exact original version
at its recorded traffic allocation. Do not rebuild old code and assume it is
identical. Versions do not snapshot external KV, R2, D1, or Durable Object state.
Never delete or recreate a Worker as a rollback technique.

For a future explicitly approved candidate, run from the pilot directory:

```sh
npx wrangler versions deploy <approved-version-id>@100
```

If a rollback is explicitly authorized, restore the recorded original:

```sh
npx wrangler versions deploy bd33d084-d811-4ac0-bf6e-3589345d52e5@100
```

The candidate deployment command was run for version `742fa755`; the rollback
command was not run. Check active deployment traffic immediately after every
future approved deployment or rollback.
Do not change the Git production-branch setting to main or merge the migration
PR until the review plan is accepted; the existing Pages project deploys main.

## Official references

- [Wrangler Worker commands: export, dry run, and versions upload](https://developers.cloudflare.com/workers/wrangler/commands/workers/)
- [Workers Builds setup](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Build configuration and deploy/version commands](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Builds API reference](https://developers.cloudflare.com/workers/ci-cd/builds/api-reference/)
- [Versions and deployments](https://developers.cloudflare.com/workers/versions-and-deployments/)
- [Version preview URLs and resource behavior](https://developers.cloudflare.com/workers/versions-and-deployments/version-urls/)
