import { HostEnum } from "./enums";

export type DecisionRulesHost = HostEnum | string;

export type DecisionRulesOptions = {
	solverKey?: string;
	managementKey?: string;
	businessIntKey?: string;
	host: HostEnum | string;
	bi_host?: HostEnum | string;
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

export type DecisionRulesAuditOpt = {
	page?: string;
	page_size?: string;
	limit?: string;
	corrIds?: string[];
	rules?: string[];
	solver_keys?: string[];
	tags?: string[];
	date_gte?: string;
	date_lte?: string;
	order?: string;
	include_debug?: string;
	status_code?: string;
}
