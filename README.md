# esbuild-typescript-modules-workers-with-cors

See https://github.com/codewithkristian/esbuild-typescript-modules-workers-template

This adds support for:

- CORS
- Routing via `itty-router`

## Install

- Run `yarn`
- Develop via `make dev` (see `wrangler.toml`) and publish via `wrangler publish`

## Test CORS for GET

Example: Run below in Safari dev console while on `https://dash.cloudflare.com`

```js
const WORKER_URL = "https://foo-worker.workers.dev"
const API_KEY = "SECRET"

await fetch(WORKER_URL + "/foo", {
  method: "GET",
  mode: "cors",
  headers: { "Content-type": "application/json", "X-API-KEY": API_KEY },
}).then((r) => r.json())
```

## Test CORS for POST

Example: Run below in Safari dev console while on `https://dash.cloudflare.com`

```js
const WORKER_URL = "https://foo-worker.workers.dev"
const API_KEY = "SECRET"

await fetch(WORKER_URL + "/foo", {
  method: "POST",
  mode: "cors",
  body: JSON.stringify({ foo: "bar" }),
  headers: {
    "Content-type": "application/json",
    "X-API-KEY": API_KEY,
  },
}).then((r) => r.json())
```
