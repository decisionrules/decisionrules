import { HostEnum, SdkMode } from "../defs/enums";
import { apiMap, biMap } from "./maps";
import { DecisionRulesHost } from "../defs/models";
import { AxiosHeaders } from "axios";
import { DecisionRulesErrorException } from "../exceptions/DecisionRulesException";

export function getBaseURL(host: DecisionRulesHost, mode: SdkMode): string {
	let baseUrl: string | undefined = "";
	const urlMap: Map<HostEnum, string> = getMap(mode);
	switch(host) {
		case HostEnum.GLOBAL_CLOUD:
			baseUrl = urlMap.get(host);
			break;
		case HostEnum.REGION_EU:
			baseUrl = urlMap.get(host);
			break;
		case HostEnum.REGION_US:
			baseUrl = urlMap.get(host);
			break;
		case HostEnum.REGION_AU:
			baseUrl = urlMap.get(host);
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

export function getMap(mode: SdkMode): Map<HostEnum, string> {
	let urlMap: Map<HostEnum, string>;
	switch (mode) {
		case SdkMode.API:
			urlMap = apiMap;
			break;
		case SdkMode.AUDIT:
			urlMap = biMap;
			break;
	}
	return urlMap;
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
