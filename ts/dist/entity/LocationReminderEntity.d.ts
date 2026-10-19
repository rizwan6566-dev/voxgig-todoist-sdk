import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { LocationReminder, LocationReminderRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class LocationReminderEntity extends VoxgigTodoistSdkEntityBase<LocationReminder> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: LocationReminderEntity): LocationReminderEntity;
    remove(this: any, reqmatch?: LocationReminderRemoveMatch, ctrl?: Control): Promise<LocationReminderEntity>;
}
export { LocationReminderEntity };
