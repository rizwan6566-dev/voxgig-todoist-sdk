import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Comment, CommentCreateData, CommentRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class CommentEntity extends VoxgigTodoistSdkEntityBase<Comment> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: CommentEntity): CommentEntity;
    create(this: any, reqdata?: CommentCreateData, ctrl?: Control): Promise<CommentEntity>;
    remove(this: any, reqmatch?: CommentRemoveMatch, ctrl?: Control): Promise<CommentEntity>;
}
export { CommentEntity };
