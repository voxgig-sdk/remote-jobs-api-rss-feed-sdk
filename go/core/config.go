package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RemoteJobsApiRssFeed",
			"slug": "remote-jobs-api-rss-feed",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://jobicy.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"remote_job": map[string]any{},
			},
		},
		"entity": map[string]any{
			"remote_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "companyLogo",
						"short": "Company logo link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "companyName",
						"short": "Company name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique Job ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobDescription",
						"short": "Full job description (HTML)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobExcerpt",
						"short": "Excerpt job description (max 55 characters)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobGeo",
						"short": "Geographic restriction for employment (or Anywhere if not applicable)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobIndustry",
						"short": "Job function (industry)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobLevel",
						"short": "Seniority level (or Any if not applicable)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobTitle",
						"short": "Job title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jobType",
						"short": "Job type (full-time, contract, part-time or internship)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pubDate",
						"short": "Publication date and time (UTC+00:00)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "salaryCurrency",
						"short": "ISO 4217 salary currency code (if applicable)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "salaryMax",
						"short": "Max salary (if applicable)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "salaryMin",
						"short": "Min salary (if applicable)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "salaryPeriod",
						"short": "The period for which the salary is paid (e.g., hourly, daily, ...)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "Job link",
						"type": "`$STRING`",
					},
				},
				"name": "remote_job",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "geo",
											"orig": "geo",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "industry",
											"orig": "industry",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v2/remote-jobs",
								"parts": []any{
									"api",
									"v2",
									"remote-jobs",
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"geo",
										"industry",
										"tag",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.jobs`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
