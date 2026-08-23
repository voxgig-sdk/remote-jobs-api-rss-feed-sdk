
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      }
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
          "name": "url",
          "short": "Job link",
          "type": "`$STRING`"
        }
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
              "parts": [
                "api",
                "v2",
                "remote-jobs"
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
              }
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
  config
}

