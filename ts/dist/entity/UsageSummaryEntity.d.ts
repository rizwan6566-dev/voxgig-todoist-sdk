import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { UsageSummary, UsageSummaryListMatch } from '../VoxgigTodoistSdkTypes';
declare class UsageSummaryEntity extends VoxgigTodoistSdkEntityBase<UsageSummary> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: UsageSummaryEntity): UsageSummaryEntity;
    list(this: any, reqmatch?: UsageSummaryListMatch, ctrl?: Control): Promise<UsageSummaryEntity[]>;
}
export { UsageSummaryEntity };
