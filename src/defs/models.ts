import { HostEnum, StrategyOptions } from './enums'

export type DecisionRulesHost = HostEnum | string;



export type DecisionRulesOptions = {
	solverKey?: string;
	managementKey?: string;
	host: HostEnum | string;
}

/**
 * Options for configuring solver.
 *
 * @property cols - Used only together with path. Allows specifying which condition
 *                  columns to include or exclude during evaluation.
 *                  - includedConditionCols: List of condition columns to explicitly include.
 *                  - excludedConditionCols: List of condition columns to explicitly exclude.
 * @property debug - Enables debug mode for additional logging and troubleshooting.
 * @property corrId - Correlation ID for tracing requests across systems.
 * @property audit - Enables auditing of solver operations.
 * @property auditTtl - Time-to-live (TTL) for stored audit records.
 * @property aliasConflictPath - Path used to resolve alias conflicts, if any.
 * @property strategy - Strategy options that control solver behavior.
 */
export type SolverOptions = {
	cols?: {
		includedConditionCols?: string[],
		excludedConditionCols?: string[]
	},
	debug?: boolean,
	corrId?: string,
	audit?: boolean,
	auditTtl?: string,
	aliasConflictPath?: string,
	strategy?: StrategyOptions,
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

export type Version = "latest" | number;