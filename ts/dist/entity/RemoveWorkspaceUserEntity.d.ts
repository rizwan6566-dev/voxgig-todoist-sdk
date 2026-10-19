import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { RemoveWorkspaceUser, RemoveWorkspaceUserRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class RemoveWorkspaceUserEntity extends VoxgigTodoistSdkEntityBase<RemoveWorkspaceUser> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: RemoveWorkspaceUserEntity): RemoveWorkspaceUserEntity;
    remove(this: any, reqmatch?: RemoveWorkspaceUserRemoveMatch, ctrl?: Control): Promise<RemoveWorkspaceUserEntity>;
}
export { RemoveWorkspaceUserEntity };
