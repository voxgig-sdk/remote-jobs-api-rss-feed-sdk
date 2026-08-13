// Typed models for the RemoteJobsApiRssFeed SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface RemoteJob {
  companyLogo?: string
  companyName?: string
  id?: string
  jobDescription?: string
  jobExcerpt?: string
  jobGeo?: string
  jobIndustry?: string
  jobLevel?: string
  jobTitle?: string
  jobType?: string
  pubDate?: string
  salaryCurrency?: string
  salaryMax?: number | string
  salaryMin?: number | string
  salaryPeriod?: string
  url?: string
}

export interface RemoteJobListMatch {
  companyLogo?: string
  companyName?: string
  id?: string
  jobDescription?: string
  jobExcerpt?: string
  jobGeo?: string
  jobIndustry?: string
  jobLevel?: string
  jobTitle?: string
  jobType?: string
  pubDate?: string
  salaryCurrency?: string
  salaryMax?: number | string
  salaryMin?: number | string
  salaryPeriod?: string
  url?: string
}

