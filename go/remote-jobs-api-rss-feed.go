package voxgigremotejobsapirssfeedsdk

import (
	"github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/core"
	"github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/entity"
	"github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/feature"
	_ "github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/utility"
)

// Type aliases preserve external API.
type RemoteJobsApiRssFeedSDK = core.RemoteJobsApiRssFeedSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RemoteJobsApiRssFeedEntity = core.RemoteJobsApiRssFeedEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RemoteJobsApiRssFeedError = core.RemoteJobsApiRssFeedError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewRemoteJobEntityFunc = func(client *core.RemoteJobsApiRssFeedSDK, entopts map[string]any) core.RemoteJobsApiRssFeedEntity {
		return entity.NewRemoteJobEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRemoteJobsApiRssFeedSDK = core.NewRemoteJobsApiRssFeedSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
