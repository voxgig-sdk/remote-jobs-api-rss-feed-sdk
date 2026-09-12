import { Context } from './Context';
declare class RemoteJobsApiRssFeedError extends Error {
    isRemoteJobsApiRssFeedError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RemoteJobsApiRssFeedError };
