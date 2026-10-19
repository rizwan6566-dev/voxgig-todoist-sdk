import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Template, TemplateLoadMatch } from '../VoxgigTodoistSdkTypes';
declare class TemplateEntity extends VoxgigTodoistSdkEntityBase<Template> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    load(this: any, reqmatch?: TemplateLoadMatch, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
