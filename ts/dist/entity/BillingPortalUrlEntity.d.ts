import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { BillingPortalUrl, BillingPortalUrlCreateData } from '../VoxgigTodoistSdkTypes';
declare class BillingPortalUrlEntity extends VoxgigTodoistSdkEntityBase<BillingPortalUrl> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: BillingPortalUrlEntity): BillingPortalUrlEntity;
    create(this: any, reqdata?: BillingPortalUrlCreateData, ctrl?: Control): Promise<BillingPortalUrlEntity>;
}
export { BillingPortalUrlEntity };
