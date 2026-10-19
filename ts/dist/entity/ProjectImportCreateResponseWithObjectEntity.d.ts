import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { ProjectImportCreateResponseWithObject, ProjectImportCreateResponseWithObjectCreateData } from '../VoxgigTodoistSdkTypes';
declare class ProjectImportCreateResponseWithObjectEntity extends VoxgigTodoistSdkEntityBase<ProjectImportCreateResponseWithObject> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ProjectImportCreateResponseWithObjectEntity): ProjectImportCreateResponseWithObjectEntity;
    create(this: any, reqdata?: ProjectImportCreateResponseWithObjectCreateData, ctrl?: Control): Promise<ProjectImportCreateResponseWithObjectEntity>;
}
export { ProjectImportCreateResponseWithObjectEntity };
