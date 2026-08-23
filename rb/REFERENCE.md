# RemoteJobsApiRssFeed Ruby SDK Reference

Complete API reference for the RemoteJobsApiRssFeed Ruby SDK.


## RemoteJobsApiRssFeedSDK

### Constructor

```ruby
require_relative 'RemoteJobsApiRssFeed_sdk'

client = RemoteJobsApiRssFeedSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RemoteJobsApiRssFeedSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = RemoteJobsApiRssFeedSDK.test
```


### Instance Methods

#### `RemoteJob(data = nil)`

Create a new `RemoteJob` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## RemoteJobEntity

```ruby
remote_job = client.RemoteJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyLogo` | `String` | No | Company logo link |
| `companyName` | `String` | No | Company name |
| `id` | `String` | No | Unique Job ID |
| `jobDescription` | `String` | No | Full job description (HTML) |
| `jobExcerpt` | `String` | No | Excerpt job description (max 55 characters) |
| `jobGeo` | `String` | No | Geographic restriction for employment (or Anywhere if not applicable) |
| `jobIndustry` | `String` | No | Job function (industry) |
| `jobLevel` | `String` | No | Seniority level (or Any if not applicable) |
| `jobTitle` | `String` | No | Job title |
| `jobType` | `String` | No | Job type (full-time, contract, part-time or internship) |
| `pubDate` | `String` | No | Publication date and time (UTC+00:00) |
| `salaryCurrency` | `String` | No | ISO 4217 salary currency code (if applicable) |
| `salaryMax` | `Object` | No | Max salary (if applicable) |
| `salaryMin` | `Object` | No | Min salary (if applicable) |
| `salaryPeriod` | `String` | No | The period for which the salary is paid (e.g., hourly, daily, ...) |
| `url` | `String` | No | Job link |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RemoteJob.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RemoteJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = RemoteJobsApiRssFeedSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

