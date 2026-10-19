import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { NotificationSyncView, NotificationSyncViewLoadMatch, NotificationSyncViewListMatch, NotificationSyncViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class NotificationSyncViewEntity extends VoxgigTodoistSdkEntityBase<NotificationSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: NotificationSyncViewEntity): NotificationSyncViewEntity;
    load(this: any, reqmatch?: NotificationSyncViewLoadMatch, ctrl?: Control): Promise<NotificationSyncViewEntity>;
    list(this: any, reqmatch?: NotificationSyncViewListMatch, ctrl?: Control): Promise<NotificationSyncViewEntity[]>;
    create(this: any, reqdata?: NotificationSyncViewCreateData, ctrl?: Control): Promise<NotificationSyncViewEntity>;
}
export { NotificationSyncViewEntity };
