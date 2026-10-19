import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { PaginatedListAnyProjectSyncView, PaginatedListAnyProjectSyncViewListMatch } from '../VoxgigTodoistSdkTypes';
declare class PaginatedListAnyProjectSyncViewEntity extends VoxgigTodoistSdkEntityBase<PaginatedListAnyProjectSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: PaginatedListAnyProjectSyncViewEntity): PaginatedListAnyProjectSyncViewEntity;
    list(this: any, reqmatch?: PaginatedListAnyProjectSyncViewListMatch, ctrl?: Control): Promise<PaginatedListAnyProjectSyncViewEntity[]>;
}
export { PaginatedListAnyProjectSyncViewEntity };
