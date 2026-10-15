# Herr Magister Cloudflare Worker

Herr Magister is the PHIL 120 Kant-reading feedback proxy. The browser sends a
student's question and answer to this Worker, the Worker calls Anthropic, and it
returns feedback written according to the existing Kant system prompt.

This directory exists because the Worker was originally edited only in the
Cloudflare dashboard. We migrated it into Git so its source, configuration,
tests, deployment history, and rollback path are reviewable and reproducible.

## Current production state

As of October 15, 2026:

- Production URL: <https://herr-magister.stvastn.workers.dev/feedback>
- Active version: `742fa755-c204-4bb1-b8df-dac2e1074ee2` at 100% traffic
- Original rollback version: `bd33d084-d811-4ac0-bf6e-3589345d52e5`
- Original rollback deployment: `765f8343-42cd-4948-9d6c-813de55a638f`
- Model: `claude-sonnet-5-5`
- Thinking mode: `{ type: "between_tools" }`
- `max_tokens`: `400`
- Allowed browser origins:
  - `https://austin-academics.pages.dev`
  - `https://austin-academics.com`
- Cloudflare secret name: `ANTHROPIC_API_KEY`

The secret value remains in Cloudflare. It was never viewed, exported, or
committed.

## What we changed and why

### 1. Moved the dashboard Worker into Git

We exported the exact active module and recorded its Cloudflare settings before
changing anything. The original source, module format, compatibility date,
observability settings, binding names, deployment ID, and traffic allocation
were captured so the migration could be checked and reversed.

Cloudflare Builds now watches only `cloudflare-workers/herr-magister/**` on the
`migration/cloudflare-workers` branch. Its deploy and version commands are both:

```sh
npx wrangler versions upload --keep-vars
```

That command creates an inactive version. A Git push does not move production
traffic. Production changes require a separate, explicit `versions deploy`
command.

### 2. Updated the Claude request

The retired `claude-sonnet-4-20250514` model was replaced with
`claude-sonnet-5-5`. The new model can return a thinking block before its text,
so the request now uses `thinking: { type: "between_tools" }` and the response
parser selects the first block whose type is `text`.

No `temperature`, `top_p`, or `top_k` parameter is sent. The full Kant system
prompt and `max_tokens: 400` were preserved exactly.

### 3. Allowed the live custom domain

The Kant page is served from both the Pages domain and
`https://austin-academics.com`. The Worker now accepts both origins and returns
the matching `Access-Control-Allow-Origin` value with `Vary: Origin`.

## Validation performed

- JavaScript syntax check passed.
- All 14 offline tests passed.
- Tests cover both allowed origins, rejected origins, request shape, upstream
  errors, missing text, and a thinking block before the first text block.
- Wrangler 4.151.0 dry run passed.
- Uploaded version `742fa755-c204-4bb1-b8df-dac2e1074ee2` was compared with
  the committed source and matched exactly.
- The system prompt, module/runtime metadata, and secret-binding names were
  verified unchanged from the reviewed candidate.
- After explicit approval, the candidate was deployed at 100%.
- A live request from `https://austin-academics.com` using question
  `r_p5_q1` returned HTTP 200 and non-empty text.

The live reply began: “You have grasped the heart of the distinction. The
prudent question concerns my interests, such as avoiding punishment, while the
moral question asks whether the principle behind my action could hold as a
universal law.”

## Local workflow

From this directory:

```sh
npm ci
npm run check
npm test
npm run dry-run
```

`npm run dry-run` validates the Worker without uploading or deploying it.

After review, pushing a change in this directory to the configured migration
branch uploads an inactive version. Record the new version ID, compare it with
the committed source and expected configuration, and verify that production
traffic has not moved.

Deploy a reviewed version only after explicit approval:

```sh
npx wrangler versions deploy <approved-version-id>@100
```

Confirm the active version immediately afterward:

```sh
npx wrangler deployments status
```

## Rollback

The known-good pre-migration version is retained in Cloudflare. If rollback is
explicitly approved, run:

```sh
npx wrangler versions deploy bd33d084-d811-4ac0-bf6e-3589345d52e5@100
```

Then run `npx wrangler deployments status` and confirm that the original version
has 100% traffic. Do not recreate or rename the Worker as a rollback method.

## Repository files

- `src/worker.js`: production Worker source.
- `test/worker.test.js`: offline request, CORS, and response-parsing tests.
- `wrangler.jsonc`: reviewed Cloudflare runtime configuration.
- `package.json` and `package-lock.json`: pinned Wrangler tooling.
- `upload-verification.json`: evidence for the original parity upload.
- `../production-baseline.json`: sanitized original production metadata.
- `../git-build-settings.json`: saved Git-build configuration.
- `../git-build-verification.json`: upload-only build verification.

The migration and model update were reviewed in
[PR #6](https://github.com/YugenPhotog/rcchistory/pull/6). The separate
`lecture-tracker` Worker was inventoried but was not changed.
