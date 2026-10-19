import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { StatusOk, StatusOkRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class StatusOkEntity extends VoxgigTodoistSdkEntityBase<StatusOk> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: StatusOkEntity): StatusOkEntity;
    remove(this: any, reqmatch?: StatusOkRemoveMatch, ctrl?: Control): Promise<StatusOkEntity>;
}
export { StatusOkEntity };
