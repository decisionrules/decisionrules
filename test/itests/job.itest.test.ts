import * as results from './itest-utils/expectedResults.itest'
import { DecisionRulesOptions, Job } from '../../src/defs/models'
import DecisionRules from '../../src/decisionrules'
import dotenv from 'dotenv'
import { updateRule } from './itest-utils/rules.itest';

beforeAll(() => {
    dotenv.config({ path: './env/.env' });
});

let dr: DecisionRules
let job: Job
let ruleId: string
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

test("start", async () => {
    const rule = await dr.management.createRule(updateRule)
    ruleId = rule.ruleId

    job = await dr.job.start(ruleId, {
        "input": {}
    })
    expect(job).toMatchObject(results.start)
})
test("info", async () => {
    await new Promise(resolve =>
        setTimeout(() => {
            resolve(undefined);
        }, 2000)
    );
    const result = await dr.job.info(job.jobId)
    expect(result).toMatchObject(results.info)
})
test("cancel", async () => {
    const result = await dr.job.cancel(job.jobId)
    expect(result).toMatchObject(results.cancel)
    await dr.management.deleteRule(ruleId)
})