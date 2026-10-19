import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Email, EmailUpdateData } from '../VoxgigTodoistSdkTypes';
declare class EmailEntity extends VoxgigTodoistSdkEntityBase<Email> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    update(this: any, reqdata?: EmailUpdateData, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
