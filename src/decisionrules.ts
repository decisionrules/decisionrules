import { solveRule } from "./api/solver";
import { DecisionRulesOptions } from "./defs/models";
import { SolverOptions } from "./defs/models";
import { SolverErrorException } from "./exceptions/SolverErrorException";

export default class DecisionRules {
	private readonly options: DecisionRulesOptions;
	constructor(options: DecisionRulesOptions) {
		this.options = options;
	}
	public async solve(ruleId: string, data: any, version?: string, solverOptions?: SolverOptions): Promise<any> {
		try {
			return await solveRule(this.options, ruleId, data, version, solverOptions);
		} catch (e: any) {
			throw new SolverErrorException(`Solver failed with status: ${e.response.status}`, e.response.data);
		}
	}
}
