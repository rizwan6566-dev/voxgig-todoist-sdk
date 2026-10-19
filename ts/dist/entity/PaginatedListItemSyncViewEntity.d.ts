import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { PaginatedListItemSyncView, PaginatedListItemSyncViewListMatch } from '../VoxgigTodoistSdkTypes';
declare class PaginatedListItemSyncViewEntity extends VoxgigTodoistSdkEntityBase<PaginatedListItemSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: PaginatedListItemSyncViewEntity): PaginatedListItemSyncViewEntity;
    list(this: any, reqmatch?: PaginatedListItemSyncViewListMatch, ctrl?: Control): Promise<PaginatedListItemSyncViewEntity[]>;
}
export { PaginatedListItemSyncViewEntity };
