import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { NotificationLocationSyncView, NotificationLocationSyncViewLoadMatch, NotificationLocationSyncViewListMatch, NotificationLocationSyncViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class NotificationLocationSyncViewEntity extends VoxgigTodoistSdkEntityBase<NotificationLocationSyncView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: NotificationLocationSyncViewEntity): NotificationLocationSyncViewEntity;
    load(this: any, reqmatch?: NotificationLocationSyncViewLoadMatch, ctrl?: Control): Promise<NotificationLocationSyncViewEntity>;
    list(this: any, reqmatch?: NotificationLocationSyncViewListMatch, ctrl?: Control): Promise<NotificationLocationSyncViewEntity[]>;
    create(this: any, reqdata?: NotificationLocationSyncViewCreateData, ctrl?: Control): Promise<NotificationLocationSyncViewEntity>;
}
export { NotificationLocationSyncViewEntity };
