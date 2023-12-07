import { DecisionRulesOptions } from "../src/defs/models";
import { HostEnum } from "../src/defs/enums";
import { testManagementSet } from "../src/api/management"
import { MngCategoryEnum } from "../src/defs/enums";
import { AxiosHeaders } from "axios";

const opt: DecisionRulesOptions = {
	solverKey: "123abc",
	managementKey: "456def",
	businessIntKey: "789ghi",
	host: HostEnum.GLOBAL_CLOUD
};

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE, []);
	expect(f).toBeInstanceOf(URL);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE, ["123", "1"]);
	const expected = "https://api.decisionrules.io/api/rule/123/1";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE, ["123"]);
	const expected = "https://api.decisionrules.io/api/rule/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE, []);
	const expected = "https://api.decisionrules.io/api/rule/";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE, ["status", "123", "published", "1"]);
	const expected = "https://api.decisionrules.io/api/rule/status/123/published/1";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.SPACE, ["items"]);
	const expected = "https://api.decisionrules.io/api/space/items";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TAGS, ["items"]);
	const expected = "https://api.decisionrules.io/api/tags/items";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TAGS, ["items"], ["tag1","tag2"]);
	const expected = "https://api.decisionrules.io/api/tags/items/?tags=tag1,tag2";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TAGS, ["items"], ["tag1","tag2 "]);
	const expected = "https://api.decisionrules.io/api/tags/items/?tags=tag1,tag2";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TAGS, ["123", "1"]);
	const expected = "https://api.decisionrules.io/api/tags/123/1";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TAGS, ["123"]);
	const expected = "https://api.decisionrules.io/api/tags/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TAGS, ["123"]);
	const expected = "https://api.decisionrules.io/api/tags/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.FOLDER, ["export", "123"]);
	const expected = "https://api.decisionrules.io/api/folder/export/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.FOLDER, ["import", "123"]);
	const expected = "https://api.decisionrules.io/api/folder/import/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TOOLS, ["dependencies", "123", "1"]);
	const expected = "https://api.decisionrules.io/api/tools/dependencies/123/1";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TOOLS, ["dependencies", "123"]);
	const expected = "https://api.decisionrules.io/api/tools/dependencies/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TOOLS, ["duplicates", "123", "1"]);
	const expected = "https://api.decisionrules.io/api/tools/duplicates/123/1";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.TOOLS, ["duplicates", "123"]);
	const expected = "https://api.decisionrules.io/api/tools/duplicates/123";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE_FLOW, ["import"]);
	const expected = "https://api.decisionrules.io/api/rule-flow/import";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE_FLOW, ["export", "123", "1"]);
	const expected = "https://api.decisionrules.io/api/rule-flow/export/123/1";
	expect(f.href).toBe(expected);
});

test("getCategoryUrl", () => {
	const f = testManagementSet.getCategoryUrl(opt.host, MngCategoryEnum.RULE_FLOW, ["export", "123"]);
	const expected = "https://api.decisionrules.io/api/rule-flow/export/123";
	expect(f.href).toBe(expected);
});

test("createHeaders", () => {
	const f = testManagementSet.createHeaders(opt);
	expect(f).toBeInstanceOf(AxiosHeaders);
});

test("createHeaders", () => {
	const f = testManagementSet.createHeaders(opt);
	expect(f.get("Authorization")).toBe("Bearer 456def");
});

