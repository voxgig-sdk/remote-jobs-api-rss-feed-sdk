# RemoteJobsApiRssFeed SDK utility: make_context

from core.context import RemoteJobsApiRssFeedContext


def make_context_util(ctxmap, basectx):
    return RemoteJobsApiRssFeedContext(ctxmap, basectx)
