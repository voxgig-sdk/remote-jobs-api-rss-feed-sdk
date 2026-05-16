<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RemoteJobsApiRssFeedFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RemoteJobsApiRssFeedBaseFeature();
            case "test":
                return new RemoteJobsApiRssFeedTestFeature();
            default:
                return new RemoteJobsApiRssFeedBaseFeature();
        }
    }
}
