-- RemoteJobsApiRssFeed SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "RemoteJobsApiRssFeed",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://jobicy.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["remote_job"] = {},
      },
    },
    entity = {
      ["remote_job"] = {
        ["fields"] = {
          {
            ["name"] = "companyLogo",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "companyName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobDescription",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobExcerpt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobGeo",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobIndustry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobLevel",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobTitle",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jobType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pubDate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "salaryCurrency",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "salaryMax",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$STRING`",
              },
            },
          },
          {
            ["name"] = "salaryMin",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$STRING`",
              },
            },
          },
          {
            ["name"] = "salaryPeriod",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "remote_job",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "geo",
                      ["orig"] = "geo",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "industry",
                      ["orig"] = "industry",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v2/remote-jobs",
                ["parts"] = {
                  "api",
                  "v2",
                  "remote-jobs",
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                    "geo",
                    "industry",
                    "tag",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.jobs`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
