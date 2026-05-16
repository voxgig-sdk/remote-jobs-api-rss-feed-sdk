<?php
declare(strict_types=1);

// RemoteJobsApiRssFeed SDK base feature

class RemoteJobsApiRssFeedBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RemoteJobsApiRssFeedContext $ctx, array $options): void {}
    public function PostConstruct(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PostConstructEntity(RemoteJobsApiRssFeedContext $ctx): void {}
    public function SetData(RemoteJobsApiRssFeedContext $ctx): void {}
    public function GetData(RemoteJobsApiRssFeedContext $ctx): void {}
    public function GetMatch(RemoteJobsApiRssFeedContext $ctx): void {}
    public function SetMatch(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PrePoint(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PreSpec(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PreRequest(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PreResponse(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PreResult(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PreDone(RemoteJobsApiRssFeedContext $ctx): void {}
    public function PreUnexpected(RemoteJobsApiRssFeedContext $ctx): void {}
}
