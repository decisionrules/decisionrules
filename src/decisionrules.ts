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

	public management = {
		getRule: this.getRule,
		updateRuleStatus: this.updateRuleStatus,
		updateRule: this.updateRule,
		createRule:this.createRule,
		deleteRule: this.deleteRule,
		getRulesForSpace: this.getRulesForSpace,
		getRuleTags: this.getRuleTags,
		updateRuleTags: this.updateRuleTags,
		deleteRuleTags: this.deleteRuleTags,
		getRuleFLow: this.getRuleFLow,
		importRuleFlow: this.importRuleFlow,
		getFolder: this.getFolder,
		importFolder: this.importFolder,
		getDuplicates: this.getDuplicates,
		getDependecies: this.getDependencies
	};

	private async getRule(ruleId: string, version?: string) {

	}
	private async updateRuleStatus(ruleId: string, status: string, version?: string) {

	}
	private async updateRule(ruleId: string, version?: string) {

	}
	private async createRule(rule: any) {

	}
	private async deleteRule(ruleId: string, version?: string) {

	}
	private async getRulesForSpace() {

	}
	private async getRuleTags(tags: string[]) {

	}
	private async updateRuleTags(ruleId: string, version?: string) {}
	private async deleteRuleTags(ruleId: string, version?: string) {}
	private async getRuleFLow() {}
	private async importRuleFlow() {}
	private async getFolder(nodeId: string) {}
	private async importFolder(nodeId: string) {}
	private async getDuplicates(ruleId: string, version?: string) {}
	private async getDependencies(ruleId: string, version?: string) {}
}
