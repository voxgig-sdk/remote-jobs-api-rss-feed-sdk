# RemoteJobsApiRssFeed SDK utility: feature_add
module RemoteJobsApiRssFeedUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
