<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK utility: result_body

class RemoteJobsApiRssFeedResultBody
{
    public static function call(RemoteJobsApiRssFeedContext $ctx): ?RemoteJobsApiRssFeedResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
