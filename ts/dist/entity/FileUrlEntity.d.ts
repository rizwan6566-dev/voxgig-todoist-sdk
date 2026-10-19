import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { FileUrl, FileUrlLoadMatch } from '../VoxgigTodoistSdkTypes';
declare class FileUrlEntity extends VoxgigTodoistSdkEntityBase<FileUrl> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: FileUrlEntity): FileUrlEntity;
    load(this: any, reqmatch?: FileUrlLoadMatch, ctrl?: Control): Promise<FileUrlEntity>;
}
export { FileUrlEntity };
