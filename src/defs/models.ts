import { HostEnum } from "./enums";

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
