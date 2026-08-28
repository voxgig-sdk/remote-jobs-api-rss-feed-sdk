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
| `salaryMax` | `number | string` | No | Max salary (if applicable) |
| `salaryMin` | `number | string` | No | Min salary (if applicable) |
| `salaryPeriod` | `string` | No | The period for which the salary is paid (e.g., hourly, daily, ...) |
| `url` | `string` | No | Job link |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

