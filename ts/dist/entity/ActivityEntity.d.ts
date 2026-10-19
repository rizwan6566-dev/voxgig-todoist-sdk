import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Activity, ActivityListMatch } from '../VoxgigTodoistSdkTypes';
declare class ActivityEntity extends VoxgigTodoistSdkEntityBase<Activity> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ActivityEntity): ActivityEntity;
    list(this: any, reqmatch?: ActivityListMatch, ctrl?: Control): Promise<ActivityEntity[]>;
}
export { ActivityEntity };
