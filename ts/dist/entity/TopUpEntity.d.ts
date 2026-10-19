import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { TopUp, TopUpCreateData } from '../VoxgigTodoistSdkTypes';
declare class TopUpEntity extends VoxgigTodoistSdkEntityBase<TopUp> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: TopUpEntity): TopUpEntity;
    create(this: any, reqdata?: TopUpCreateData, ctrl?: Control): Promise<TopUpEntity>;
}
export { TopUpEntity };
