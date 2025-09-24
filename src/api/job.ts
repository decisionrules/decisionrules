import { HostEnum } from "../defs/enums";
import { DecisionRulesOptions, Version } from '../defs/models'
import { doCall } from "../utils/httpClient";
import { createHeaders, getBaseURL } from "../utils/utils";


function getCategoryUrl(host: HostEnum | string, apiPath: string[]): URL {
    try {
        const baseUrl = getBaseURL(host);
        let path: string = `/job/${apiPath.filter(pathParam => pathParam !== "").join("/")}`;
        return new URL(path, baseUrl);
    } catch (e) {
        throw e;
    }
}

export async function startJobAPI(options: DecisionRulesOptions, ruleId: string, inputData: any, version?: Version): Promise<any> {
    try {
        const versionString = version == "latest" ? "" : (version as number).toString()
        const headers = createHeaders(options.solverKey);
        const url = getCategoryUrl(options.host, ["start", ruleId, versionString]);
        const response = await doCall(url, headers, "POST", inputData);
        return response.data;
    } catch (e: any) {
        throw e;
    }
}

export async function cancelJobAPI(options: DecisionRulesOptions, jobId: string): Promise<any> {
    try {
        const headers = createHeaders(options.solverKey);
        const url = getCategoryUrl(options.host, ["cancel", jobId]);
        const response = await doCall(url, headers, "POST");
        return response.data;
    } catch (e: any) {
        throw e;
    }
}

export async function jobInfoAPI(options: DecisionRulesOptions, jobId: string): Promise<any> {
    try {
        const headers = createHeaders(options.solverKey);
        const url = getCategoryUrl(options.host, [jobId]);
        const response = await doCall(url, headers, "GET");
        return response.data;
    } catch (e: any) {
        throw e;
    }
}

export const testJobSet = {
    getCategoryUrl,
}
