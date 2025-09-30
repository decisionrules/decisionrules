import { FolderType, HostEnum, MngCategoryEnum, RuleStatus } from '../defs/enums'
import { DecisionRulesOptions, FolderExport, FolderOptions, FolderStructure, Node, Rule, RuleOptions, Version } from '../defs/models'
import { getBaseURL } from "../utils/utils";
import { doCall } from "../utils/httpClient";
import { createHeaders } from "../utils/utils";


function getCategoryUrl(host: HostEnum | string, category: MngCategoryEnum, apiPath: string[], queryParams?: any): URL {
	try {
		const baseUrl = getBaseURL(host);
		let path: string = `/api/${category}/${apiPath.filter(pathParam => pathParam !== "").join("/")}`;
		if (queryParams) {
			switch (category) {
				case MngCategoryEnum.FOLDER:
				case MngCategoryEnum.RULE:
				case MngCategoryEnum.RULE_FLOW:
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

export async function getRuleAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, version?: Version, ruleOptions?: RuleOptions): Promise<Rule> {
	try {
		const versionString = getRuleVersion(version, ruleOptions)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleIdOrAlias, versionString], ruleOptions);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateRuleStatusAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, status: RuleStatus, version: Version): Promise<Rule> {
	try {
		const versionString = getRuleVersion(version)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, ["status", ruleIdOrAlias, status, versionString]);
		const response = await doCall(url, headers, "PUT");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateRuleAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, data: any, version?: Version, ruleOptions?: RuleOptions): Promise<Rule> {
	try {
		const versionString = getRuleVersion(version, ruleOptions)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleIdOrAlias, versionString], options);
		const response = await doCall(url, headers, "PUT", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function createRuleAPI(options: DecisionRulesOptions, data: any, ruleOptions?: RuleOptions): Promise<Rule> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [], ruleOptions);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function createNewRuleVersionAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, data: any): Promise<Rule> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleIdOrAlias, "new-version"]);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteRuleAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, version?: Version, ruleOptions?: RuleOptions): Promise<void> {
	try {
		const versionString = getRuleVersion(version, ruleOptions)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, [ruleIdOrAlias, versionString], ruleOptions);
		const response = await doCall(url, headers, "DELETE");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function lockRuleAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, locked: boolean, version?: Version, ruleOptions?: RuleOptions): Promise<void> {
	try {
		const versionString = getRuleVersion(version, ruleOptions)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, ["lock", ruleIdOrAlias, versionString], ruleOptions);
		const response = await doCall(url, headers, "PATCH", { locked });
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function findDuplicatesAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, version?: Version): Promise<{ rule: Rule, duplicates: any[] }> {
	try {
		const versionString = getRuleVersion(version)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TOOLS, ["duplicates", ruleIdOrAlias, versionString]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function findDependenciesAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, version?: Version): Promise<{ rule: Rule, dependencies: any[] }> {
	try {
		const versionString = getRuleVersion(version)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TOOLS, ["dependencies", ruleIdOrAlias, versionString]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function getRulesForSpaceAPI(options: DecisionRulesOptions): Promise<Rule[]> {
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

export async function addTagsAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, tags: any, version?: Version): Promise<string[]> {
	try {
		const versionString = getRuleVersion(version)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TAGS, [ruleIdOrAlias, versionString]);
		const response = await doCall(url, headers, "PATCH", tags);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteTagsAPI(options: DecisionRulesOptions, ruleIdOrAlias: string, tags: string[], version?: Version): Promise<void> {
	try {
		const versionString = getRuleVersion(version)
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TAGS, [ruleIdOrAlias, versionString], tags);
		const response = await doCall(url, headers, "DELETE");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function createFolderAPI(options: DecisionRulesOptions, targetNodeId: string, data: any, folderOptions?: FolderOptions): Promise<void> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId], folderOptions);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateNodeFolderStructureAPI(options: DecisionRulesOptions, targetNodeId: string, data: any, folderOptions?: FolderOptions): Promise<FolderStructure> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId], folderOptions);
		const response = await doCall(url, headers, "PUT", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function exportFolderAPI(options: DecisionRulesOptions, nodeId: string, folderOptions?: FolderOptions): Promise<FolderExport> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["export", nodeId], folderOptions);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function importFolderAPI(options: DecisionRulesOptions, targetNodeId: string, data: FolderExport, folderOptions?: FolderOptions): Promise<{ folderNode: string }> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["import", targetNodeId], folderOptions);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function getNodeFolderStructureAPI(options: DecisionRulesOptions, targetNodeId?: string, folderOptions?: FolderOptions): Promise<FolderStructure> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId ?? ""], folderOptions);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteFolderAPI(options: DecisionRulesOptions, targetNodeId: string, deleteAll?: boolean, folderOptions?: FolderOptions): Promise<void> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, [targetNodeId], { deleteAll, ...folderOptions });
		const response = await doCall(url, headers, "DELETE");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function renameFolderAPI(options: DecisionRulesOptions, targetNodeId: string, name: string, folderOptions?: FolderOptions): Promise<void> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["rename", targetNodeId], folderOptions);
		const response = await doCall(url, headers, "PATCH", { name });
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function moveFolderAPI(options: DecisionRulesOptions, targetId: string, nodes: Node[], targetPath?: string): Promise<void> {
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
}): Promise<Rule | FolderStructure> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["find"]);
		const response = await doCall(url, headers, "POST", data);
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export function getRuleVersion(version?: Version, ruleOptions?: RuleOptions): string {
	if (ruleOptions && ruleOptions.version) {
		if (ruleOptions.version == "latest") {
			delete ruleOptions.version;
		}
		return ""
	}
	return version == "latest" ? "" : (version as number ?? "").toString()
}

export const testManagementSet = {
	getCategoryUrl,
	createHeaders
}
