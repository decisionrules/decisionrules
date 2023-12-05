import { DecisionRulesOptions } from "../defs/models";
import { HostEnum } from "../defs/enums";
import { SolverOptions } from "../defs/models";
import { AxiosHeaders } from "axios";
import { doCall } from "../utils/httpClient";

export async function solveRule(options: DecisionRulesOptions, ruleId: string, input: any, version?: string, solverOptions?: SolverOptions): Promise<any> {
	try {
		const url = createUrl(options, ruleId, version);
		const body = createBody(input, solverOptions);
		const headers = createHeaders(options, solverOptions);
		const response = await doCall(url, headers, "POST", body);
		return response.data;
	} catch (e:any) {
		throw e;
	}
}

function createBody(input: any, solverOptions: SolverOptions | undefined): any {
	const body: {data: any, options?: {[key:string]: string[]}} = {
		data: input
	}
	if (solverOptions?.cols) {
		body.options = solverOptions.cols;
	}
	return body;
}

function createUrl(options: DecisionRulesOptions, ruleId: string, version: string | undefined): URL {
	let url: string = `/rule/solve/${ruleId}/`;
	if (version) {
		url += version;	
	}
	try {
		return new URL(url, getBaseURL(options.host));
	} catch (e) {
		throw e;
	}
}

function getBaseURL(host: HostEnum | string): string {
	let baseUrl: string = "";
	switch(host) {
		case HostEnum.GLOBAL_CLOUD:
			baseUrl = "https://api.decisionrules.io";
			break;
		case HostEnum.REGION_EU:
			baseUrl = "https://eu.api.decisionrules.io";
			break;
		case HostEnum.REGION_US:
			baseUrl = "https://us.api.decisionrules.io";
			break;
		case HostEnum.REGION_AU:
			baseUrl = "https://au.api.decisionrules.io";
			break;
		default:
			baseUrl = host;
			break;
	}
	return baseUrl;
}

function createHeaders(options: DecisionRulesOptions, solverOptions: SolverOptions | undefined): AxiosHeaders {
	const headers = new AxiosHeaders();
	try {
		headers.set("Content-Type", "application/json");
		if (options?.solverKey) {
			headers.set("Authorization", `Bearer ${options.solverKey}`);
		} else {
			throw Error("Solver key missing.");
		}
		headers.set("X-Debug", new String(solverOptions?.debug ?? false).valueOf());
		if (solverOptions?.corrId) {
			headers.set("X-Correlation-Id", solverOptions.corrId);
		}
		headers.set("X-Strategy", solverOptions?.strategy ?? "STANDARD");
		headers.set("X-Audit", new String(solverOptions?.audit ?? false).valueOf());
		if (solverOptions?.auditTtl) {
			headers.set("X-Audit-Ttl", solverOptions.auditTtl.toString());
		}
		return headers;
	}catch (e) {
		throw e;
	}
}

export const testPack = {
	createUrl,
	createBody,
	createHeaders,
	getBaseURL
}
