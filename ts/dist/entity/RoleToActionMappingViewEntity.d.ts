import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { RoleToActionMappingView, RoleToActionMappingViewListMatch } from '../VoxgigTodoistSdkTypes';
declare class RoleToActionMappingViewEntity extends VoxgigTodoistSdkEntityBase<RoleToActionMappingView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: RoleToActionMappingViewEntity): RoleToActionMappingViewEntity;
    list(this: any, reqmatch?: RoleToActionMappingViewListMatch, ctrl?: Control): Promise<RoleToActionMappingViewEntity[]>;
}
export { RoleToActionMappingViewEntity };
