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
	updateRuleAPI, 
	updateRuleStatusAPI, 
	updateTagsAPI } from "./api/management";
import { solveRule } from "./api/solver";
import { DecisionRulesOptions } from "./defs/models";
import { SolverOptions } from "./defs/models";
import { DecisionRulesErrorException } from "./exceptions/DecisionRulesException";

export default class DecisionRules {
	private readonly options: DecisionRulesOptions;
	constructor(options: DecisionRulesOptions) {
		this.options = options;
	}
	public async solve(ruleId: string, data: any, version?: string, solverOptions?: SolverOptions): Promise<any> {
		try {
			return await solveRule(this.options, ruleId, data, version, solverOptions);
		} catch (e: any) {
			throw new DecisionRulesErrorException(`Solver failed with status: ${e.response.status}`, e.response.data);
		}
	}

	public management = {
		getRule: async (ruleId: string, version?: string) => {
			try {
				return await getRuleAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		updateRuleStatus: async (ruleId: string, status: string, version?: string) => {
			try {
				return await updateRuleStatusAPI(this.options, ruleId, status, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		updateRule: async (ruleId: string, rule: any, version?: string) => {
			try {
				return await updateRuleAPI(this.options, ruleId, rule, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		createRule: async (rule: any) => {
			try {
				return await createRuleAPI(this.options, rule);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		deleteRule: async (ruleId: string, version?: string) => {
			try {
				return await deleteRuleAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		getRulesForSpace: async () => {
			try {
				return await getRulesForSpaceAPI(this.options);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		getTags: async (tags: string[]) => {
			try {
				return await getTagsAPI(this.options, tags);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		updateTags: async (ruleId: string, tags: any ,version?: string) => {
			try {
				return await updateTagsAPI(this.options, ruleId, tags, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		deleteTags: async (ruleId: string, tags: string[], version?: string) => {
			try {
				return await deleteTagsAPI(this.options, ruleId, tags, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		exportFolder: async (nodeId: string) => {
			try {
				return await exportFolderAPI(this.options, nodeId);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		importFolder: async (targetNodeid: string) => {
			try {
				return await exportFolderAPI(this.options, targetNodeid);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		findDuplicates: async (ruleId: string, version?: string) => {
			try {
				return await findDuplicatesAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		},
		findDependencies: async (ruleId: string, version?: string) => {
			try {
				return await findDependenciesAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
			}
		}
	};
}
