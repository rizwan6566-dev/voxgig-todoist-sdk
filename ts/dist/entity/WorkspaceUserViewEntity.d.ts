import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { WorkspaceUserView, WorkspaceUserViewCreateData } from '../VoxgigTodoistSdkTypes';
declare class WorkspaceUserViewEntity extends VoxgigTodoistSdkEntityBase<WorkspaceUserView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: WorkspaceUserViewEntity): WorkspaceUserViewEntity;
    create(this: any, reqdata?: WorkspaceUserViewCreateData, ctrl?: Control): Promise<WorkspaceUserViewEntity>;
}
export { WorkspaceUserViewEntity };
