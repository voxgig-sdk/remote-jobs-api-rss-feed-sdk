<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK utility: result_headers

class RemoteJobsApiRssFeedResultHeaders
{
    public static function call(RemoteJobsApiRssFeedContext $ctx): ?RemoteJobsApiRssFeedResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
