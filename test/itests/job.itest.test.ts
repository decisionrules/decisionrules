import * as results from './itest-utils/expectedResults.itest'
import { DecisionRulesOptions, Job } from '../../src/defs/models'
import DecisionRules from '../../src/decisionrules'
import dotenv from 'dotenv'

beforeAll(() => {
    dotenv.config({ path: './env/.env' });
});

let dr: DecisionRules
let job: Job
test("env loaded", async () => {
    expect(process.env.SOLVER_KEY).toBeDefined();
    expect(process.env.MANAGEMENT_KEY).toBeDefined();
    expect(process.env.HOST).toBeDefined();
    const opt: DecisionRulesOptions = {
        solverKey: process.env.SOLVER_KEY,
        host: process.env.HOST as string,
    };
    dr = new DecisionRules(opt);
});

test("start", async () => {
    job = await dr.job.start("715c5cd8-594b-22e2-c803-65f18403e8cd", {
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
})