# RemoteJobsApiRssFeed SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RemoteJobsApiRssFeedFeatures
  def self.make_feature(name)
    case name
    when "base"
      RemoteJobsApiRssFeedBaseFeature.new
    when "ratelimit"
      RemoteJobsApiRssFeedRatelimitFeature.new
    when "retry"
      RemoteJobsApiRssFeedRetryFeature.new
    when "test"
      RemoteJobsApiRssFeedTestFeature.new
    when "timeout"
      RemoteJobsApiRssFeedTimeoutFeature.new
    else
      RemoteJobsApiRssFeedBaseFeature.new
    end
  end
end
