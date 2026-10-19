import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Collaborator, CollaboratorListMatch } from '../VoxgigTodoistSdkTypes';
declare class CollaboratorEntity extends VoxgigTodoistSdkEntityBase<Collaborator> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: CollaboratorEntity): CollaboratorEntity;
    list(this: any, reqmatch?: CollaboratorListMatch, ctrl?: Control): Promise<CollaboratorEntity[]>;
}
export { CollaboratorEntity };
