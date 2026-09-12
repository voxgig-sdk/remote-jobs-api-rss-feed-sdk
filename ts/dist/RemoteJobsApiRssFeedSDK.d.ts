import { RemoteJobEntity } from './entity/RemoteJobEntity';
export type * from './RemoteJobsApiRssFeedTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RemoteJobsApiRssFeedEntityBase } from './RemoteJobsApiRssFeedEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RemoteJobsApiRssFeedSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    RemoteJob(entopts?: Record<string, any>): RemoteJobEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RemoteJobsApiRssFeedSDK;
    tester(testopts?: any, sdkopts?: any): RemoteJobsApiRssFeedSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RemoteJobsApiRssFeedSDK;
export { stdutil, config, BaseFeature, RemoteJobsApiRssFeedEntityBase, RemoteJobsApiRssFeedSDK, SDK, };
