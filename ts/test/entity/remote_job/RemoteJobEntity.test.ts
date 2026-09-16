

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RemoteJobsApiRssFeedSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('RemoteJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when REMOTE_JOBS_API_RSS_FEED_TEST_LIVE=TRUE.
  afterEach(liveDelay('REMOTE_JOBS_API_RSS_FEED_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RemoteJobsApiRssFeedSDK.test()
    const ent = testsdk.RemoteJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.REMOTE_JOBS_API_RSS_FEED_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'remote_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"companyLogo","req":false,"short":"Company logo link","type":"`$STRING`","index$":0},{"active":true,"name":"companyName","req":false,"short":"Company name","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique Job ID","type":"`$STRING`","index$":2},{"active":true,"name":"jobDescription","req":false,"short":"Full job description (HTML)","type":"`$STRING`","index$":3},{"active":true,"name":"jobExcerpt","req":false,"short":"Excerpt job description (max 55 characters)","type":"`$STRING`","index$":4},{"active":true,"name":"jobGeo","req":false,"short":"Geographic restriction for employment (or Anywhere if not applicable)","type":"`$STRING`","index$":5},{"active":true,"name":"jobIndustry","req":false,"short":"Job function (industry)","type":"`$STRING`","index$":6},{"active":true,"name":"jobLevel","req":false,"short":"Seniority level (or Any if not applicable)","type":"`$STRING`","index$":7},{"active":true,"name":"jobTitle","req":false,"short":"Job title","type":"`$STRING`","index$":8},{"active":true,"name":"jobType","req":false,"short":"Job type (full-time, contract, part-time or internship)","type":"`$STRING`","index$":9},{"active":true,"name":"pubDate","req":false,"short":"Publication date and time (UTC+00:00)","type":"`$STRING`","index$":10},{"active":true,"name":"salaryCurrency","req":false,"short":"ISO 4217 salary currency code (if applicable)","type":"`$STRING`","index$":11},{"active":true,"name":"salaryMax","req":false,"short":"Max salary (if applicable)","type":["`$ONE`",["`$NUMBER`","`$STRING`"]],"index$":12},{"active":true,"name":"salaryMin","req":false,"short":"Min salary (if applicable)","type":["`$ONE`",["`$NUMBER`","`$STRING`"]],"index$":13},{"active":true,"name":"salaryPeriod","req":false,"short":"The period for which the salary is paid (e.g., hourly, daily, ...)","type":"`$STRING`","index$":14},{"active":true,"format":"uri","name":"url","req":false,"short":"Job link","type":"`$STRING`","index$":15}],"id":{"field":"id","name":"id"},"name":"remote_job","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":100,"kind":"query","name":"count","orig":"count","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"geo","orig":"geo","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"industry","orig":"industry","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"tag","orig":"tag","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /api/v2/remote-jobs","json":"{\"operationId\":\"getRemoteJobs\",\"parameters\":[{\"description\":\"Number of listings to return (range: 1-100). Default is 100.\",\"in\":\"query\",\"name\":\"count\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by job region (e.g., 'usa', 'canada', 'europe', 'emea'). Default is all regions.\",\"in\":\"query\",\"name\":\"geo\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by job category (e.g., 'marketing', 'copywriting', 'supporting'). Default is all categories.\",\"in\":\"query\",\"name\":\"industry\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Search by job title and description keyword (e.g., 'python', 'seo'). Default is all jobs.\",\"in\":\"query\",\"name\":\"tag\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"jobs\":{\"items\":{\"properties\":{\"companyLogo\":{\"description\":\"Company logo link\",\"format\":\"uri\",\"type\":\"string\"},\"companyName\":{\"description\":\"Company name\",\"type\":\"string\"},\"id\":{\"description\":\"Unique Job ID\",\"type\":\"string\"},\"jobDescription\":{\"description\":\"Full job description (HTML)\",\"type\":\"string\"},\"jobExcerpt\":{\"description\":\"Excerpt job description (max 55 characters)\",\"type\":\"string\"},\"jobGeo\":{\"description\":\"Geographic restriction for employment (or Anywhere if not applicable)\",\"type\":\"string\"},\"jobIndustry\":{\"description\":\"Job function (industry)\",\"type\":\"string\"},\"jobLevel\":{\"description\":\"Seniority level (or Any if not applicable)\",\"type\":\"string\"},\"jobTitle\":{\"description\":\"Job title\",\"type\":\"string\"},\"jobType\":{\"description\":\"Job type (full-time, contract, part-time or internship)\",\"type\":\"string\"},\"pubDate\":{\"description\":\"Publication date and time (UTC+00:00)\",\"type\":\"string\"},\"salaryCurrency\":{\"description\":\"ISO 4217 salary currency code (if applicable)\",\"type\":\"string\"},\"salaryMax\":{\"description\":\"Max salary (if applicable)\",\"type\":[\"number\",\"string\"]},\"salaryMin\":{\"description\":\"Min salary (if applicable)\",\"type\":[\"number\",\"string\"]},\"salaryPeriod\":{\"description\":\"The period for which the salary is paid (e.g., hourly, daily, ...)\",\"type\":\"string\"},\"url\":{\"description\":\"Job link\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with a list of job postings.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v2/remote-jobs","segments":[{"lit":"api"},{"lit":"v2"},{"lit":"remote-jobs"}],"select":{"exist":["count","geo","industry","tag"]},"transform":{"req":"`reqdata`","res":"`body.jobs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"remote_job","name__orig":"remote_job","Name":"RemoteJob","name_":"remote_job","name-":"remote-job","NAME":"REMOTE_JOB","index$":0}, {"active":true,"entity":"remote_job","key$":"BasicRemoteJobFlow","kind":"basic","name":"BasicRemoteJobFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"remote_job_ref01"}}],"index$":0}]}, 'RemoteJob')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let remote_job_ref01_data = Object.values(setup.data.existing.remote_job)[0] as any

    // LIST
    const remote_job_ref01_ent = client.RemoteJob()
    const remote_job_ref01_match: any = {}

    const remote_job_ref01_list = (await remote_job_ref01_ent.list(remote_job_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/remote_job/RemoteJobTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RemoteJobsApiRssFeedSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['remote_job01','remote_job02','remote_job03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'REMOTE_JOBS_API_RSS_FEED_TEST_REMOTE_JOB_ENTID': idmap,
    'REMOTE_JOBS_API_RSS_FEED_TEST_LIVE': 'FALSE',
    'REMOTE_JOBS_API_RSS_FEED_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['REMOTE_JOBS_API_RSS_FEED_TEST_REMOTE_JOB_ENTID']

  const live = 'TRUE' === env.REMOTE_JOBS_API_RSS_FEED_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['REMOTE_JOBS_API_RSS_FEED_TEST_REMOTE_JOB_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RemoteJobsApiRssFeedSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.REMOTE_JOBS_API_RSS_FEED_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
