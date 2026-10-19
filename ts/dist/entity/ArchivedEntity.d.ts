import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Archived, ArchivedListMatch } from '../VoxgigTodoistSdkTypes';
declare class ArchivedEntity extends VoxgigTodoistSdkEntityBase<Archived> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ArchivedEntity): ArchivedEntity;
    list(this: any, reqmatch?: ArchivedListMatch, ctrl?: Control): Promise<ArchivedEntity[]>;
}
export { ArchivedEntity };
