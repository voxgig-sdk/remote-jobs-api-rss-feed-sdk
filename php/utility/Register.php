<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RemoteJobsApiRssFeedUtility::setRegistrar(function (RemoteJobsApiRssFeedUtility $u): void {
    $u->clean = [RemoteJobsApiRssFeedClean::class, 'call'];
    $u->done = [RemoteJobsApiRssFeedDone::class, 'call'];
    $u->make_error = [RemoteJobsApiRssFeedMakeError::class, 'call'];
    $u->feature_add = [RemoteJobsApiRssFeedFeatureAdd::class, 'call'];
    $u->feature_hook = [RemoteJobsApiRssFeedFeatureHook::class, 'call'];
    $u->feature_init = [RemoteJobsApiRssFeedFeatureInit::class, 'call'];
    $u->fetcher = [RemoteJobsApiRssFeedFetcher::class, 'call'];
    $u->make_fetch_def = [RemoteJobsApiRssFeedMakeFetchDef::class, 'call'];
    $u->make_context = [RemoteJobsApiRssFeedMakeContext::class, 'call'];
    $u->make_options = [RemoteJobsApiRssFeedMakeOptions::class, 'call'];
    $u->make_request = [RemoteJobsApiRssFeedMakeRequest::class, 'call'];
    $u->make_response = [RemoteJobsApiRssFeedMakeResponse::class, 'call'];
    $u->make_result = [RemoteJobsApiRssFeedMakeResult::class, 'call'];
    $u->make_point = [RemoteJobsApiRssFeedMakePoint::class, 'call'];
    $u->make_spec = [RemoteJobsApiRssFeedMakeSpec::class, 'call'];
    $u->make_url = [RemoteJobsApiRssFeedMakeUrl::class, 'call'];
    $u->param = [RemoteJobsApiRssFeedParam::class, 'call'];
    $u->prepare_auth = [RemoteJobsApiRssFeedPrepareAuth::class, 'call'];
    $u->prepare_body = [RemoteJobsApiRssFeedPrepareBody::class, 'call'];
    $u->prepare_headers = [RemoteJobsApiRssFeedPrepareHeaders::class, 'call'];
    $u->prepare_method = [RemoteJobsApiRssFeedPrepareMethod::class, 'call'];
    $u->prepare_params = [RemoteJobsApiRssFeedPrepareParams::class, 'call'];
    $u->prepare_path = [RemoteJobsApiRssFeedPreparePath::class, 'call'];
    $u->prepare_query = [RemoteJobsApiRssFeedPrepareQuery::class, 'call'];
    $u->result_basic = [RemoteJobsApiRssFeedResultBasic::class, 'call'];
    $u->result_body = [RemoteJobsApiRssFeedResultBody::class, 'call'];
    $u->result_headers = [RemoteJobsApiRssFeedResultHeaders::class, 'call'];
    $u->transform_request = [RemoteJobsApiRssFeedTransformRequest::class, 'call'];
    $u->transform_response = [RemoteJobsApiRssFeedTransformResponse::class, 'call'];
});
