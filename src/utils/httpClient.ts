import axios, { AxiosHeaders, AxiosResponse } from "axios";

export async function doCall(url: URL, headers: AxiosHeaders, method: string, data?: any): Promise<AxiosResponse> {
	try {
		const call = getMethod(method);
		if (method === "GET" || method === "DELETE") {
			return call(url.href, {headers});
		}
		return call(url.href, data, {headers});
	} catch (e) {
		throw e;
	}
}

function getMethod(method: string) {
	switch(method) {
		case "POST":
			return axios.post;
		case "PUT":
			return axios.put;
		case "PATCH":
			return axios.patch;
		case "DELETE":
			return axios.delete;
		case "GET":
		default:
			return axios.get;
	}
}
