import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { SubscriptionInfo, SubscriptionInfoCreateData } from '../VoxgigTodoistSdkTypes';
declare class SubscriptionInfoEntity extends VoxgigTodoistSdkEntityBase<SubscriptionInfo> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: SubscriptionInfoEntity): SubscriptionInfoEntity;
    create(this: any, reqdata?: SubscriptionInfoCreateData, ctrl?: Control): Promise<SubscriptionInfoEntity>;
}
export { SubscriptionInfoEntity };
