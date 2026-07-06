# frozen_string_literal: true

# Typed models for the RemoteJobsApiRssFeed SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# RemoteJob entity data model.
#
# @!attribute [rw] company_logo
#   @return [String, nil]
#
# @!attribute [rw] company_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] job_description
#   @return [String, nil]
#
# @!attribute [rw] job_excerpt
#   @return [String, nil]
#
# @!attribute [rw] job_geo
#   @return [String, nil]
#
# @!attribute [rw] job_industry
#   @return [String, nil]
#
# @!attribute [rw] job_level
#   @return [String, nil]
#
# @!attribute [rw] job_title
#   @return [String, nil]
#
# @!attribute [rw] job_type
#   @return [String, nil]
#
# @!attribute [rw] pub_date
#   @return [String, nil]
#
# @!attribute [rw] salary_currency
#   @return [String, nil]
#
# @!attribute [rw] salary_max
#   @return [Object, nil]
#
# @!attribute [rw] salary_min
#   @return [Object, nil]
#
# @!attribute [rw] salary_period
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RemoteJob = Struct.new(
  :company_logo,
  :company_name,
  :id,
  :job_description,
  :job_excerpt,
  :job_geo,
  :job_industry,
  :job_level,
  :job_title,
  :job_type,
  :pub_date,
  :salary_currency,
  :salary_max,
  :salary_min,
  :salary_period,
  :url,
  keyword_init: true
)

# Request payload for RemoteJob#list.
#
# @!attribute [rw] company_logo
#   @return [String, nil]
#
# @!attribute [rw] company_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] job_description
#   @return [String, nil]
#
# @!attribute [rw] job_excerpt
#   @return [String, nil]
#
# @!attribute [rw] job_geo
#   @return [String, nil]
#
# @!attribute [rw] job_industry
#   @return [String, nil]
#
# @!attribute [rw] job_level
#   @return [String, nil]
#
# @!attribute [rw] job_title
#   @return [String, nil]
#
# @!attribute [rw] job_type
#   @return [String, nil]
#
# @!attribute [rw] pub_date
#   @return [String, nil]
#
# @!attribute [rw] salary_currency
#   @return [String, nil]
#
# @!attribute [rw] salary_max
#   @return [Object, nil]
#
# @!attribute [rw] salary_min
#   @return [Object, nil]
#
# @!attribute [rw] salary_period
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RemoteJobListMatch = Struct.new(
  :company_logo,
  :company_name,
  :id,
  :job_description,
  :job_excerpt,
  :job_geo,
  :job_industry,
  :job_level,
  :job_title,
  :job_type,
  :pub_date,
  :salary_currency,
  :salary_max,
  :salary_min,
  :salary_period,
  :url,
  keyword_init: true
)

