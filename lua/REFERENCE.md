# RemoteJobsApiRssFeed Lua SDK Reference

Complete API reference for the RemoteJobsApiRssFeed Lua SDK.


## RemoteJobsApiRssFeedSDK

### Constructor

```lua
local sdk = require("remote-jobs-api-rss-feed_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `RemoteJob(data)`

Create a new `RemoteJob` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## RemoteJobEntity

```lua
local remote_job = client:RemoteJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyLogo` | `string` | No | Company logo link |
| `companyName` | `string` | No | Company name |
| `id` | `string` | No | Unique Job ID |
| `jobDescription` | `string` | No | Full job description (HTML) |
| `jobExcerpt` | `string` | No | Excerpt job description (max 55 characters) |
| `jobGeo` | `string` | No | Geographic restriction for employment (or Anywhere if not applicable) |
| `jobIndustry` | `string` | No | Job function (industry) |
| `jobLevel` | `string` | No | Seniority level (or Any if not applicable) |
| `jobTitle` | `string` | No | Job title |
| `jobType` | `string` | No | Job type (full-time, contract, part-time or internship) |
| `pubDate` | `string` | No | Publication date and time (UTC+00:00) |
| `salaryCurrency` | `string` | No | ISO 4217 salary currency code (if applicable) |
| `salaryMax` | `number|string` | No | Max salary (if applicable) |
| `salaryMin` | `number|string` | No | Min salary (if applicable) |
| `salaryPeriod` | `string` | No | The period for which the salary is paid (e.g., hourly, daily, ...) |
| `url` | `string` | No | Job link |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RemoteJob():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoteJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

