# RemoteJobsApiRssFeed SDK feature factory

from feature.base_feature import RemoteJobsApiRssFeedBaseFeature
from feature.test_feature import RemoteJobsApiRssFeedTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RemoteJobsApiRssFeedBaseFeature(),
        "test": lambda: RemoteJobsApiRssFeedTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
