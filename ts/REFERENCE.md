# RemoteJobsApiRssFeed TypeScript SDK Reference

Complete API reference for the RemoteJobsApiRssFeed TypeScript SDK.


## RemoteJobsApiRssFeedSDK

### Constructor

```ts
new RemoteJobsApiRssFeedSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RemoteJobsApiRssFeedSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = RemoteJobsApiRssFeedSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `RemoteJobsApiRssFeedSDK` instance in test mode.


### Instance Methods

#### `RemoteJob(data?: object)`

Create a new `RemoteJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoteJobEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `RemoteJobsApiRssFeedSDK.test()`.

**Returns:** `RemoteJobsApiRssFeedSDK` instance in test mode.


---

## RemoteJobEntity

```ts
const remote_job = client.RemoteJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company_logo` | `string` | No |  |
| `company_name` | `string` | No |  |
| `id` | `string` | No |  |
| `job_description` | `string` | No |  |
| `job_excerpt` | `string` | No |  |
| `job_geo` | `string` | No |  |
| `job_industry` | `string` | No |  |
| `job_level` | `string` | No |  |
| `job_title` | `string` | No |  |
| `job_type` | `string` | No |  |
| `pub_date` | `string` | No |  |
| `salary_currency` | `string` | No |  |
| `salary_max` | `any` | No |  |
| `salary_min` | `any` | No |  |
| `salary_period` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RemoteJob().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoteJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `RemoteJobsApiRssFeedSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new RemoteJobsApiRssFeedSDK({
  feature: {
    test: { active: true },
  }
})
```

