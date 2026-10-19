import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Label, LabelLoadMatch, LabelListMatch, LabelCreateData, LabelRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class LabelEntity extends VoxgigTodoistSdkEntityBase<Label> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: LabelEntity): LabelEntity;
    load(this: any, reqmatch?: LabelLoadMatch, ctrl?: Control): Promise<LabelEntity>;
    list(this: any, reqmatch?: LabelListMatch, ctrl?: Control): Promise<LabelEntity[]>;
    create(this: any, reqdata?: LabelCreateData, ctrl?: Control): Promise<LabelEntity>;
    remove(this: any, reqmatch?: LabelRemoveMatch, ctrl?: Control): Promise<LabelEntity>;
}
export { LabelEntity };
