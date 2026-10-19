import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { LabelRestView, LabelRestViewListMatch } from '../VoxgigTodoistSdkTypes';
declare class LabelRestViewEntity extends VoxgigTodoistSdkEntityBase<LabelRestView> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: LabelRestViewEntity): LabelRestViewEntity;
    list(this: any, reqmatch?: LabelRestViewListMatch, ctrl?: Control): Promise<LabelRestViewEntity[]>;
}
export { LabelRestViewEntity };
