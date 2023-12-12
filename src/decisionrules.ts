import { deleteAuditLogsAPI, getAuditLogsAPI } from "./api/businessIntelligence";
import { 
	createRuleAPI, 
	deleteRuleAPI, 
	deleteTagsAPI, 
	exportFolderAPI, 
	findDependenciesAPI, 
	findDuplicatesAPI, 
	getRuleAPI, 
	getRulesForSpaceAPI, 
	getTagsAPI, 
	lockRuleAPI, 
	updateRuleAPI, 
	updateRuleStatusAPI, 
	updateTagsAPI } from "./api/management";
import { solveRule } from "./api/solver";
import { DecisionRulesAuditOpt, DecisionRulesOptions } from "./defs/models";
import { SolverOptions } from "./defs/models";
import { handleError } from "./utils/utils";

export default class DecisionRules {
	private readonly options: DecisionRulesOptions;
	constructor(options: DecisionRulesOptions) {
		this.options = options;
	}
	public async solve(ruleId: string, data: any, version?: string, solverOptions?: SolverOptions): Promise<any> {
		try {
			return await solveRule(this.options, ruleId, data, version, solverOptions);
		} catch (e: any) {
			throw handleError(e);
		}
	}

	public management = {
		getRule: async (ruleId: string, version?: string) => {
			try {
				return await getRuleAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateRuleStatus: async (ruleId: string, status: string, version?: string) => {
			try {
				return await updateRuleStatusAPI(this.options, ruleId, status, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateRule: async (ruleId: string, rule: any, version?: string) => {
			try {
				return await updateRuleAPI(this.options, ruleId, rule, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		createRule: async (rule: any) => {
			try {
				return await createRuleAPI(this.options, rule);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		deleteRule: async (ruleId: string, version?: string) => {
			try {
				return await deleteRuleAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);	
			}
		},
		getRulesForSpace: async () => {
			try {
				return await getRulesForSpaceAPI(this.options);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		getTags: async (tags: string[]) => {
			try {
				return await getTagsAPI(this.options, tags);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateTags: async (ruleId: string, tags: string[] ,version?: string) => {
			try {
				return await updateTagsAPI(this.options, ruleId, tags, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		deleteTags: async (ruleId: string, tags: string[], version?: string) => {
			try {
				return await deleteTagsAPI(this.options, ruleId, tags, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		exportFolder: async (nodeId: string) => {
			try {
				return await exportFolderAPI(this.options, nodeId);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		importFolder: async (targetNodeid: string) => {
			try {
				return await exportFolderAPI(this.options, targetNodeid);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		findDuplicates: async (ruleId: string, version?: string) => {
			try {
				return await findDuplicatesAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		findDependencies: async (ruleId: string, version?: string) => {
			try {
				return await findDependenciesAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		lockRule: async (ruleId: string, version?: string) => {
			try {
				return await lockRuleAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		}
	};

	public bi = {
		getAuditLogs: async (auditLogsOpts: DecisionRulesAuditOpt) => {
			try {
				return await getAuditLogsAPI(this.options, auditLogsOpts);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		deleteAuditLogs: async (auditLogsOpts: DecisionRulesAuditOpt) => {
			try {
				return await deleteAuditLogsAPI(this.options, auditLogsOpts);
			} catch (e: any) {
				throw handleError(e);	
			}
		}
	};
}


