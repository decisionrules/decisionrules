import axios, { AxiosHeaders, AxiosResponse } from "axios";

export async function doPostCall(url: URL, body: any, headers: AxiosHeaders): Promise<AxiosResponse> {
	try {
		return axios.post(url.href, body, {headers});
	} catch (e) {
		throw e;
	}
}
