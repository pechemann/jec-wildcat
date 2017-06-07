// Type definitions for jec-juta
// Project: JEC Wildcat
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-wildcat" {

import { LoggerProxy, AbstractLoggerProxy, FileStats, JsonLoaderError } from "jec-commons";

export class WildcatBuilder {
    constructor();
    build(): Wildcat;
}

export class WildcatPropertiesBuilder {
    constructor();
    private static readonly GPM;
    private static readonly LOW_DASH;
    build(config: any): Map<string, any>;
}

export class WildcatRequestBuilder {
    constructor();
    private _gpm;
    private _directory;
    private _contextRoot;
    private _projectName;
    private _properties;
    projectName(projectName: string): WildcatRequestBuilder;
    gpm(gpm: string): WildcatRequestBuilder;
    directory(directory: string): WildcatRequestBuilder;
    contextRoot(contextRoot: string): WildcatRequestBuilder;
    properties(props: any): WildcatRequestBuilder;
    build(): WildcatRequest;
}

export class Gpm {
    constructor();
    version: string;
}

export class GpmConfig {
    constructor();
    gpm: Gpm;
    project: Project;
    processedFiles: string[];
}

export class GpmConfigParser {
    constructor();
    private _validator;
    private initObj();
    private parseGpm(gpmConfig, config);
    private parseProject(gpmConfig, config);
    private parseProcessedFiles(gpmConfig, config);
    parse(config: any, success: (data: GpmConfig) => void, error: (err: GpmConfigError) => void): void;
}

export class Project {
    constructor();
    name: string;
    version: string;
    title: string;
    description: string;
    author: string;
}

export class DefaultWildcatProcessor implements Wildcat {
    constructor();
    private _loader;
    private _taskManager;
    private initObj();
    private sendRequestMessage(request);
    private sendConfigMessage(config);
    private manageTasks(request, config, callback);
    private sendMessage(message);
    execute(request: WildcatRequest, callback: (err: any) => void): void;
}

export class DefaultWildcatRequest implements WildcatRequest {
    constructor();
    gpm: string;
    properties: any;
    projectName: string;
    contextRoot: string;
    directory: string;
}

export class GpmConfigError extends Error {
    constructor(message: string);
}

export class WildcatLoggerProxy extends AbstractLoggerProxy implements LoggerProxy {
    constructor();
    private static INSTANCE;
    private static _locked;
    static getInstance(): LoggerProxy;
}

export abstract class AbstractTask implements Task {
    constructor();
    protected __request: WildcatRequest;
    protected __config: GpmConfig;
    setContext(request: WildcatRequest, config: GpmConfig): void;
    execute(success: (message: string) => void, error?: (err: any) => void): void;
}

export class DefaultTaskRunner implements TaskRunner {
    constructor();
    private _request;
    private _config;
    setContext(request: WildcatRequest, config: GpmConfig): void;
    run(task: Task, success: (message: string) => void, error?: (err: any) => void): void;
}

export interface TaskRunner {
    setContext(request: WildcatRequest, config: GpmConfig): void;
    run(task: Task, success: (message: string) => void, error?: (err: any) => void): void;
}

export interface Task {
    setContext(request: WildcatRequest, config: GpmConfig): void;
    execute(success: (message: string) => void, error?: (err: any) => void): void;
}

export class CreateProjectDirectoryTask extends AbstractTask implements Task {
    constructor();
    execute(success: (message: string) => void, error?: (err: any) => void): void;
}

export class DependenciesInstallTask extends AbstractTask implements Task {
    constructor();
    execute(success: (message: string) => void, error?: (err: any) => void): void;
}

export class DeployArchetypeTask extends AbstractTask implements Task {
    constructor();
    private _walker;
    private _serverPath;
    private _extensionMap;
    private _propertiesProcessor;
    private initObj();
    private buildFiles(archetypePaths, success, error?);
    setContext(request: WildcatRequest, config: GpmConfig): void;
    execute(success: (message: string) => void, error?: (err: any) => void): void;
}

export class VscSettingsTask extends AbstractTask implements Task {
    constructor();
    private static readonly RESOURCE_NAMES;
    private getSettingsTemplate();
    private getTasksTemplate();
    private buildErrorMessage(error);
    execute(success: (message: string) => void, error?: (err: any) => void): void;
}

export class ArchetypePath {
    constructor();
    file: string;
    targetPath: string;
    originPath: string;
    type: number;
    stats: FileStats;
    extension: string;
}

export class ArchetypePathOperation {
    constructor();
    pending: number;
    originPath: string;
}

export class ArchetypePathWalker {
    constructor();
    private internalWalk(path, operation, complete, error);
    private buildArchetypePath(path, stats, sourcePathLength);
    process: (file: ArchetypePath) => void;
    walk(path: string, complete: () => void, error: (err: any) => void): void;
}

export class ArchetypePropertiesProcessor {
    constructor();
    private _propsMap;
    private static readonly PROP_PATTERN;
    setContext(request: WildcatRequest, config: GpmConfig): void;
    mapProperties(file: string): string;
}

export class GpmConfigLoader {
    constructor();
    private static readonly GPM_FILE_REF;
    private _parser;
    private initObj();
    private getGpmPath(request);
    load(request: WildcatRequest, success: (data: GpmConfig) => void, error: (err: JsonLoaderError) => void): void;
}

export enum PathType {
    FILE = 0,
    DIRECTORY = 1,
}

export class PathUtils {
    static readonly WORKSPACE: string;
    static readonly GPMS_DIRECTORY: string;
    static readonly ARCHETYPE_DIRECTORY: string;
}

export interface GpmValidator {
    validate(gpmConfig: any, callback: (err: GpmConfigError) => void): void;
}

export interface Wildcat {
    execute(request: WildcatRequest, callback: (err: any) => void): void;
}

export interface WildcatRequest {
    gpm: string;
    properties: Map<string, any>;
    projectName: string;
    directory: string;
    contextRoot: string;
}

}