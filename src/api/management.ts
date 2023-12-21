import { HostEnum, MngCategoryEnum, SdkMode } from "../defs/enums";
import { DecisionRulesOptions } from "../defs/models";
import { getBaseURL } from "../utils/utils";
import { doCall } from "../utils/httpClient";
import { createHeaders } from "../utils/utils";

const MODE = SdkMode.API;

function getCategoryUrl(host: HostEnum | string, category: MngCategoryEnum, apiPath: string[], queryParams?: string[]): URL {
	try {
		const baseUrl = getBaseURL(host, MODE);
		let path: string = `/api/${category}/${apiPath.filter(pathParam => pathParam !== "").join("/")}`;
		if (queryParams) {
			path += `/?tags=${queryParams.toString().trim()}`
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

export async function updateRuleStatusAPI(options: DecisionRulesOptions, ruleId: string, status: string, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, ["status", ruleId, status, version ?? ""]);
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

export async function createRuleAPI(options: DecisionRulesOptions, data: any): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, []);
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

export async function getTagsAPI(options: DecisionRulesOptions, tags: string[]): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.TAGS, ["items"], tags);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function updateTagsAPI(options: DecisionRulesOptions, ruleId: string, tags: any, version?: string): Promise<any> {
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

export async function exportFolderAPI(options: DecisionRulesOptions, nodeId: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["export", nodeId]);
		const response = await doCall(url, headers, "GET");
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function importFolderAPI(options: DecisionRulesOptions, targetNodeId: string, data: any): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.FOLDER, ["import", targetNodeId]);
		const response = await doCall(url, headers, "POST", data);
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

export async function lockRuleAPI(options: DecisionRulesOptions, ruleId: string, data: any, version?: string): Promise<any> {
	try {
		const headers = createHeaders(options.managementKey);
		const url = getCategoryUrl(options.host, MngCategoryEnum.RULE, ["lock", ruleId, version ?? ""]);
		const response = await doCall(url, headers, "PATCH", data);
		return response.data;
	} catch (e:any) {
		throw e;
	}
}

export const testManagementSet = {
	getCategoryUrl,
	createHeaders
}
