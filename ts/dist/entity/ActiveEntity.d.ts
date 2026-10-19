import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Active, ActiveListMatch } from '../VoxgigTodoistSdkTypes';
declare class ActiveEntity extends VoxgigTodoistSdkEntityBase<Active> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ActiveEntity): ActiveEntity;
    list(this: any, reqmatch?: ActiveListMatch, ctrl?: Control): Promise<ActiveEntity[]>;
}
export { ActiveEntity };
