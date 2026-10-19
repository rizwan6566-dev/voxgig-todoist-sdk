import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { NoteSyncView, NoteSyncViewLoadMatch, NoteSyncViewListMatch, NoteSyncViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class NoteSyncViewEntity extends VoxgigTodoistSdkEntityBase<NoteSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: NoteSyncViewEntity): NoteSyncViewEntity;
    load(this: any, reqmatch?: NoteSyncViewLoadMatch, ctrl?: Control): Promise<NoteSyncViewEntity>;
    list(this: any, reqmatch?: NoteSyncViewListMatch, ctrl?: Control): Promise<NoteSyncViewEntity[]>;
    create(this: any, reqdata?: NoteSyncViewCreateData, ctrl?: Control): Promise<NoteSyncViewEntity>;
}
export { NoteSyncViewEntity };
