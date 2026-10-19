import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Section, SectionLoadMatch, SectionListMatch, SectionCreateData, SectionRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class SectionEntity extends VoxgigTodoistSdkEntityBase<Section> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: SectionEntity): SectionEntity;
    load(this: any, reqmatch?: SectionLoadMatch, ctrl?: Control): Promise<SectionEntity>;
    list(this: any, reqmatch?: SectionListMatch, ctrl?: Control): Promise<SectionEntity[]>;
    create(this: any, reqdata?: SectionCreateData, ctrl?: Control): Promise<SectionEntity>;
    remove(this: any, reqmatch?: SectionRemoveMatch, ctrl?: Control): Promise<SectionEntity>;
}
export { SectionEntity };
