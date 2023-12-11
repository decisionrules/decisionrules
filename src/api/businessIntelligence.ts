import { SdkMode } from "../defs/enums";
import { DecisionRulesAuditOpt, DecisionRulesOptions } from "../defs/models";
import { DecisionRulesHost } from "../defs/models";
import { createHeaders } from "../utils/utils";
import { getBaseURL } from "../utils/utils";
import { doCall } from "../utils/httpClient";

const MODE = SdkMode.AUDIT;

function createUrl(host: DecisionRulesHost, auditOpt: DecisionRulesAuditOpt): URL {
	const baseURL = getBaseURL(host, MODE);
	let optString: string = "/audit/?";
	for (let [opt, value] of Object.entries(auditOpt)) {
		if (Array.isArray(value)) {
			value = value.join();
		}
		optString += `${opt}=${value}&`
	}
	try {
		return new URL(optString, baseURL);
	} catch (e: any) {
		throw e;
	}
}

export async function getAuditLogsAPI(options: DecisionRulesOptions, auditOpt: DecisionRulesAuditOpt): Promise<any> {
	try {
		const headers = createHeaders(options.businessIntKey);
		const url = createUrl(options.host, auditOpt);
		const response = await doCall(url, headers, "GET");	
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export async function deleteAuditLogsAPI(options: DecisionRulesOptions, auditOpt: DecisionRulesAuditOpt): Promise<any> {
	try {
		const headers = createHeaders(options.businessIntKey);
		const url = createUrl(options.host, auditOpt);
		const response = await doCall(url, headers, "DELETE");	
		return response.data;
	} catch (e: any) {
		throw e;
	}
}

export const testPack = {
	createHeaders,
	getBaseURL,
	createUrl
}
