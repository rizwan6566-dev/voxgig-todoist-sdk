import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { PaginatedListStr, PaginatedListStrListMatch } from '../VoxgigTodoistSdkTypes';
declare class PaginatedListStrEntity extends VoxgigTodoistSdkEntityBase<PaginatedListStr> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: PaginatedListStrEntity): PaginatedListStrEntity;
    list(this: any, reqmatch?: PaginatedListStrListMatch, ctrl?: Control): Promise<PaginatedListStrEntity[]>;
}
export { PaginatedListStrEntity };
