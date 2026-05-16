# RemoteJobsApiRssFeed SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RemoteJobsApiRssFeedFeatures
  def self.make_feature(name)
    case name
    when "base"
      RemoteJobsApiRssFeedBaseFeature.new
    when "test"
      RemoteJobsApiRssFeedTestFeature.new
    else
      RemoteJobsApiRssFeedBaseFeature.new
    end
  end
end
