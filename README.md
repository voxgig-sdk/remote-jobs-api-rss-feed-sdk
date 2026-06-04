# RemoteJobsApiRssFeed SDK

Browse remote job listings from Jobicy, filtered by region, industry, and keyword

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Jobicy Remote Jobs API

Jobicy is a remote-work career platform that exposes its job board through a public JSON API and RSS/XML feeds. The SDK wraps the JSON endpoint at `https://jobicy.com/api/v2/remote-jobs`, which surfaces listings aggregated by [Jobicy](https://jobicy.com).

What you get from the API:
- Remote job listings filterable by `count` (1-100, default 100), `geo` (e.g. `usa`, `canada`, `europe`), `industry` (e.g. `marketing`, `dev`, `engineering`), and `tag` (free-text search over title and description).
- Per-job fields including `id`, `url`, `jobTitle`, `companyName`, `companyLogo`, `jobIndustry`, `jobType`, `jobGeo`, `jobLevel`, `jobExcerpt`, `jobDescription` (HTML), `pubDate` (UTC), and salary information (`salaryMin`, `salaryMax`, `salaryCurrency`, `salaryPeriod`).
- A parallel RSS feed at `https://jobicy.com/feed/job_feed` with parameters `job_categories`, `job_types`, `search_keywords`, and `search_region`.

Operational notes: no authentication is required, CORS is disabled (server-side or proxied calls only), and Jobicy asks that clients poll no more than hourly. Newly posted jobs are held back about 6 hours before they surface in the feed.

## Try it

**TypeScript**
```bash
npm install remote-jobs-api-rss-feed
```

**Python**
```bash
pip install remote-jobs-api-rss-feed-sdk
```

**PHP**
```bash
composer require voxgig/remote-jobs-api-rss-feed-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/go
```

**Ruby**
```bash
gem install remote-jobs-api-rss-feed-sdk
```

**Lua**
```bash
luarocks install remote-jobs-api-rss-feed-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RemoteJobsApiRssFeedSDK } from 'remote-jobs-api-rss-feed'

const client = new RemoteJobsApiRssFeedSDK({})

// List all remotejobs
const remotejobs = await client.RemoteJob().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o remote-jobs-api-rss-feed-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "remote-jobs-api-rss-feed": {
      "command": "/abs/path/to/remote-jobs-api-rss-feed-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **RemoteJob** | A remote job listing returned by `GET /api/v2/remote-jobs`, including title, company, geo, industry, level, salary range, publication date, and a URL back to the full posting on Jobicy. | `/api/v2/remote-jobs` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from remotejobsapirssfeed_sdk import RemoteJobsApiRssFeedSDK

client = RemoteJobsApiRssFeedSDK({})

# List all remotejobs
remotejobs, err = client.RemoteJob(None).list(None, None)
```

### PHP

```php
<?php
require_once 'remotejobsapirssfeed_sdk.php';

$client = new RemoteJobsApiRssFeedSDK([]);

// List all remotejobs
[$remotejobs, $err] = $client->RemoteJob(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/go"

client := sdk.NewRemoteJobsApiRssFeedSDK(map[string]any{})

// List all remotejobs
remotejobs, err := client.RemoteJob(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "RemoteJobsApiRssFeed_sdk"

client = RemoteJobsApiRssFeedSDK.new({})

# List all remotejobs
remotejobs, err = client.RemoteJob(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("remote-jobs-api-rss-feed_sdk")

local client = sdk.new({})

-- List all remotejobs
local remotejobs, err = client:RemoteJob(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RemoteJobsApiRssFeedSDK.test()
const result = await client.RemoteJob().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RemoteJobsApiRssFeedSDK.test(None, None)
result, err = client.RemoteJob(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RemoteJobsApiRssFeedSDK::test(null, null);
[$result, $err] = $client->RemoteJob(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.RemoteJob(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RemoteJobsApiRssFeedSDK.test(nil, nil)
result, err = client.RemoteJob(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:RemoteJob(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Jobicy Remote Jobs API

- Upstream: [https://jobicy.com](https://jobicy.com)
- API docs: [https://jobicy.com/jobs-rss-feed](https://jobicy.com/jobs-rss-feed)

- Free public access; no API key required.
- Fair use: keep feed checks to at most once per hour.
- Do not redistribute the data to competing job platforms.
- New listings appear after an approximate 6-hour publication delay.

---

Generated from the Jobicy Remote Jobs API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
