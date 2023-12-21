# DecisionRules

![Jest CI](https://github.com/decisionrules/decisionrules/actions/workflows/main.yml/badge.svg)

[Decisionrules.io](https://decisionrules.io) library that allows you to integrate DecisionRules Solver, Management and Business Intelligence API to you application as easily as possible.

# Table of contents
1. [Instalation](#instalation)
2. [Usage and examples](#example)
3. [API](#api)

<a name="instalation"></a>
# Instalation

```
npm i @decisionrules/decisionrules
```
<a name="example"></a>
# Usage and example

You can start using library by defining DecisionRules instance and providing valid DecisionRulesOptions.

**Init example**

```javascript
import DecisionRules from "@decisionrules/decisionrules"

const opt = {
  solverKey: "solver_key_string",
  managementKey: "_management_key_string",
  businessIntKey: "business-intelligence_key_string",
  host: HostEnum | "domain",
  bi_host: HostEnum | "bi_domain"
};

const dr = new DecisionRules(opt);
```

**Solver API call example**

Calls can be done with solve method on DecisionRules class that returns a Promise.

```javascript

const solverOpt = {
  cols: {
    includedConditionCols: ["c1", "c2"],
    excludedConditionCols: ["c3", "c4"]
  },
  debug: false,
  corrId: "mycorrId",
  strategy: STANDARD,
  audit: true,
  auditTtl: "14"
}

const result = await dr.solve(ruleId, version, solverOpt);
```

**Management API example**

Management API can be used through management object on DecisionRules class. All methods return a Promise

```javascript
const rule = await dr.management.getRule(ruleId, version);
```

**Business Intelligence API exapmle**

```javascript
const auditLogsOptions = {
  page: "10",
  page_size: "5",
  limit: "10",
  corrIds: ["mycorId"],
  rules: ["myruleId"],
  solver_keys: ["1234abcd],
  tags: ["t1",t2],
  date_gte: "2023-02",
  date_lte: "2023-02",
  order: "asc",
  include_debug: "false,
  status_code: "200"
}

const logs = await dr.bi.getAuditLogs(auditLogsOptions);
```
<a name="api"></a>
# API

All methods described below are exposed on DecisionRules class.

Methods throws DecisionRulesErrorException if something went wrong down on API call or general Error class if library encountered some sort of error.

## Solver API

**DecisionRules.solve**

```javascript
const result = await dr.solve(ruleId, version, options);
// => Promise<any>
```
Arguments:

| **arg** 	| **type**      	| **optional** 	|
|---------	|---------------	|--------------	|
| ruleId  	| string        	| no           	|
| version 	| string        	| yes          	|
| options 	| SolverOptions 	| yes          	|

**SolverOptions**

Object that defines solver behavior if needed.

| **args**                   	| **type** 	| **optional** 	|
|----------------------------	|----------	|--------------	|
| debug                      	| boolean  	| yes          	|
| corrId                     	| string   	| yes          	|
| strategy                   	| string   	| yes          	|
| audit                      	| string   	| yes          	|
| auditTtl                   	| string   	| yes          	|
| cols                       	| object   	| yes          	|
| cols.includedConditionCols 	| string[] 	| yes          	|
| cols.excludedConditionCols 	| string[] 	| yes          	|

## Management API

**DecisionRules.management.getRule**

Gets all of the infromation stored about the rule, including its content, version or input and output schemas. 
If the version is specified, gets the version irrespective of the rule status.
If the version is not specified, gets the latest published version.

```javascript

const result = await dr.management.getRule(ruleId, version);
// => Promise<any>
```

Arguments:

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.updateRuleStatus**

Changes rule status from pending to published and vice versa. If the version is not specified, the latest version will be used.

```javascript

const result = await dr.management.updateRuleStatus(ruleId, status, version)
// => Promise<any>
```
| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| status   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.updateRule**

Changes the rule according to the body of the request.

Note that there are a few attributes of the rule that cannot be updated by the PUT endpoint. Namely, you cannot use PUT to change the rule ID, version and rule alias. Also, you cannot change the date of last update, since it gets updated automatically.

```javascript

const result = await dr.management.updateRule(ruleId, rule, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| rule     	| any      	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.createRule**

Creates rule based on the body of the request. The body must be formatted according to the example below.

```javascript

const result = await dr.management.createRule(rule);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| rule     	| any      	| no           	|

**DecisionRules.management.deleteRule**

Deletes the rule.

```javascript

const result = await dr.management.deleteRule(ruleId, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.getRulesForSpace**

Gets all types of rules and ruleflows in space

The desired space is determined by Management API Key. This endpoint also gets set of rules used in every ruleflow.

```javascript

const result = await dr.management.getRulesForSpace();
// => Promise<any>
```

**DecisionRules.management.getTags**

This method allows you to get all rules/rule flows with certain tags. Desired space is derived from Management API Key.

```javascript

const result = await dr.management.getTags(tags);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| tags     	| string[] 	| no           	|

**DecisionRules.management.updateTags**

If you specify the version, the tag/tags will be added to the specified version. If the version is not specified, the tag/tags will be added to all the versions with given ID.

```javascript

const result = await dr.management.updateTags(ruleId, tags, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| tags     	| any     	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.deleteTags**

If you specify the version, the tag/tags will be deleted from the specified version. If the version is not specified, the tag/tags will be deleted from all the versions with given ID.

```javascript

const result = await dr.management.deleteTags(ruleId, tags, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| tags     	| string[] 	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.exportFolder**

Export folder with all rules. If no nodeId is set, then will be exported root directory.

```javascript

const result = await dr.management.exportFolder(nodeId);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| nodeId   	| string   	| no           	|

**DecisionRules.management.importFolder**

Import folder with all rules into specific folder. If no targetNodeId is set, then will be imported into root directory.

```javascript

const result = await dr.management.importFolder(targetNodeId);
// => Promise<any>
```

| **args**     	| **type** 	| **optional** 	|
|--------------	|----------	|--------------	|
| targetNodeId 	| string   	| no           	|
| data        	| any      	| no           	|

**DecisionRules.management.findDuplicates**

Look for decision table by id and optionally version. If the decision table is found, it is returned together with an array of duplicates.

```javascript

const result = await dr.management.findDuplicates(ruleId, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.findDependencies**

Look for dependencies by id or alias and optionally version. If the rule is found, it is returned together with an array of dependencies.

```javascript

const result = await dr.management.findDependencies(ruleId, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.lockRule**

Locks rule for editation. For input data refer to our docs.

```javascript
const result = await dr.management.lockRule(ruleId, data, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleId   	| string   	| no           	|
| data     	| any   	  | no           	|
| version  	| string   	| yes          	|

# Business Intelligence API

**DecisionRules.bi.getAuditLogs**

This function allows you to fetch audit logs from your rule solver, including metadata of the solver run as well as the input and output data.

```javascript

const result = await dr.bi.getAuditLogs(auditLogsOpt);
// => Promise<any>
```

| **args**     	| **type**              	| **optional** 	|
|--------------	|-----------------------	|--------------	|
| auditLogsOpt 	| DecisionRulesAuditOpt 	| no           	|

**DecisionRules.bi.deleteAuditLogs**

This function allows you to delete audit logs from the database when you no longer need them.

Not all atributes from DecisionRulesAuditOpt are valid for deleting audit logs. Please refer to our docs for more info.

```javascript
const result = await dr.bi.deleteAuditLogs(auditLogsOpt);
// => Promise<any>
```

| **args**     	| **type**              	| **optional** 	|
|--------------	|-----------------------	|--------------	|
| auditLogsOpt 	| DecisionRulesAuditOpt 	| no           	|

**DecisionRulesAuditOpt**

Object that defined business intelligence query behavior.

| **args**      	| **type** 	| **optional** 	|
|---------------	|----------	|--------------	|
| page          	| string   	| yes          	|
| page_size     	| string   	| yes          	|
| limit         	| string   	| yes          	|
| corrIds       	| string[] 	| yes          	|
| rules         	| string[] 	| yes          	|
| solver_keys   	| string[] 	| yes          	|
| tags          	| string[] 	| yes          	|
| date_gte      	| string   	| yes          	|
| date_lte      	| string   	| yes          	|
| order         	| string   	| yes          	|
| include_debug 	| string   	| yes          	|
| status_code   	| string   	| yes          	|
