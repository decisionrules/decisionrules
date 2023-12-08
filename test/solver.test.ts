import { AxiosHeaders } from "axios";
import {testPack} from "../src/api/solver"
import { HostEnum } from "../src/defs/enums";
import { DecisionRulesOptions, SolverOptions } from "../src/defs/models";

const mockOpts: SolverOptions = {
	cols: {
		includedConditionCols: ["foo","bar"],
		excludedConditionCols: ["bar","foo"]
	},
	debug: true,
	corrId: "1111",
	audit: false,
	auditTtl: "1",
	strategy: "STANDARD"
}

const opt: DecisionRulesOptions = {
	solverKey: "123abc",
	managementKey: "456def",
	businessIntKey: "789ghi",
	host: HostEnum.GLOBAL_CLOUD
};

const mockInput = {input: 1}

test("create url", () => {
	const f = testPack.createUrl(opt, "123", undefined);
	expect(f).toBeInstanceOf(URL);
});

test("create url", () => {
	const f = testPack.createUrl(opt, "123", "1");
	expect(f).toBeInstanceOf(URL);
});

test("create url", () => {
	const f = testPack.createUrl(opt, "123", "1");
	const expected = "https://api.decisionrules.io/rule/solve/123/1";
	expect(f.href).toBe(expected);
});

test("getbaseurl", () => {
	const opt: DecisionRulesOptions = {
		host: "localhost" 
	}
	expect(() => testPack.createUrl(opt, "123", "1")).toThrow("Invalid URL");
});

test("create body", () => {
	const f = testPack.createBody(mockInput, undefined);
	const expected = {data: mockInput}
	expect(f).toEqual(expected);
});

test("create body", () => {
	const f = testPack.createBody(mockInput, mockOpts);
	const expected = {data: mockInput, options: mockOpts.cols};
	expect(f).toEqual(expected);
});

test("getBaseUrl", () => {
	const f = testPack.getBaseURL(HostEnum.GLOBAL_CLOUD);
	const expected = "https://api.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL(HostEnum.REGION_EU);
	const expected = "https://eu.api.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL(HostEnum.REGION_AU);
	const expected = "https://au.api.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL(HostEnum.REGION_US);
	const expected = "https://us.api.decisionrules.io";
	expect(f).toBe(expected);
});

test("getbaseurl", () => {
	const f = testPack.getBaseURL("http://localhost");
	const expected = "http://localhost";
	expect(f).toBe(expected);
});

test("createHeaders", () => {
	const f = testPack.createHeaders(opt, mockOpts);
	expect(f).toBeInstanceOf(AxiosHeaders);
});

test("createHeaders", () => {
	const f = testPack.createHeaders(opt, mockOpts);
	const expected = JSON.stringify({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 123abc',
      'X-Debug': 'true',
      'X-Correlation-Id': '1111',
      'X-Strategy': 'STANDARD',
      'X-Audit': 'false',
      'X-Audit-Ttl': '1'
    });
	expect(JSON.stringify(f.toJSON())).toBe(expected);
});

test("createHeaders", () => {
	const mockOpts: SolverOptions = {
		cols: {
			includedConditionCols: ["foo","bar"],
			excludedConditionCols: ["bar","foo"]
		},
		debug: true,
		corrId: "1111",
		audit: false,
		auditTtl: "1"
	};
	const f = testPack.createHeaders(opt, mockOpts);
	const expected = JSON.stringify({
		'Content-Type': 'application/json',
		'Authorization': 'Bearer 123abc',
		'X-Debug': 'true',
		'X-Correlation-Id': '1111',
		'X-Strategy': 'STANDARD',
		'X-Audit': 'false',
		'X-Audit-Ttl': '1'
	});
	expect(JSON.stringify(f.toJSON())).toBe(expected);
});

test("createHeaders", () => {
	const mockOpts: SolverOptions = {
		cols: {
			includedConditionCols: ["foo","bar"],
			excludedConditionCols: ["bar","foo"]
		},
	};
	const f = testPack.createHeaders(opt, mockOpts);
	const expected = JSON.stringify({
		'Content-Type': 'application/json',
		'Authorization': 'Bearer 123abc',
		'X-Debug': 'false',
		'X-Strategy': 'STANDARD',
		'X-Audit': 'false',
	});
	expect(JSON.stringify(f.toJSON())).toBe(expected);
});
