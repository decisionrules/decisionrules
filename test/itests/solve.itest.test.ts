import dotenv from 'dotenv'
import { DecisionRulesOptions } from '../../src/defs/models'
import DecisionRules from '../../src/decisionrules'
import * as results from './itest-utils/expectedResults.itest'

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

test('createFolder', async () => {
    const result = await dr.solve('38125870-bfa9-b8a3-76d5-e474ee3f9a56', {
        'typeOfMilestone': '24 21 20 17 16 13 12 9',
        'deliveryOperator': 'DHL'
    })
    expect(result).toEqual(results.solve)
})