import { VoxgigTodoistSdkEntityBase } from '../VoxgigTodoistSdkEntityBase';
import type { VoxgigTodoistSdkSDK } from '../VoxgigTodoistSdkSDK';
import type { Control } from '../types';
import type { Project, ProjectRemoveMatch } from '../VoxgigTodoistSdkTypes';
declare class ProjectEntity extends VoxgigTodoistSdkEntityBase<Project> {
    constructor(client: VoxgigTodoistSdkSDK, entopts: any);
    make(this: ProjectEntity): ProjectEntity;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntity>;
}
export { ProjectEntity };
