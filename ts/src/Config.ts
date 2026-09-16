
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RemoteJobsApiRssFeed',
        slug: "remote-jobs-api-rss-feed",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://jobicy.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      remote_job: {
      },

    }
  }


  entity = {
    "remote_job": {
      "fields": [
        {
          "format": "uri",
          "name": "companyLogo",
          "short": "Company logo link",
          "type": "`$STRING`"
        },
        {
          "name": "companyName",
          "short": "Company name",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique Job ID",
          "type": "`$STRING`"
        },
        {
          "name": "jobDescription",
          "short": "Full job description (HTML)",
          "type": "`$STRING`"
        },
        {
          "name": "jobExcerpt",
          "short": "Excerpt job description (max 55 characters)",
          "type": "`$STRING`"
        },
        {
          "name": "jobGeo",
          "short": "Geographic restriction for employment (or Anywhere if not applicable)",
          "type": "`$STRING`"
        },
        {
          "name": "jobIndustry",
          "short": "Job function (industry)",
          "type": "`$STRING`"
        },
        {
          "name": "jobLevel",
          "short": "Seniority level (or Any if not applicable)",
          "type": "`$STRING`"
        },
        {
          "name": "jobTitle",
          "short": "Job title",
          "type": "`$STRING`"
        },
        {
          "name": "jobType",
          "short": "Job type (full-time, contract, part-time or internship)",
          "type": "`$STRING`"
        },
        {
          "name": "pubDate",
          "short": "Publication date and time (UTC+00:00)",
          "type": "`$STRING`"
        },
        {
          "name": "salaryCurrency",
          "short": "ISO 4217 salary currency code (if applicable)",
          "type": "`$STRING`"
        },
        {
          "name": "salaryMax",
          "short": "Max salary (if applicable)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "salaryMin",
          "short": "Min salary (if applicable)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "salaryPeriod",
          "short": "The period for which the salary is paid (e.g., hourly, daily, ...)",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "short": "Job link",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "geo",
                    "orig": "geo",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "industry",
                    "orig": "industry",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v2/remote-jobs",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "remote-jobs"
                }
              ],
              "select": {
                "exist": [
                  "count",
                  "geo",
                  "industry",
                  "tag"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.jobs`"
              },
              "parts": [
                "api",
                "v2",
                "remote-jobs"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

