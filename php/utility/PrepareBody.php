<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK utility: prepare_body

class RemoteJobsApiRssFeedPrepareBody
{
    public static function call(RemoteJobsApiRssFeedContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
