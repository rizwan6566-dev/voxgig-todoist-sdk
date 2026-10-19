import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { ByDueDate, ByDueDateListMatch } from '../VoxgigTodoistSdkTypes';
declare class ByDueDateEntity extends VoxgigTodoistSdkEntityBase<ByDueDate> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ByDueDateEntity): ByDueDateEntity;
    list(this: any, reqmatch?: ByDueDateListMatch, ctrl?: Control): Promise<ByDueDateEntity[]>;
}
export { ByDueDateEntity };
