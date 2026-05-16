# RemoteJobsApiRssFeed SDK utility: make_context
require_relative '../core/context'
module RemoteJobsApiRssFeedUtilities
  MakeContext = ->(ctxmap, basectx) {
    RemoteJobsApiRssFeedContext.new(ctxmap, basectx)
  }
end
