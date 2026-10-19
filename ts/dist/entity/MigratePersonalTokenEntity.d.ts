import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { MigratePersonalToken, MigratePersonalTokenCreateData } from '../VoxgigTodoistSdkTypes';
declare class MigratePersonalTokenEntity extends VoxgigTodoistSdkEntityBase<MigratePersonalToken> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: MigratePersonalTokenEntity): MigratePersonalTokenEntity;
    create(this: any, reqdata?: MigratePersonalTokenCreateData, ctrl?: Control): Promise<MigratePersonalTokenEntity>;
}
export { MigratePersonalTokenEntity };
