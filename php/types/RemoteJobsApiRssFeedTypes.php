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
    public ?string $company_logo = null;
    public ?string $company_name = null;
    public ?string $id = null;
    public ?string $job_description = null;
    public ?string $job_excerpt = null;
    public ?string $job_geo = null;
    public ?string $job_industry = null;
    public ?string $job_level = null;
    public ?string $job_title = null;
    public ?string $job_type = null;
    public ?string $pub_date = null;
    public ?string $salary_currency = null;
    public mixed $salary_max = null;
    public mixed $salary_min = null;
    public ?string $salary_period = null;
    public ?string $url = null;
}

/** Request payload for RemoteJob#list. */
class RemoteJobListMatch
{
    public ?string $company_logo = null;
    public ?string $company_name = null;
    public ?string $id = null;
    public ?string $job_description = null;
    public ?string $job_excerpt = null;
    public ?string $job_geo = null;
    public ?string $job_industry = null;
    public ?string $job_level = null;
    public ?string $job_title = null;
    public ?string $job_type = null;
    public ?string $pub_date = null;
    public ?string $salary_currency = null;
    public mixed $salary_max = null;
    public mixed $salary_min = null;
    public ?string $salary_period = null;
    public ?string $url = null;
}

