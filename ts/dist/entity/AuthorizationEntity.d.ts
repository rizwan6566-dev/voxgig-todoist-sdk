import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Authorization, AuthorizationCreateData, AuthorizationRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class AuthorizationEntity extends VoxgigTodoistSdkEntityBase<Authorization> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: AuthorizationEntity): AuthorizationEntity;
    create(this: any, reqdata?: AuthorizationCreateData, ctrl?: Control): Promise<AuthorizationEntity>;
    remove(this: any, reqmatch?: AuthorizationRemoveMatch, ctrl?: Control): Promise<AuthorizationEntity>;
}
export { AuthorizationEntity };
