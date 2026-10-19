import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Task, TaskCreateData, TaskRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class TaskEntity extends VoxgigTodoistSdkEntityBase<Task> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: TaskEntity): TaskEntity;
    create(this: any, reqdata?: TaskCreateData, ctrl?: Control): Promise<TaskEntity>;
    remove(this: any, reqmatch?: TaskRemoveMatch, ctrl?: Control): Promise<TaskEntity>;
}
export { TaskEntity };
