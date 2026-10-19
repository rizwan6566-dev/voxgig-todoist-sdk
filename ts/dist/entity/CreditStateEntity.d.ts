import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { CreditState, CreditStateLoadMatch } from '../VoxgigTodoistSdkTypes';
declare class CreditStateEntity extends VoxgigTodoistSdkEntityBase<CreditState> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: CreditStateEntity): CreditStateEntity;
    load(this: any, reqmatch?: CreditStateLoadMatch, ctrl?: Control): Promise<CreditStateEntity>;
}
export { CreditStateEntity };
