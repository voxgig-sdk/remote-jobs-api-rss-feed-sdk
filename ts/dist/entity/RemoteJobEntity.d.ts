import { RemoteJobsApiRssFeedEntityBase } from '../RemoteJobsApiRssFeedEntityBase';
import type { RemoteJobsApiRssFeedSDK } from '../RemoteJobsApiRssFeedSDK';
import type { Control } from '../types';
import type { RemoteJob, RemoteJobListMatch } from '../RemoteJobsApiRssFeedTypes';
declare class RemoteJobEntity extends RemoteJobsApiRssFeedEntityBase<RemoteJob> {
    constructor(client: RemoteJobsApiRssFeedSDK, entopts: any);
    make(this: RemoteJobEntity): RemoteJobEntity;
    list(this: any, reqmatch?: RemoteJobListMatch, ctrl?: Control): Promise<RemoteJobEntity[]>;
}
export { RemoteJobEntity };
