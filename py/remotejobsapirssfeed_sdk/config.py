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
            "slug": "remote-jobs-api-rss-feed",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Company logo link",
            "type": "`$STRING`",
          },
          {
            "name": "companyName",
            "short": "Company name",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique Job ID",
            "type": "`$STRING`",
          },
          {
            "name": "jobDescription",
            "short": "Full job description (HTML)",
            "type": "`$STRING`",
          },
          {
            "name": "jobExcerpt",
            "short": "Excerpt job description (max 55 characters)",
            "type": "`$STRING`",
          },
          {
            "name": "jobGeo",
            "short": "Geographic restriction for employment (or Anywhere if not applicable)",
            "type": "`$STRING`",
          },
          {
            "name": "jobIndustry",
            "short": "Job function (industry)",
            "type": "`$STRING`",
          },
          {
            "name": "jobLevel",
            "short": "Seniority level (or Any if not applicable)",
            "type": "`$STRING`",
          },
          {
            "name": "jobTitle",
            "short": "Job title",
            "type": "`$STRING`",
          },
          {
            "name": "jobType",
            "short": "Job type (full-time, contract, part-time or internship)",
            "type": "`$STRING`",
          },
          {
            "name": "pubDate",
            "short": "Publication date and time (UTC+00:00)",
            "type": "`$STRING`",
          },
          {
            "name": "salaryCurrency",
            "short": "ISO 4217 salary currency code (if applicable)",
            "type": "`$STRING`",
          },
          {
            "name": "salaryMax",
            "short": "Max salary (if applicable)",
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
            "short": "Min salary (if applicable)",
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
            "short": "The period for which the salary is paid (e.g., hourly, daily, ...)",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Job link",
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
