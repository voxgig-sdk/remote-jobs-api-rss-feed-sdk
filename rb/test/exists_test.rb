# RemoteJobsApiRssFeed SDK exists test

require "minitest/autorun"
require_relative "../RemoteJobsApiRssFeed_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RemoteJobsApiRssFeedSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
