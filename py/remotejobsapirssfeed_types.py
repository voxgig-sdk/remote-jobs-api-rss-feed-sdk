# Typed models for the RemoteJobsApiRssFeed SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class RemoteJob(TypedDict, total=False):
    company_logo: str
    company_name: str
    id: str
    job_description: str
    job_excerpt: str
    job_geo: str
    job_industry: str
    job_level: str
    job_title: str
    job_type: str
    pub_date: str
    salary_currency: str
    salary_max: Any
    salary_min: Any
    salary_period: str
    url: str


class RemoteJobListMatch(TypedDict, total=False):
    company_logo: str
    company_name: str
    id: str
    job_description: str
    job_excerpt: str
    job_geo: str
    job_industry: str
    job_level: str
    job_title: str
    job_type: str
    pub_date: str
    salary_currency: str
    salary_max: Any
    salary_min: Any
    salary_period: str
    url: str
