import {testPack} from "../src/api/businessIntelligence";
import { SdkMode, HostEnum } from "../src/defs/enums";
import { DecisionRulesAuditOpt, DecisionRulesOptions } from "../src/defs/models";

const opt: DecisionRulesOptions = {
	solverKey: "123abc",
	managementKey: "456def",
	businessIntKey: "789ghi",
	host: HostEnum.GLOBAL_CLOUD
};

const auditOpt: DecisionRulesAuditOpt = {
	page: "10",
	page_size: "5",
	limit: "1",
	corrIds: ["123","456"],
	rules:  ["321","654"],
	solver_keys: ["s1", "s2"],
	tags: ["t1","t2"],
	date_gte: "2013-02",
	date_lte: "2023-02",
	order: "asc",
	include_debug: "true",
	status_code: "200"
}


test("getBaseUrl", () => {
	const f = testPack.getBaseURL(HostEnum.GLOBAL_CLOUD, SdkMode.AUDIT);
	const expected = "https://bi.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL(HostEnum.REGION_EU, SdkMode.AUDIT);
	const expected = "https://eu.bi.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL(HostEnum.REGION_AU, SdkMode.AUDIT);
	const expected = "https://au.bi.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL(HostEnum.REGION_US, SdkMode.AUDIT);
	const expected = "https://us.bi.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL("http://localhost", SdkMode.AUDIT);
	const expected = "http://localhost";
	expect(f).toBe(expected);
});

test("createHeader", () => {
	const f = testPack.createHeaders(opt.businessIntKey);
	expect(f.get("Authorization")).toBe("Bearer 789ghi");
});

test("createUrl", () => {
	const f = testPack.createUrl(opt.host, auditOpt);
	const expected = "https://bi.decisionrules.io/audit/?page=10&page_size=5&limit=1&corrIds=123,456&rules=321,654&solver_keys=s1,s2&tags=t1,t2&date_gte=2013-02&date_lte=2023-02&order=asc&include_debug=true&status_code=200&";
	expect(f.href).toBe(expected);
});
