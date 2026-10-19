import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { PlanDetail, PlanDetailListMatch } from '../VoxgigTodoistSdkTypes';
declare class PlanDetailEntity extends VoxgigTodoistSdkEntityBase<PlanDetail> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: PlanDetailEntity): PlanDetailEntity;
    list(this: any, reqmatch?: PlanDetailListMatch, ctrl?: Control): Promise<PlanDetailEntity[]>;
}
export { PlanDetailEntity };
