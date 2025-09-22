import { HostEnum } from "./enums";

export type DecisionRulesHost = HostEnum | string;

export type DecisionRulesOptions = {
	solverKey?: string;
	managementKey?: string;
	host: HostEnum | string;
}

export type SolverOptions = {
	cols?: {
		includedConditionCols?: string[],
		excludedConditionCols?: string[]
	},
	debug?: boolean,
	corrId?: string,
	strategy?: string,
	audit?: boolean,
	auditTtl?: string
}

export enum RuleStatus {
	PENDING = "pending",
	PUBLISHED = "published"
}

export enum FolderType {
	ROOT = "ROOT",
	FOLDER = "FOLDER",
	RULE = "RULE"
}

export type FolderExport = any