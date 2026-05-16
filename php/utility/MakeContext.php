<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RemoteJobsApiRssFeedMakeContext
{
    public static function call(array $ctxmap, ?RemoteJobsApiRssFeedContext $basectx): RemoteJobsApiRssFeedContext
    {
        return new RemoteJobsApiRssFeedContext($ctxmap, $basectx);
    }
}
