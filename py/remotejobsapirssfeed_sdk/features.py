# RemoteJobsApiRssFeed SDK feature factory

from remotejobsapirssfeed_sdk.feature.base_feature import RemoteJobsApiRssFeedBaseFeature
from remotejobsapirssfeed_sdk.feature.test_feature import RemoteJobsApiRssFeedTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RemoteJobsApiRssFeedBaseFeature(),
        "test": lambda: RemoteJobsApiRssFeedTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
