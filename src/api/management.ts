import { FolderType, HostEnum, MngCategoryEnum, RuleStatus } from '../defs/enums'
import { DecisionRulesOptions, FolderExport, Rule } from "../defs/models";
import { getBaseURL } from "../utils/utils";
import { doCall } from "../utils/httpClient";
import { createHeaders } from "../utils/utils";


function getCategoryUrl(host: HostEnum | string, category: MngCategoryEnum, apiPath: string[], queryParams?: any): URL {
	try {
		const baseUrl = getBaseURL(host);
		let path: string = `/api/${category}/${apiPath.filter(pathParam => pathParam !== "").join("/")}`;
		if (queryParams) {
			switch (category) {
				case MngCategoryEnum.RULE || MngCategoryEnum.RULE_FLOW:
					const entries = Object.entries(queryParams)
						.filter(([_, value]) => value !== undefined && value !== null);
					path += "?" + entries.map(([key, value]) => `${key}=${value as string}`).join("&");
					break
				case MngCategoryEnum.TAGS:
					path += `/?tags=${queryParams.toString().trim()}`
					break
			}
		}
		return new URL(path, baseUrl);
	} catch (e) {
		throw e;
	}
}

export async function getRuleAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleId, version ?? ""]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateRuleStatusAPI(options: DecisionRulesOptions, ruleId: string, status: RuleStatus, version: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, ["status", ruleId, status, version]);
		const response = await doCall(url, headers, "PUT");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateRuleAPI(options: DecisionRulesOptions, ruleId: string, data: any, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleId, version ?? ""]);
		const response = await doCall(url, headers, "PUT", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function createRuleAPI(options: DecisionRulesOptions, data: any, path?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [], path ? { path } : undefined);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function createNewRuleVersionAPI(options: DecisionRulesOptions, ruleId: string, data: any): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleId, "new-version"]);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteRuleAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleId, version ?? ""]);
		const response = await doCall(url, headers, "DELETE");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function lockRuleAPI(options: DecisionRulesOptions, ruleId: string, locked: boolean, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, ["lock", ruleId, version ?? ""]);
		const response = await doCall(url, headers, "PATCH", { locked });
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function findDuplicatesAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TOOLS, ["duplicates", ruleId, version ?? ""]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function findDependenciesAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TOOLS, ["dependencies", ruleId, version ?? ""]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function getRulesForSpaceAPI(options: DecisionRulesOptions): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.SPACE, ["items"]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function getRulesByTagsAPI(options: DecisionRulesOptions, tags: string[]): Promise<Rule[]> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TAGS, ["items"], tags);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function addTagsAPI(options: DecisionRulesOptions, ruleId: string, tags: any, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TAGS, [ruleId, version ?? ""]);
		const response = await doCall(url, headers, "PATCH", tags);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteTagsAPI(options: DecisionRulesOptions, ruleId: string, tags: string[], version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TAGS, [ruleId, version ?? ""], tags);
		const response = await doCall(url, headers, "DELETE");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function importRuleFlowAPI(options: DecisionRulesOptions, rule: any, queryParams: { newVersion?: string, overwrite?: string, version?: string }): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE_FLOW, ["import"], queryParams);
		const response = await doCall(url, headers, "POST", rule);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function exportRuleFlowAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE_FLOW, ["export", ruleId, version ?? ""]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function createFolderAPI(options: DecisionRulesOptions, targetNodeId: string, data: any): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId]);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateNodeFolderStructureAPI(options: DecisionRulesOptions, targetNodeId: string, data: any, path?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId]);
		const response = await doCall(url, headers, "PUT", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function exportFolderAPI(options: DecisionRulesOptions, nodeId: string): Promise<FolderExport> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["export", nodeId]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function importFolderAPI(options: DecisionRulesOptions, targetNodeId: string, data: FolderExport): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["import", targetNodeId]);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function getNodeFolderStructureAPI(options: DecisionRulesOptions, targetNodeId: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteFolderAPI(options: DecisionRulesOptions, targetNodeId: string, deleteAll?: boolean): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId], { deleteAll });
		const response = await doCall(url, headers, "DELETE");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function renameFolderAPI(options: DecisionRulesOptions, targetNodeId: string, name: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["rename", targetNodeId]);
		const response = await doCall(url, headers, "PATCH", { name });
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function moveFolderAPI(options: DecisionRulesOptions, targetId: string, nodes: { type: FolderType, id: string }[], targetPath?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["move"]);
		const response = await doCall(url, headers, "PUT", targetPath ? { targetPath, nodes } : { targetId, nodes });
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function findFolderOrRuleByAttributeAPI(options: DecisionRulesOptions, data: {
	name?: string
	id?: string
	baseId?: string
	ruleAlias?: string
	ruleType?: string
	tags?: string[]
	ruleState?: string
	type?: string
	version?: number
}): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["find"]);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}


export const testManagementSet = {
	getCategoryUrl,
	createHeaders
}
