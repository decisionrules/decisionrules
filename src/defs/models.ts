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
 * @property version - Used only together with path.
 */
export interface RuleOptions extends CreateRuleOptions {
	version?: Version
}

/**
 * Options for configuring create rule.
 *
 * @property path - Path used to find rule.
 */
export type CreateRuleOptions = {
	path?: string
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
		id: string
		baseId: string
		version?: number
		name: string
		ruleAlias?: string
		type: string
	}[]
}

export type Rule = {
	name: string
	description: string
	inputSchema: any
	outputSchema: any
	version: number
	lastUpdate: Date
	createdIn: Date
	status: string
	baseId?: string
	ruleId: string
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

export type Version = "latest" | number | string;