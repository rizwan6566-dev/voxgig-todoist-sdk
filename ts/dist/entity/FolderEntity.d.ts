import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Folder, FolderLoadMatch, FolderListMatch, FolderCreateData, FolderRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class FolderEntity extends VoxgigTodoistSdkEntityBase<Folder> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: FolderEntity): FolderEntity;
    load(this: any, reqmatch?: FolderLoadMatch, ctrl?: Control): Promise<FolderEntity>;
    list(this: any, reqmatch?: FolderListMatch, ctrl?: Control): Promise<FolderEntity[]>;
    create(this: any, reqdata?: FolderCreateData, ctrl?: Control): Promise<FolderEntity>;
    remove(this: any, reqmatch?: FolderRemoveMatch, ctrl?: Control): Promise<FolderEntity>;
}
export { FolderEntity };
