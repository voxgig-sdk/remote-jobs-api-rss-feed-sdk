package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewRemoteJobEntityFunc func(client *RemoteJobsApiRssFeedSDK, entopts map[string]any) RemoteJobsApiRssFeedEntity

