import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Workspace, WorkspaceLoadMatch, WorkspaceListMatch, WorkspaceCreateData, WorkspaceRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class WorkspaceEntity extends VoxgigTodoistSdkEntityBase<Workspace> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: WorkspaceEntity): WorkspaceEntity;
    load(this: any, reqmatch?: WorkspaceLoadMatch, ctrl?: Control): Promise<WorkspaceEntity>;
    list(this: any, reqmatch?: WorkspaceListMatch, ctrl?: Control): Promise<WorkspaceEntity[]>;
    create(this: any, reqdata?: WorkspaceCreateData, ctrl?: Control): Promise<WorkspaceEntity>;
    remove(this: any, reqmatch?: WorkspaceRemoveMatch, ctrl?: Control): Promise<WorkspaceEntity>;
}
export { WorkspaceEntity };
