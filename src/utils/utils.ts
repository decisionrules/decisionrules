import { HostEnum } from "../defs/enums";

export function getBaseURL(host: HostEnum | string): string {
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
