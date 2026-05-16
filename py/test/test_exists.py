# ProjectName SDK exists test

import pytest
from remotejobsapirssfeed_sdk import RemoteJobsApiRssFeedSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RemoteJobsApiRssFeedSDK.test(None, None)
        assert testsdk is not None
