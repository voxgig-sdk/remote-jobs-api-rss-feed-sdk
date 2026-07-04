# Typed models for the RemoteJobsApiRssFeed SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class RemoteJob:
    company_logo: Optional[str] = None
    company_name: Optional[str] = None
    id: Optional[str] = None
    job_description: Optional[str] = None
    job_excerpt: Optional[str] = None
    job_geo: Optional[str] = None
    job_industry: Optional[str] = None
    job_level: Optional[str] = None
    job_title: Optional[str] = None
    job_type: Optional[str] = None
    pub_date: Optional[str] = None
    salary_currency: Optional[str] = None
    salary_max: Optional[Any] = None
    salary_min: Optional[Any] = None
    salary_period: Optional[str] = None
    url: Optional[str] = None


@dataclass
class RemoteJobListMatch:
    company_logo: Optional[str] = None
    company_name: Optional[str] = None
    id: Optional[str] = None
    job_description: Optional[str] = None
    job_excerpt: Optional[str] = None
    job_geo: Optional[str] = None
    job_industry: Optional[str] = None
    job_level: Optional[str] = None
    job_title: Optional[str] = None
    job_type: Optional[str] = None
    pub_date: Optional[str] = None
    salary_currency: Optional[str] = None
    salary_max: Optional[Any] = None
    salary_min: Optional[Any] = None
    salary_period: Optional[str] = None
    url: Optional[str] = None

