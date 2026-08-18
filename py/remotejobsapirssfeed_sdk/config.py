# RemoteJobsApiRssFeed SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "RemoteJobsApiRssFeed",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://jobicy.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "remote_job": {},
            },
        },
        "entity": {
      "remote_job": {
        "fields": [
          {
            "name": "companyLogo",
            "type": "`$STRING`",
          },
          {
            "name": "companyName",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "jobDescription",
            "type": "`$STRING`",
          },
          {
            "name": "jobExcerpt",
            "type": "`$STRING`",
          },
          {
            "name": "jobGeo",
            "type": "`$STRING`",
          },
          {
            "name": "jobIndustry",
            "type": "`$STRING`",
          },
          {
            "name": "jobLevel",
            "type": "`$STRING`",
          },
          {
            "name": "jobTitle",
            "type": "`$STRING`",
          },
          {
            "name": "jobType",
            "type": "`$STRING`",
          },
          {
            "name": "pubDate",
            "type": "`$STRING`",
          },
          {
            "name": "salaryCurrency",
            "type": "`$STRING`",
          },
          {
            "name": "salaryMax",
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "salaryMin",
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "salaryPeriod",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
        ],
        "name": "remote_job",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "geo",
                      "orig": "geo",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "industry",
                      "orig": "industry",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v2/remote-jobs",
                "parts": [
                  "api",
                  "v2",
                  "remote-jobs",
                ],
                "select": {
                  "exist": [
                    "count",
                    "geo",
                    "industry",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.jobs`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
