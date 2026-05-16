package = "voxgig-sdk-remote-jobs-api-rss-feed"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk.git"
}
description = {
  summary = "RemoteJobsApiRssFeed SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["remote-jobs-api-rss-feed_sdk"] = "remote-jobs-api-rss-feed_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
