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
# @!attribute [rw] companyLogo
#   @return [String, nil]
#
# @!attribute [rw] companyName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jobDescription
#   @return [String, nil]
#
# @!attribute [rw] jobExcerpt
#   @return [String, nil]
#
# @!attribute [rw] jobGeo
#   @return [String, nil]
#
# @!attribute [rw] jobIndustry
#   @return [String, nil]
#
# @!attribute [rw] jobLevel
#   @return [String, nil]
#
# @!attribute [rw] jobTitle
#   @return [String, nil]
#
# @!attribute [rw] jobType
#   @return [String, nil]
#
# @!attribute [rw] pubDate
#   @return [String, nil]
#
# @!attribute [rw] salaryCurrency
#   @return [String, nil]
#
# @!attribute [rw] salaryMax
#   @return [Object, nil]
#
# @!attribute [rw] salaryMin
#   @return [Object, nil]
#
# @!attribute [rw] salaryPeriod
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RemoteJob = Struct.new(
  :companyLogo,
  :companyName,
  :id,
  :jobDescription,
  :jobExcerpt,
  :jobGeo,
  :jobIndustry,
  :jobLevel,
  :jobTitle,
  :jobType,
  :pubDate,
  :salaryCurrency,
  :salaryMax,
  :salaryMin,
  :salaryPeriod,
  :url,
  keyword_init: true
)

# Request payload for RemoteJob#list.
#
# @!attribute [rw] companyLogo
#   @return [String, nil]
#
# @!attribute [rw] companyName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jobDescription
#   @return [String, nil]
#
# @!attribute [rw] jobExcerpt
#   @return [String, nil]
#
# @!attribute [rw] jobGeo
#   @return [String, nil]
#
# @!attribute [rw] jobIndustry
#   @return [String, nil]
#
# @!attribute [rw] jobLevel
#   @return [String, nil]
#
# @!attribute [rw] jobTitle
#   @return [String, nil]
#
# @!attribute [rw] jobType
#   @return [String, nil]
#
# @!attribute [rw] pubDate
#   @return [String, nil]
#
# @!attribute [rw] salaryCurrency
#   @return [String, nil]
#
# @!attribute [rw] salaryMax
#   @return [Object, nil]
#
# @!attribute [rw] salaryMin
#   @return [Object, nil]
#
# @!attribute [rw] salaryPeriod
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RemoteJobListMatch = Struct.new(
  :companyLogo,
  :companyName,
  :id,
  :jobDescription,
  :jobExcerpt,
  :jobGeo,
  :jobIndustry,
  :jobLevel,
  :jobTitle,
  :jobType,
  :pubDate,
  :salaryCurrency,
  :salaryMax,
  :salaryMin,
  :salaryPeriod,
  :url,
  keyword_init: true
)

