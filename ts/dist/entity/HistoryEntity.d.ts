import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { History, HistoryListMatch } from '../VoxgigTodoistSdkTypes';
declare class HistoryEntity extends VoxgigTodoistSdkEntityBase<History> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: HistoryEntity): HistoryEntity;
    list(this: any, reqmatch?: HistoryListMatch, ctrl?: Control): Promise<HistoryEntity[]>;
}
export { HistoryEntity };
