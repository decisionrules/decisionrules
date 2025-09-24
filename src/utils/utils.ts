import { HostEnum } from "../defs/enums";
import { DecisionRulesHost } from "../defs/models";
import { AxiosHeaders } from "axios";
import { DecisionRulesErrorException } from "../exceptions/DecisionRulesException";

export function getBaseURL(host: DecisionRulesHost): string {
	let baseUrl: string | undefined = "";
	switch (host) {
		case HostEnum.GLOBAL_CLOUD:
			baseUrl = "https://api.decisionrules.io";
			break;
		case HostEnum.REGION_EU:
			baseUrl = "https://eu.api.decisionrules.io";
			break;
		case HostEnum.REGION_US:
			baseUrl = "https://au.api.decisionrules.io";
			break;
		case HostEnum.REGION_AU:
			baseUrl = "https://us.api.decisionrules.io";
			break;
		default:
			baseUrl = host;
			break;
	}

	if (!baseUrl) {
		throw Error("Failed to get base URL");
	}
	return baseUrl;
}

export function createHeaders(key: string | undefined): AxiosHeaders {
	try {
		const headers = new AxiosHeaders();
		headers.set("Content-Type", "application/json");
		if (key) {
			headers.set("Authorization", `Bearer ${key}`);
		}
		return headers;
	} catch (e) {
		throw e;
	}
}

export function handleError(e: any): DecisionRulesErrorException {
	if (!e?.response) {
		throw new DecisionRulesErrorException(e.message, e.stack)
	}
	throw new DecisionRulesErrorException(`Call ended with status:${e.response.status}`, e.response.data);
}
