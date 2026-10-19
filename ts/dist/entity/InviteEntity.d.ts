import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Invite, InviteCreateData } from '../VoxgigTodoistSdkTypes';
declare class InviteEntity extends VoxgigTodoistSdkEntityBase<Invite> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: InviteEntity): InviteEntity;
    create(this: any, reqdata?: InviteCreateData, ctrl?: Control): Promise<InviteEntity>;
}
export { InviteEntity };
