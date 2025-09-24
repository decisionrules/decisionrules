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

/**
 * Options for configuring rules.
 *
 * @property path - Path used for handling duplicate aliases.
 * @property version - Used together with path .
 */
export type RuleOptions = {
    path?: string;
    version?: number;
}

export type FolderOptions = {
    path?: string
}

export type FolderExport = any

export type FolderStructure = {
	type: string,
	name: string,
	id: string,
	children: {
		baseId: string
		version?: number
		name: string
		ruleAlias?: string
		type: string
	}[]
}

export type Rule = {
	_id: string
	name: string
	description: string
	inputSchema: any
	outputSchema: any
	version: number
	lastUpdate: Date
	createdIn: Date
	status: string
	baseId?: string
	type?: string
	tags?: string[]
	auditLog?: string
	ruleAlias?: string
	locked?: boolean
	ruleAliasInfo?: string
	sessionId?: string
}

export type Job = {
	ruleReference: {
		baseId: string;
		version: number;
		type: string;
	};
	inputData: Record<string, unknown>;
	jobId: string;
	context: {
		spaceId: string;
		billingUserId: string;
		executorUser: string | null;
		usedApiKeyId: string;
		environmentGroup: string;
		priority: number;
		parallelLimit: number;
	};
	status: {
		state: string;
		code: string;
		message: string;
	};
	correlationId: string;
	createdAt: string;
	updatedAt: string;
};

export type Version = "latest" | number;