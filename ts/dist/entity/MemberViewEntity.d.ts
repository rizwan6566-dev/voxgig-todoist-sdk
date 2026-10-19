import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { MemberView, MemberViewListMatch } from '../VoxgigTodoistSdkTypes';
declare class MemberViewEntity extends VoxgigTodoistSdkEntityBase<MemberView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: MemberViewEntity): MemberViewEntity;
    list(this: any, reqmatch?: MemberViewListMatch, ctrl?: Control): Promise<MemberViewEntity[]>;
}
export { MemberViewEntity };
