import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { IdMapping, IdMappingListMatch } from '../VoxgigTodoistSdkTypes';
declare class IdMappingEntity extends VoxgigTodoistSdkEntityBase<IdMapping> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: IdMappingEntity): IdMappingEntity;
    list(this: any, reqmatch?: IdMappingListMatch, ctrl?: Control): Promise<IdMappingEntity[]>;
}
export { IdMappingEntity };
