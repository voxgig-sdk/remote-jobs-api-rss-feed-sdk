# RemoteJobsApiRssFeed SDK configuration

module RemoteJobsApiRssFeedConfig
  def self.make_config
    {
      "main" => {
        "name" => "RemoteJobsApiRssFeed",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://jobicy.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "remote_job" => {},
        },
      },
      "entity" => {
        "remote_job" => {
          "fields" => [
            {
              "active" => true,
              "name" => "companyLogo",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "companyName",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "jobDescription",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "jobExcerpt",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "jobGeo",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "jobIndustry",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "jobLevel",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "jobTitle",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "jobType",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "pubDate",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "salaryCurrency",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "salaryMax",
              "req" => false,
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$STRING`",
                ],
              ],
              "index$" => 12,
            },
            {
              "active" => true,
              "name" => "salaryMin",
              "req" => false,
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$STRING`",
                ],
              ],
              "index$" => 13,
            },
            {
              "active" => true,
              "name" => "salaryPeriod",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 14,
            },
            {
              "active" => true,
              "name" => "url",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 15,
            },
          ],
          "name" => "remote_job",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => 100,
                        "kind" => "query",
                        "name" => "count",
                        "orig" => "count",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "geo",
                        "orig" => "geo",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "industry",
                        "orig" => "industry",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "tag",
                        "orig" => "tag",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v2/remote-jobs",
                  "parts" => [
                    "api",
                    "v2",
                    "remote-jobs",
                  ],
                  "select" => {
                    "exist" => [
                      "count",
                      "geo",
                      "industry",
                      "tag",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.jobs`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RemoteJobsApiRssFeedFeatures.make_feature(name)
  end
end
