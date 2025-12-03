import dotenv from 'dotenv'
import { DecisionRulesOptions } from '../../src/defs/models'
import DecisionRules from '../../src/decisionrules'
import * as results from './itest-utils/expectedResults.itest'
import { LookupMethodOptions } from '../../src/defs/enums'
import { lookupTable } from './itest-utils/rules.itest'

beforeAll(() => {
    dotenv.config({ path: './env/.env' })
})

let dr: DecisionRules

test('env loaded', async () => {
    expect(process.env.SOLVER_KEY).toBeDefined()
    expect(process.env.MANAGEMENT_KEY).toBeDefined()
    expect(process.env.HOST).toBeDefined()
    const opt: DecisionRulesOptions = {
        solverKey: process.env.SOLVER_KEY,
        managementKey: process.env.MANAGEMENT_KEY,
        host: process.env.HOST as string,
    }
    dr = new DecisionRules(opt)
})

test('Solve Lookup Table', async () => {
    const rule = await dr.management.createRule(lookupTable)
    
    const requestBody = {
        "primaryKey": "Door hinge",
        "outputColumn": {},
        "method": {}
    }

    const result = await dr.solve(
        rule.ruleId,
        requestBody,
        1,
        { lookupMethod: LookupMethodOptions.LOOKUP_EXISTS }
    )
    expect(result).toEqual(results.solve)
    await dr.management.deleteRule(rule.ruleId)
})