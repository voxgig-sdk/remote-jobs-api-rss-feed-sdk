# RemoteJobsApiRssFeed Ruby SDK Reference

Complete API reference for the RemoteJobsApiRssFeed Ruby SDK.


## RemoteJobsApiRssFeedSDK

### Constructor

```ruby
require_relative 'remote-jobs-api-rss-feed_sdk'

client = RemoteJobsApiRssFeedSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## RemoteJobEntity

```ruby
remote_job = client.RemoteJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company_logo` | ``$STRING`` | No |  |
| `company_name` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `job_description` | ``$STRING`` | No |  |
| `job_excerpt` | ``$STRING`` | No |  |
| `job_geo` | ``$STRING`` | No |  |
| `job_industry` | ``$STRING`` | No |  |
| `job_level` | ``$STRING`` | No |  |
| `job_title` | ``$STRING`` | No |  |
| `job_type` | ``$STRING`` | No |  |
| `pub_date` | ``$STRING`` | No |  |
| `salary_currency` | ``$STRING`` | No |  |
| `salary_max` | ``$ONE`,`$NUMBER`,`$STRING`` | No |  |
| `salary_min` | ``$ONE`,`$NUMBER`,`$STRING`` | No |  |
| `salary_period` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.RemoteJob.list(nil)
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

