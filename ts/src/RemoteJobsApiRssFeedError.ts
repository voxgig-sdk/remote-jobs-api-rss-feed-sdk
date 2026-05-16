
import { Context } from './Context'


class RemoteJobsApiRssFeedError extends Error {

  isRemoteJobsApiRssFeedError = true

  sdk = 'RemoteJobsApiRssFeed'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RemoteJobsApiRssFeedError
}

