export interface RemoteJob {
    companyLogo?: string;
    companyName?: string;
    id?: string;
    jobDescription?: string;
    jobExcerpt?: string;
    jobGeo?: string;
    jobIndustry?: string;
    jobLevel?: string;
    jobTitle?: string;
    jobType?: string;
    pubDate?: string;
    salaryCurrency?: string;
    salaryMax?: number | string;
    salaryMin?: number | string;
    salaryPeriod?: string;
    url?: string;
}
export interface RemoteJobListMatch {
    count?: number;
    geo?: string;
    industry?: string;
    tag?: string;
}
