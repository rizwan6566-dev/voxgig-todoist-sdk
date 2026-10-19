import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { AnyProjectSyncView, AnyProjectSyncViewLoadMatch, AnyProjectSyncViewListMatch, AnyProjectSyncViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class AnyProjectSyncViewEntity extends VoxgigTodoistSdkEntityBase<AnyProjectSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: AnyProjectSyncViewEntity): AnyProjectSyncViewEntity;
    load(this: any, reqmatch?: AnyProjectSyncViewLoadMatch, ctrl?: Control): Promise<AnyProjectSyncViewEntity>;
    list(this: any, reqmatch?: AnyProjectSyncViewListMatch, ctrl?: Control): Promise<AnyProjectSyncViewEntity[]>;
    create(this: any, reqdata?: AnyProjectSyncViewCreateData, ctrl?: Control): Promise<AnyProjectSyncViewEntity>;
}
export { AnyProjectSyncViewEntity };
