import dotenv from "dotenv";
import DecisionRules from '../../src/decisionrules'
import { DecisionRulesOptions, FolderExport, Rule } from '../../src/defs/models'
import { FolderType, RuleStatus } from '../../src/defs/enums'
import * as results from './itest-utils/expectedResults.itest'
import * as rules from './itest-utils/rules.itest'

beforeAll(() => {
    dotenv.config({ path: './env/.env' });
});

let dr: DecisionRules
let rule: Rule
let folder
let folder2
let folderExport: FolderExport

test("env loaded", async () => {
    expect(process.env.SOLVER_KEY).toBeDefined();
    expect(process.env.MANAGEMENT_KEY).toBeDefined();
    expect(process.env.HOST).toBeDefined();
    const opt: DecisionRulesOptions = {
        solverKey: process.env.SOLVER_KEY,
        managementKey: process.env.MANAGEMENT_KEY,
        host: process.env.HOST as string,
    };
    dr = new DecisionRules(opt);
});

test("createFolder", async () => {
    const result = await dr.management.createFolder("root", { type: FolderType.FOLDER, name: "Folder Name", children: [] })
    expect(result).toEqual(results.createFolderResult)
})
test("getFolderStructure", async () => {
    const result = await dr.management.getFolderStructure("root")
    expect(result).toMatchObject(results.getFolderStructureResult)
    folder = result.children.find(item => item.name == 'Folder Name')
})
test("deleteFolder", async () => {
    const result = await dr.management.deleteFolder(folder!.id, true)
    expect(result).toEqual(results.deleteFolderResult)
})
test("createFolderByPath", async () => {
    const result = await dr.management.createFolderByPath("/", { type: FolderType.FOLDER, name: "Folder Name", children: [] })
    expect(result).toEqual(results.createFolderByPathResult)
})
test("getFolderStructure", async () => {
    const result = await dr.management.getFolderStructure("root")
    expect(result).toMatchObject(results.getFolderStructureResult1)
    folder = result.children.find(item => item.name == 'Folder Name')
})
test("createRule", async () => {
    rule = await dr.management.createRule(rules.rule, "/Folder Name")
    expect(rule).toMatchObject(results.createRuleResult)
})
test("updateRule", async () => {
    rule = await dr.management.updateRule(rule.ruleId, rules.updateRule)
    expect(rule).toMatchObject(results.updateRuleResult)
})
test("updateRuleStatus", async () => {
    rule = await dr.management.updateRuleStatus(rule.ruleId, RuleStatus.PENDING, 1)
    expect(rule).toMatchObject(results.updateRuleStatusResult)
})
test("lockRule", async () => {
    const result = await dr.management.lockRule(rule.ruleId, true)
    expect(result).toEqual(results.lockRuleResult)
})
test("lockRule", async () => {
    const result = await dr.management.lockRule(rule.ruleId, false)
    expect(result).toEqual(results.lockRuleResult1)
})
test("lockRuleByPath", async () => {
    const result = await dr.management.lockRuleByPath("/Folder Name/" + rule.name, true, 1)
    expect(result).toEqual(results.lockRuleByPathResult)
})
test("lockRuleByPath", async () => {
    const result = await dr.management.lockRuleByPath("/Folder Name/" + rule.name, false, 1)
    expect(result).toEqual(results.lockRuleByPathResult1)
})
test("createNewRuleVersion", async () => {
    rule = await dr.management.createNewRuleVersion(rule.ruleId, rule)
    expect(rule).toMatchObject(results.createNewRuleVersionResult)
})
test("getRule", async () => {
    const result = await dr.management.getRule(rule.ruleId, "1")
    expect(result).toMatchObject(results.getRuleResult)
})
test("getRule", async () => {
    const result = await dr.management.getRule(rule.ruleId, "2")
    expect(result).toMatchObject(results.getRuleResult1)
})
test("getRuleByPath", async () => {
    const result = await dr.management.getRuleByPath("/Folder Name/" + rule.name, 1)
    expect(result).toMatchObject(results.getRuleByPathResult)
})
test("getRuleByPath", async () => {
    const result = await dr.management.getRuleByPath("/Folder Name/" + rule.name, 2)
    expect(result).toMatchObject(results.getRuleByPathResult1)
})
test("exportFolder", async () => {
    folderExport = await dr.management.exportFolder(folder!.id)
    expect(folderExport).toMatchObject(results.exportFolderResult)
})
test("deleteRule", async () => {
    const result = await dr.management.deleteRule(rule.ruleId, 1)
    expect(result).toEqual(results.deleteRuleResult)
})
test("deleteRuleByPath", async () => {
    const result = await dr.management.deleteRuleByPath("/Folder Name/" + rule.name, 2)
    expect(result).toEqual(results.deleteFolderByPathResult)
})
test("getRulesForSpace", async () => {
    const result = await dr.management.getRulesForSpace()
    expect(result).toMatchObject(results.getRulesForSpaceResult)
})
test("renameFolder", async () => {
    const result = await dr.management.renameFolder(folder!.id, "New Name")
    expect(result).toEqual(results.renameFolderResult)
})
test("importFolder", async () => {
    const result = await dr.management.importFolder("root", folderExport)
    expect(result).toHaveProperty(results.importFolderResult)
})
test("getFolderStructure", async () => {
    const result = await dr.management.getFolderStructure()
    expect(result).toMatchObject(results.getFolderStructureResult2)
    folder2 = result.children.find(item => item.name == 'Folder Name')
})
test("getFolderStructure", async () => {
    const result = await dr.management.getFolderStructure(folder2!.id)
    expect(result).toMatchObject(results.getFolderStructureResult3)
})
test("moveFolder", async () => {
    const result = await dr.management.moveFolder(folder!.id, [{ type: FolderType.FOLDER, id: folder2!.id }], "/New Name")
    expect(result).toEqual(results.moveFolderResult)
})
test("findFolderOrRuleByAttribute", async () => {
    const result = await dr.management.findFolderOrRuleByAttribute({ type: "RULE" })
    expect(result).toMatchObject(results.findFolderOrRuleByAttributeResult)
})
test("deleteFolderByPath", async () => {
    const result = await dr.management.deleteFolderByPath("/New Name", true)
    expect(result).toEqual(results.deleteFolderByPathResult)
})