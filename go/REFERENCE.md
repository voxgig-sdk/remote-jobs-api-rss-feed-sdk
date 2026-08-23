# RemoteJobsApiRssFeed Golang SDK Reference

Complete API reference for the RemoteJobsApiRssFeed Golang SDK.


## RemoteJobsApiRssFeedSDK

### Constructor

```go
func NewRemoteJobsApiRssFeedSDK(options map[string]any) *RemoteJobsApiRssFeedSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *RemoteJobsApiRssFeedSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *RemoteJobsApiRssFeedSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `RemoteJob(data map[string]any) RemoteJobsApiRssFeedEntity`

Create a new `RemoteJob` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## RemoteJobEntity

```go
remoteJob := client.RemoteJob(nil)
fmt.Println(remoteJob.GetName()) // "remote_job"
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
| `salaryMax` | `any` | No | Max salary (if applicable) |
| `salaryMin` | `any` | No | Min salary (if applicable) |
| `salaryPeriod` | `string` | No | The period for which the salary is paid (e.g., hourly, daily, ...) |
| `url` | `string` | No | Job link |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RemoteJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemoteJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewRemoteJobsApiRssFeedSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

