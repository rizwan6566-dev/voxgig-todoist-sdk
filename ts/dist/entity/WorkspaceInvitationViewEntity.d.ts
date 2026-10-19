import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { WorkspaceInvitationView, WorkspaceInvitationViewListMatch, WorkspaceInvitationViewCreateData, WorkspaceInvitationViewUpdateData } from '../VoxgigTodoistSdkTypes';
declare class WorkspaceInvitationViewEntity extends VoxgigTodoistSdkEntityBase<WorkspaceInvitationView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: WorkspaceInvitationViewEntity): WorkspaceInvitationViewEntity;
    list(this: any, reqmatch?: WorkspaceInvitationViewListMatch, ctrl?: Control): Promise<WorkspaceInvitationViewEntity[]>;
    create(this: any, reqdata?: WorkspaceInvitationViewCreateData, ctrl?: Control): Promise<WorkspaceInvitationViewEntity>;
    update(this: any, reqdata?: WorkspaceInvitationViewUpdateData, ctrl?: Control): Promise<WorkspaceInvitationViewEntity>;
}
export { WorkspaceInvitationViewEntity };
