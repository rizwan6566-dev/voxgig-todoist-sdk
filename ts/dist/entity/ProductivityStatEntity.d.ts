import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { ProductivityStat, ProductivityStatListMatch } from '../VoxgigTodoistSdkTypes';
declare class ProductivityStatEntity extends VoxgigTodoistSdkEntityBase<ProductivityStat> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ProductivityStatEntity): ProductivityStatEntity;
    list(this: any, reqmatch?: ProductivityStatListMatch, ctrl?: Control): Promise<ProductivityStatEntity[]>;
}
export { ProductivityStatEntity };
