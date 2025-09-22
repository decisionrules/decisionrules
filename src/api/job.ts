import { HostEnum, SdkMode } from "../defs/enums";
import { DecisionRulesOptions } from "../defs/models";
import { doCall } from "../utils/httpClient";
import { createHeaders, getBaseURL } from "../utils/utils";

const MODE = SdkMode.API;

function getCategoryUrl(host: HostEnum | string, apiPath: string[]): URL {
    try {
        const baseUrl = getBaseURL(host, MODE);
        let path: string = `/job/${apiPath.filter(pathParam => pathParam !== "").join("/")}`;
        return new URL(path, baseUrl);
    } catch (e) {
        throw e;
    }
}

export async function startJobAPI(options: DecisionRulesOptions, ruleId: string, inputData: any, version?: string): Promise<any> {
    try {
        const headers = createHeaders(options.solverKey);
        const url = getCategoryUrl(options.host, ["start", ruleId, version ?? ""]);
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
