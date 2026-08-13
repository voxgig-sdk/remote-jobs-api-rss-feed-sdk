# RemoteJobsApiRssFeed SDK configuration


def make_config():
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
            "active": True,
            "name": "companyLogo",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "companyName",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "jobDescription",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "jobExcerpt",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "jobGeo",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "jobIndustry",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "jobLevel",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "jobTitle",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "jobType",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "pubDate",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "salaryCurrency",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "salaryMax",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$STRING`",
              ],
            ],
            "index$": 12,
          },
          {
            "active": True,
            "name": "salaryMin",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$STRING`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "salaryPeriod",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
        ],
        "name": "remote_job",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "geo",
                      "orig": "geo",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "industry",
                      "orig": "industry",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "reqd": False,
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
