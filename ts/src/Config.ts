
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


  main = {
    name: 'RemoteJobsApiRssFeed',
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
          "type": "`$STRING`"
        },
        {
          "name": "companyName",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "jobDescription",
          "type": "`$STRING`"
        },
        {
          "name": "jobExcerpt",
          "type": "`$STRING`"
        },
        {
          "name": "jobGeo",
          "type": "`$STRING`"
        },
        {
          "name": "jobIndustry",
          "type": "`$STRING`"
        },
        {
          "name": "jobLevel",
          "type": "`$STRING`"
        },
        {
          "name": "jobTitle",
          "type": "`$STRING`"
        },
        {
          "name": "jobType",
          "type": "`$STRING`"
        },
        {
          "name": "pubDate",
          "type": "`$STRING`"
        },
        {
          "name": "salaryCurrency",
          "type": "`$STRING`"
        },
        {
          "name": "salaryMax",
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
          "type": "`$STRING`"
        },
        {
          "name": "url",
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

