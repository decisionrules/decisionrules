import { AxiosHeaders } from "axios";
import { HostEnum, MngCategoryEnum } from "../defs/enums";
import { DecisionRulesOptions } from "../defs/models";
import { getBaseURL } from "../utils/utils";

function getCategoryUrl(host: HostEnum | string, category: MngCategoryEnum, apiPath: string[], queryParams?: string[]): URL {
	try {
		const baseUrl = getBaseURL(host);
		let path: string = `/api/${category}/${apiPath.join("/")}`;
		if (queryParams) {
			path += `/?tags=${queryParams.toString().trim()}`
		}
		return new URL(path, baseUrl);
	} catch (e) {
		throw e;
	}
}

function createHeaders(options: DecisionRulesOptions): AxiosHeaders {
	try {
		const headers = new AxiosHeaders();
		headers.set("Content-Type", "application/json");
		headers.set("Authorization", `Bearer ${options.managementKey}`);
		return headers;
	} catch (e) {
		throw e;
	}
}

export async function getRuleAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {

}

export async function updateRuleStatusAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {

}

export async function updateRuleAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {

}

export async function createRuleAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {

}

export async function deleteRuleAPI(options: DecisionRulesOptions, ruleId: string, version?: string): Promise<any> {

}

export const testManagementSet = {
	getCategoryUrl,
	createHeaders
}
