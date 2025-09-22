import { DecisionRulesOptions } from "../src/defs/models";
import { HostEnum } from "../src/defs/enums";
import { testJobSet } from '../src/api/job'

const opt: DecisionRulesOptions = {
    solverKey: "123abc",
    managementKey: "456def",
    businessIntKey: "789ghi",
    host: HostEnum.GLOBAL_CLOUD
};

test("testJobSet.getCategoryUrl", () => {
    const f = testJobSet.getCategoryUrl(opt.host, []);
    expect(f).toBeInstanceOf(URL);
});

test("testJobSet.getCategoryUrl", () => {
    const f = testJobSet.getCategoryUrl(opt.host, ["start", "123", "1"]);
    const expected = "https://api.decisionrules.io/job/start/123/1";
    expect(f.href).toBe(expected);
});

test("testJobSet.getCategoryUrl", () => {
    const f = testJobSet.getCategoryUrl(opt.host, ["start", "123"]);
    const expected = "https://api.decisionrules.io/job/start/123";
    expect(f.href).toBe(expected);
});

test("testJobSet.getCategoryUrl", () => {
    const f = testJobSet.getCategoryUrl(opt.host, ["cancel", "123"]);
    const expected = "https://api.decisionrules.io/job/cancel/123";
    expect(f.href).toBe(expected);
});

test("testJobSet.getCategoryUrl", () => {
    const f = testJobSet.getCategoryUrl(opt.host, ["123"]);
    const expected = "https://api.decisionrules.io/job/123";
    expect(f.href).toBe(expected);
});
