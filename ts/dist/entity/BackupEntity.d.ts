import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Backup, BackupLoadMatch, BackupListMatch } from '../VoxgigTodoistSdkTypes';
declare class BackupEntity extends VoxgigTodoistSdkEntityBase<Backup> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: BackupEntity): BackupEntity;
    load(this: any, reqmatch?: BackupLoadMatch, ctrl?: Control): Promise<BackupEntity>;
    list(this: any, reqmatch?: BackupListMatch, ctrl?: Control): Promise<BackupEntity[]>;
}
export { BackupEntity };
