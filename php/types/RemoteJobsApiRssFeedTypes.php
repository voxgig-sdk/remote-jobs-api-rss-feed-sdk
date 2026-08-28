<?php
declare(strict_types=1);

// Typed models for the RemoteJobsApiRssFeed SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** RemoteJob entity data model. */
class RemoteJob
{
    public ?string $companyLogo = null;
    public ?string $companyName = null;
    public ?string $id = null;
    public ?string $jobDescription = null;
    public ?string $jobExcerpt = null;
    public ?string $jobGeo = null;
    public ?string $jobIndustry = null;
    public ?string $jobLevel = null;
    public ?string $jobTitle = null;
    public ?string $jobType = null;
    public ?string $pubDate = null;
    public ?string $salaryCurrency = null;
    public mixed $salaryMax = null;
    public mixed $salaryMin = null;
    public ?string $salaryPeriod = null;
    public ?string $url = null;
}

/** Request payload for RemoteJob#list. */
class RemoteJobListMatch
{
    public ?int $count = null;
    public ?string $geo = null;
    public ?string $industry = null;
    public ?string $tag = null;
}

