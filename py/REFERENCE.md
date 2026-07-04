# RemoteJobsApiRssFeed Python SDK Reference

Complete API reference for the RemoteJobsApiRssFeed Python SDK.


## RemoteJobsApiRssFeedSDK

### Constructor

```python
from remote-jobs-api-rss-feed_sdk import RemoteJobsApiRssFeedSDK

client = RemoteJobsApiRssFeedSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RemoteJobsApiRssFeedSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = RemoteJobsApiRssFeedSDK.test()
```


### Instance Methods

#### `RemoteJob(data=None)`

Create a new `RemoteJobEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## RemoteJobEntity

```python
remote_job = client.remote_job
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.remote_job.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoteJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = RemoteJobsApiRssFeedSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

