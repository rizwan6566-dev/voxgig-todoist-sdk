import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Reminder, ReminderRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class ReminderEntity extends VoxgigTodoistSdkEntityBase<Reminder> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ReminderEntity): ReminderEntity;
    remove(this: any, reqmatch?: ReminderRemoveMatch, ctrl?: Control): Promise<ReminderEntity>;
}
export { ReminderEntity };
