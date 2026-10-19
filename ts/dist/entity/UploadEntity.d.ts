import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Upload, UploadCreateData, UploadRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class UploadEntity extends VoxgigTodoistSdkEntityBase<Upload> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: UploadEntity): UploadEntity;
    create(this: any, reqdata?: UploadCreateData, ctrl?: Control): Promise<UploadEntity>;
    remove(this: any, reqmatch?: UploadRemoveMatch, ctrl?: Control): Promise<UploadEntity>;
}
export { UploadEntity };
