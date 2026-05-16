package core

type RemoteJobsApiRssFeedError struct {
	IsRemoteJobsApiRssFeedError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRemoteJobsApiRssFeedError(code string, msg string, ctx *Context) *RemoteJobsApiRssFeedError {
	return &RemoteJobsApiRssFeedError{
		IsRemoteJobsApiRssFeedError: true,
		Sdk:              "RemoteJobsApiRssFeed",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RemoteJobsApiRssFeedError) Error() string {
	return e.Msg
}
