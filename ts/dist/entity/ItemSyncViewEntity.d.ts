import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { ItemSyncView, ItemSyncViewLoadMatch, ItemSyncViewListMatch, ItemSyncViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class ItemSyncViewEntity extends VoxgigTodoistSdkEntityBase<ItemSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ItemSyncViewEntity): ItemSyncViewEntity;
    load(this: any, reqmatch?: ItemSyncViewLoadMatch, ctrl?: Control): Promise<ItemSyncViewEntity>;
    list(this: any, reqmatch?: ItemSyncViewListMatch, ctrl?: Control): Promise<ItemSyncViewEntity[]>;
    create(this: any, reqdata?: ItemSyncViewCreateData, ctrl?: Control): Promise<ItemSyncViewEntity>;
}
export { ItemSyncViewEntity };
