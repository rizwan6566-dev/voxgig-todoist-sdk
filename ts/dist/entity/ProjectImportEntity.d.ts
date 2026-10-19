import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { ProjectImport, ProjectImportCreateData } from '../VoxgigTodoistSdkTypes';
declare class ProjectImportEntity extends VoxgigTodoistSdkEntityBase<ProjectImport> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ProjectImportEntity): ProjectImportEntity;
    create(this: any, reqdata?: ProjectImportCreateData, ctrl?: Control): Promise<ProjectImportEntity>;
}
export { ProjectImportEntity };
