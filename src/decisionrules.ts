import { cancelJobAPI, jobInfoAPI, startJobAPI } from "./api/job";
import { createFolderAPI, createNewRuleVersionAPI, createRuleAPI, deleteFolderAPI, deleteRuleAPI, deleteTagsAPI, exportFolderAPI, exportRuleFlowAPI, findDependenciesAPI, findDuplicatesAPI, findFolderOrRuleByAttributeAPI, getNodeFolderStructureAPI, getRuleAPI, getRulesForSpaceAPI, getRulesByTagsAPI, importFolderAPI, importRuleFlowAPI, lockRuleAPI, moveFolderAPI, renameFolderAPI, updateNodeFolderStructureAPI, updateRuleAPI, updateRuleStatusAPI, updateTagsAPI } from "./api/management";
import { solveRule } from "./api/solver";
import { DecisionRulesOptions, FolderExport, FolderStructure, FolderType, Job, Rule, RuleStatus } from "./defs/models";
import { SolverOptions } from "./defs/models";
import { handleError } from "./utils/utils";
import crypto, { KeyExportOptions } from 'crypto';

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
		getRule: async (ruleIdOrAlias: string, version?: string): Promise<Rule> => {
			try {
				return await getRuleAPI(this.options, ruleIdOrAlias, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateRuleStatus: async (ruleIdOrAlias: string, status: RuleStatus, version: string): Promise<Rule> => {
			try {
				return await updateRuleStatusAPI(this.options, ruleIdOrAlias, status, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateRule: async (ruleIdOrAlias: string, rule: any, version?: string): Promise<Rule> => {
			try {
				return await updateRuleAPI(this.options, ruleIdOrAlias, rule, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		createRule: async (rule: any, path?: string): Promise<Rule> => {
			try {
				return await createRuleAPI(this.options, rule, path);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		createNewRuleVersion: async (ruleIdOrAlias: string, rule: any): Promise<Rule> => {
			try {
				return await createNewRuleVersionAPI(this.options, ruleIdOrAlias, rule);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		deleteRule: async (ruleId: string, version?: string): Promise<void> => {
			try {
				return await deleteRuleAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		lockRule: async (ruleId: string, lock: boolean, version?: string): Promise<void> => {
			try {
				return await lockRuleAPI(this.options, ruleId, lock, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		findDuplicates: async (ruleId: string, version?: string): Promise<{ rule: Rule, duplicates: any[] }> => {
			try {
				return await findDuplicatesAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		findDependencies: async (ruleId: string, version?: string): Promise<{ rule: Rule, dependencies: any[] }> => {
			try {
				return await findDependenciesAPI(this.options, ruleId, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		getRulesForSpace: async (): Promise<Rule[]> => {
			try {
				return await getRulesForSpaceAPI(this.options);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		getTags: async (tags: string[]): Promise<Rule[]> => {
			try {
				return await getRulesByTagsAPI(this.options, tags);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateTags: async (ruleId: string, tags: any, version?: string): Promise<string[]> => {
			try {
				return await updateTagsAPI(this.options, ruleId, tags, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		deleteTags: async (ruleId: string, tags: string[], version?: string): Promise<void> => {
			try {
				return await deleteTagsAPI(this.options, ruleId, tags, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		exportRuleFlow: async (nodeId: string): Promise<Rule> => {
			try {
				return await exportRuleFlowAPI(this.options, nodeId);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		importRuleFlow: async (rule: any, options: { newVersion?: string, overwrite?: string, version?: string }): Promise<any> => {
			try {
				return await importRuleFlowAPI(this.options, rule, options);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		createFolder: async (targetNodeid: string, data: {
			type?: FolderType
			name?: string
			id?: string
			baseId?: string
			version?: number
			children?: object[]
		}): Promise<void> => {
			try {
				return await createFolderAPI(this.options, targetNodeid, data);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		updateNodeFolderStructure: async (targetNodeid: string, data: {
			type?: string
			name?: string
			id?: string
			baseId?: string
			version?: number
			children?: object[]
		}): Promise<FolderStructure> => {
			try {
				return await updateNodeFolderStructureAPI(this.options, targetNodeid, data);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		exportFolder: async (nodeId: string): Promise<FolderExport> => {
			try {
				return await exportFolderAPI(this.options, nodeId);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		importFolder: async (targetNodeid: string, data: any): Promise<{ folderNode: string }> => {
			try {
				return await importFolderAPI(this.options, targetNodeid, data);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		getNodeFolderStructure: async (targetNodeid: string): Promise<FolderStructure> => {
			try {
				return await getNodeFolderStructureAPI(this.options, targetNodeid);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		deleteFolder: async (targetNodeid: string, deleteAll?: boolean): Promise<void> => {
			try {
				return await deleteFolderAPI(this.options, targetNodeid, deleteAll);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		renameFolder: async (targetNodeid: string, newName: string): Promise<void> => {
			try {
				return await renameFolderAPI(this.options, targetNodeid, newName);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		moveFolder: async (targetId: string, nodes: { type: FolderType, id: string }[], targetPath?: string): Promise<void> => {
			try {
				return await moveFolderAPI(this.options, targetId, nodes, targetPath);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		findFolderOrRuleByAttribute: async (data: {
			name?: string
			id?: string
			baseId?: string
			ruleAlias?: string
			ruleType?: string
			tags?: string[]
			ruleState?: string
			type?: string
			version?: number
		}): Promise<Rule> => {
			try {
				return await findFolderOrRuleByAttributeAPI(this.options, data);
			} catch (e: any) {
				throw handleError(e);
			}
		},
	};

	public job = {
		start: async (ruleId: string, inputData: any, version?: string): Promise<Job> => {
			try {
				return await startJobAPI(this.options, ruleId, inputData, version);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		cancel: async (jobId: string): Promise<Job> => {
			try {
				return await cancelJobAPI(this.options, jobId);
			} catch (e: any) {
				throw handleError(e);
			}
		},
		info: async (jobId: string): Promise<Job> => {
			try {
				return await jobInfoAPI(this.options, jobId);
			} catch (e: any) {
				throw handleError(e);
			}
		},
	}

	public validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
		const hmac = crypto.createHmac('sha256', secret);
		hmac.update(JSON.stringify(payload));
		const expectedSignature = hmac.digest('hex');

		return crypto.timingSafeEqual(
			Buffer.from(signature),
			Buffer.from(expectedSignature)
		);
	}
}


