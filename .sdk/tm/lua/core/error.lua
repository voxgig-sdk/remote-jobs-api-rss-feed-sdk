-- RemoteJobsApiRssFeed SDK error

local RemoteJobsApiRssFeedError = {}
RemoteJobsApiRssFeedError.__index = RemoteJobsApiRssFeedError


function RemoteJobsApiRssFeedError.new(code, msg, ctx)
  local self = setmetatable({}, RemoteJobsApiRssFeedError)
  self.is_sdk_error = true
  self.sdk = "RemoteJobsApiRssFeed"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RemoteJobsApiRssFeedError:error()
  return self.msg
end


function RemoteJobsApiRssFeedError:__tostring()
  return self.msg
end


return RemoteJobsApiRssFeedError
