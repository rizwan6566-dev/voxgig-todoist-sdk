import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { ByCompletionDate, ByCompletionDateListMatch } from '../VoxgigTodoistSdkTypes';
declare class ByCompletionDateEntity extends VoxgigTodoistSdkEntityBase<ByCompletionDate> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ByCompletionDateEntity): ByCompletionDateEntity;
    list(this: any, reqmatch?: ByCompletionDateListMatch, ctrl?: Control): Promise<ByCompletionDateEntity[]>;
}
export { ByCompletionDateEntity };
