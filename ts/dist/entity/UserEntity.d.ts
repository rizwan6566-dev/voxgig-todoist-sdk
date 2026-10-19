import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { User, UserListMatch, UserUpdateData } from '../VoxgigTodoistSdkTypes';
declare class UserEntity extends VoxgigTodoistSdkEntityBase<User> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
    update(this: any, reqdata?: UserUpdateData, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
