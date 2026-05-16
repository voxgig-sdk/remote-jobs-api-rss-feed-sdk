<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK utility: feature_add

class RemoteJobsApiRssFeedFeatureAdd
{
    public static function call(RemoteJobsApiRssFeedContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
