-- ProjectName SDK exists test

local sdk = require("remote-jobs-api-rss-feed_sdk")

describe("RemoteJobsApiRssFeedSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
