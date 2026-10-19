import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { SectionSyncView, SectionSyncViewListMatch, SectionSyncViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class SectionSyncViewEntity extends VoxgigTodoistSdkEntityBase<SectionSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: SectionSyncViewEntity): SectionSyncViewEntity;
    list(this: any, reqmatch?: SectionSyncViewListMatch, ctrl?: Control): Promise<SectionSyncViewEntity[]>;
    create(this: any, reqdata?: SectionSyncViewCreateData, ctrl?: Control): Promise<SectionSyncViewEntity>;
}
export { SectionSyncViewEntity };
