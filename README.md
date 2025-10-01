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

Or download tgz file and install from release page.

<a name="example"></a>
# Usage and example

You can start using library by defining DecisionRules instance and providing valid DecisionRulesOptions.

**Init example**

```javascript
import DecisionRules from "@decisionrules/decisionrules"

const opt = {
  solverKey: "solver_key_string",
  managementKey: "_management_key_string",
  host: "domain",
};

const dr = new DecisionRules(opt);
```

**Solver API call example**

Calls can be done with solve method on DecisionRules class that returns a Promise.

```javascript

const inputData = {
    "tripDetails": {
        "origin": "ATL",
        "destination": "DXB",
    }
}

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

const result = await dr.solve(ruleIdOrAlias, inputData, version, solverOpt);
```

**Management API example**

Management API can be used through management object on DecisionRules class. All methods return a Promise

```javascript
const rule = await dr.management.getRule(ruleIdOrAlias, version);
```

**Job API example**

Job API can be used to run input data against Integration Flow. All methods return a Promise

```javascript
const inputData = {
    "tripDetails": {
        "origin": "ATL",
        "destination": "DXB",
    }
}

const rule = await dr.job.start(ruleIdOrAlias, inputData, version);
```


**Webhook API example**

Webhook API can be used to validate webhook signature.

```javascript
const WEBHOOK_SECRET = "WEBHOOK_SECRET_FROM_CRAETED_WEBHOOK";

app.post('/webhook', (req, res) => {
    const signature = req.headers['x-webhook-signature'];
    
    try {
        const isValid = dr.validateWebhookSignature(req.body, signature, WEBHOOK_SECRET);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid signature' });
        }
        // Webhook is validated, now handle the event
        const { eventType, data, metadata } = req.body;

        switch (eventType) {
            case 'JOB.COMPLETED':
                console.log('Job completed:', data);
                // Handle job completion
                break;
            case 'JOB.ERROR':
                console.log('Job failed:', data);
                // Handle job error
                break;
        }

    }catch (e) {
        res.status(400).json({ error: 'Invalid webhook payload' });
    }
})
```

<a name="api"></a>
# API

All methods described below are exposed on DecisionRules class.

Methods throws DecisionRulesErrorException if something went wrong down on API call or general Error class if library encountered some sort of error.

## Solver API

**DecisionRules.solve**

```javascript
const result = await dr.solve(ruleIdOrAlias, inputData, version, solverOptions);
// => Promise<object[]>
```
Arguments:

| **arg** 	    | **type**      	 | **optional** 	|
|--------------|-----------------|--------------	|
| ruleIdOrAlias  	    | string        	 | no           	|
| inputData  	 | object        	 | no           	|
| version 	    | "latest" / number        	 | yes          	|
| solverOptions 	    | SolverOptions 	 | yes          	|

**SolverOptions**

Object that defines solver behavior if needed.

| **args**                   	| **type** 	| **optional** 	|
|----------------------------	|----------	|--------------	|
| cols                       	| object   	| yes          	|
| cols.includedConditionCols 	| string[] 	| yes          	|
| cols.excludedConditionCols 	| string[] 	| yes          	|
| debug                      	| boolean  	| yes          	|
| corrId                     	| string   	| yes          	|
| audit                      	| string   	| yes          	|
| auditTtl                   	| string   	| yes          	|
| aliasConflictPath                   	| string   	| yes          	|
| strategy                   	| StrategyOptions   	| yes          	|

## Management API

**DecisionRules.management.getRule**

**DecisionRules.management.getRuleByPath**

Gets all of the infromation stored about the rule, including its content, version or input and output schemas. 
If the version is specified, gets the version irrespective of the rule status.
If the version is not specified, gets the latest published version.

```javascript

const result = await dr.management.getRule(ruleIdOrAliasOrAlias, version);
// => Promise<Rule>

const result = await dr.management.getRuleByPath(path, version);
// => Promise<Rule>
```

Arguments:

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAliasOrAlias/path   	| string   	| no           	|
| version  	| "latest" / number   	| yes          	|


**DecisionRules.management.updateRuleStatus**

Changes rule status from pending to published and vice versa. If the version is not specified, the latest version will be used.

```javascript

const result = await dr.management.updateRuleStatus(ruleIdOrAliasOrAlias, status, version)
// => Promise<Rule>
```
| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAliasOrAlias   	| string   	| no           	|
| status   	| string   	| no           	|
| version  	| "latest" / number   	| yes          	|

**DecisionRules.management.updateRule**

Changes the rule according to the body of the request.

Note that there are a few attributes of the rule that cannot be updated by the PUT endpoint. Namely, you cannot use PUT to change the rule ID, version and rule alias. Also, you cannot change the date of last update, since it gets updated automatically.

```javascript

const result = await dr.management.updateRule(ruleIdOrAliasOrAlias, rule, version);
// => Promise<Rule>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAliasOrAlias   	| string   	| no           	|
| rule     	| any      	| no           	|
| version  	| "latest" / number   	| yes          	|

**DecisionRules.management.createRule**

Creates rule based on the body of the request. The body must be formatted according to the example below.

```javascript

const result = await dr.management.createRule(rule, path);
// => Promise<Rule>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| rule     	| any      	| no           	|
| path     	    | string      	 | yes           	 |


**DecisionRules.management.createNewRuleVersion**

Creates new version of a rule and applies changes to new rule based on the body of the request. The body must be formatted according to the example below.

```javascript

const result = await dr.management.createNewRuleVersion(ruleIdOrAliasOrAlias, rule);
// => Promise<Rule>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAliasOrAlias     	| any      	| no           	|
| rule     	| any      	| no           	|


**DecisionRules.management.deleteRule**

**DecisionRules.management.deleteRuleByPath**

Deletes the rule.

```javascript

const result = await dr.management.deleteRule(ruleIdOrAlias, version);
// => Promise<void>

const result = await dr.management.deleteRuleByPath(path, version);
// => Promise<void>
```

Arguments:

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias/path   	| string   	| no           	|
| version  	| "latest" / number   	| yes          	|

**DecisionRules.management.lockRule**

**DecisionRules.management.lockRuleByPath**

Locks and unlocks the rule, depending on lock value.

```javascript

const result = await dr.management.lockRule(ruleIdOrAlias, lock, version);
// => Promise<void>

const result = await dr.management.lockRuleByPath(ruleIdOrAlias, lock, version);
// => Promise<void>
```

| **args** 	 | **type** 	  | **optional** 	|
|------------|-------------|--------------	|
| ruleIdOrAlias/path   	 | string   	  | no           	|
| lock     	 | boolean   	 | no           	|
| version  	 | "latest" / number   	  | yes          	|



**DecisionRules.management.findDuplicates**

Look for decision table by id and optionally version. If the decision table is found, it is returned together with an array of duplicates.

```javascript

const result = await dr.management.findDuplicates(ruleIdOrAlias, version);
// => Promise<{ rule: Rule, duplicates: any[] }>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| version  	| "latest" / number   	| yes          	|

**DecisionRules.management.findDependencies**

Look for dependencies by id or alias and optionally version. If the rule is found, it is returned together with an array of dependencies.

```javascript

const result = await dr.management.findDependencies(ruleIdOrAlias, version);
// => Promise<{ rule: Rule, dependencies: any[] }>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| version  	| "latest" / number   	| yes          	|


**DecisionRules.management.getRulesForSpace**

Gets all types of rules and ruleflows in space

The desired space is determined by Management API Key. This endpoint also gets set of rules used in every ruleflow.

```javascript

const result = await dr.management.getRulesForSpace();
// => Promise<Rule[]>
```

**DecisionRules.management.getTags**

This method allows you to get all rules/rule flows with certain tags. Desired space is derived from Management API Key.

```javascript

const result = await dr.management.getTags(tags);
// => Promise<Rule[]>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| tags     	| string[] 	| no           	|

**DecisionRules.management.updateTags**

If you specify the version, the tag/tags will be added to the specified version. If the version is not specified, the tag/tags will be added to all the versions with given ID.

```javascript

const result = await dr.management.updateTags(ruleIdOrAlias, tags, version);
// => Promise<string[]>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| tags     	| any     	| no           	|
| version  	| "latest" / number   	| yes          	|

**DecisionRules.management.deleteTags**

If you specify the version, the tag/tags will be deleted from the specified version. If the version is not specified, the tag/tags will be deleted from all the versions with given ID.

```javascript

const result = await dr.management.deleteTags(ruleIdOrAlias, tags, version);
// => Promise<void>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| tags     	| string[] 	| no           	|
| version  	| "latest" / number   	| yes          	|

**DecisionRules.management.exportFolder**

**DecisionRules.management.exportFolderByPath**

Export folder with all rules. If no nodeId is set, then will be exported root directory.

```javascript

const result = await dr.management.exportFolder(nodeId);
// => Promise<FolderExport>

const result = await dr.management.exportFolderByPath(path);
// => Promise<FolderExport>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| nodeId/path   	| string   	| no           	|

**DecisionRules.management.importFolder**

**DecisionRules.management.importFolderByPath**

Import folder with all rules into specific folder. If no targetNodeId is set, then will be imported into root directory.

```javascript

const result = await dr.management.importFolder(targetNodeId, data);
// => Promise<{ folderNode: string }>

const result = await dr.management.importFolderByPath(path, data);
// => Promise<{ folderNode: string }>
```

| **args**     	| **type** 	| **optional** 	|
|--------------	|----------	|--------------	|
| targetNodeId/path 	| string   	| no           	|
| data        	| FolderExport      	| no           	|


**DecisionRules.management.createFolder**

**DecisionRules.management.createFolderByPath**

Creates folders under a specified target, moves rules into the new structure by baseId or ruleAlias. Define which folder's structure to update by either inputting it's id as a parameter. Appends the Folder Structure specified in the request body as a child of the target node.
```javascript

const result = await dr.management.createFolder(targetNodeId, data);
// => Promise<void>

const result = await dr.management.createFolderByPath(path, data);
// => Promise<void>
```

| **args**     	 | **type** 	 | **optional** 	  |
|----------------|------------|-----------------|
| targetNodeId/path 	 | string   	 | yes           	 |
| data        	  | FolderData      	 | yes           	 |


**DecisionRules.management.updateNodeFolderStructure**

**DecisionRules.management.updateNodeFolderStructureByPath**

Creates folders under a specified target, moves rules into the new structure by baseId or ruleAlias. Define which folder's structure to update by either inputting it's id as a parameter. Appends the Folder Structure specified in the request body as a child of the target node.
```javascript

const result = await dr.management.updateNodeFolderStructure(targetNodeId, data);
// => Promise<FolderStructure>

const result = await dr.management.updateNodeFolderStructureByPath(path, data);
// => Promise<FolderStructure>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| targetNodeId/path 	 | string   	 | no           	 |
| data        	  | FolderData      	 | no           	 |


**DecisionRules.management.getFolderStructure**

**DecisionRules.management.getFolderStructureByPath**

Retrieve folder structure by node ID. Returns a JSON with a tree like structure containing the descendant folders and rules of the target node.
```javascript

const result = await dr.management.getFolderStructure(targetNodeId);
// => Promise<FolderStructure>

const result = await dr.management.getFolderStructureByPath(path);
// => Promise<FolderStructure>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| targetNodeId/path 	 | string   	 | no           	 |

**DecisionRules.management.deleteFolder**

**DecisionRules.management.deleteFolderByPath**

Delete a folder (Including it's rules) by node ID. If you want to delete the contents of the entire space target the 'root' by Id and include the optional parameter deleteAll=true.
```javascript

const result = await dr.management.deleteFolder(targetNodeId, deleteAll);
// => Promise<void>

const result = await dr.management.deleteFolderByPath(path, deleteAll);
// => Promise<void>
```

| **args**     	 | **type** 	  | **optional** 	  |
|----------------|-------------|-----------------|
| targetNodeId/path 	 | string   	  | no           	   |
| deleteAll 	    | boolean   	 | yes           	 |

**DecisionRules.management.renameFolder**

**DecisionRules.management.renameFolderByPath**

Delete a folder (Including it's rules) by node ID. If you want to delete the contents of the entire space target the 'root' by Id and include the optional parameter deleteAll=true.
```javascript

const result = await dr.management.renameFolder(targetNodeId);
// => Promise<void>

const result = await dr.management.renameFolderByPath(path);
// => Promise<void>
```

| **args**     	 | **type** 	 | **optional** 	  |
|----------------|------------|-----------------|
| targetNodeId/path 	 | string   	 | no           	   |
| name 	         | string   	 | yes           	 |

**DecisionRules.management.moveFolder**

Moves folders (including descendants) and/or rules under the parent specified by targetId or targetPath attribute in the request body.
```javascript

const result = await dr.management.moveFolder(targetNodeId, data);
// => Promise<void>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| targetNodeId 	 | string   	 | no           	 |
| nodes 	         | object[]   	 | yes           	 |
| targetPath 	         | string   	   | yes           	 |

**DecisionRules.management.findFolderOrRuleByAttribute**

Finds Folders and Rules which satisfy all of the criteria from the request body. Use any of the attributes listed below or their combination to find folders and rules.
```javascript

const result = await dr.management.findFolderOrRuleByAttribute(data);
// => Promise<Rule | FolderStructure>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| data 	         | NodeProperties   	 | no           	 |

NodeProperties
| **args**     	 | **type** 	   | **optional** 	  |
|----------------|--------------|-----------------|
| name 	 | string   	   | yes           	 | 
| id 	         | string   	   | yes           	 |
| baseId 	         | string   	 | yes           	 |
| ruleAlias 	         | string   	 | yes           	 |
| ruleType 	         | string   	 | yes           	 |
| tags 	         | string[]   	 | yes           	 |
| ruleState 	         | string   	 | yes           	 |
| type 	         | string   	 | yes           	 |
| version 	         | "latest" / number   	 | yes           	 |

**DecisionRules.job.start**

Starts a new asynchronous job for a specific Integration Flow. The identifier is the unique ID of the Integration Flow, and version is its specific version. This endpoint only accepts rules of type IntegrationFlow.
```javascript

const result = await dr.job.start(targetNodeId, data);
// => Promise<Job>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| inputData 	 | object   	 | no           	 |
| ruleIdOrAlias 	 | string   	 | no           	 |
| version 	         | "latest" / number   	 | no           	 |

**DecisionRules.job.cancel**

Attempts to cancel a specific job by its ID. The job must belong to the requesting space.
```javascript

const result = await dr.job.cancel(jobId);
// => Promise<Job>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| jobId 	 | string   	 | no           	 |

**DecisionRules.job.info**

Retrieves detailed information about a specific job, including its status and output. The job must belong to the requesting space.

```javascript

const result = await dr.job.info(jobId);
// => Promise<Job>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| jobId 	 | string   	 | no           	 |

**DecisionRules.validateWebhookSignature**

Validates webhook signature.

```javascript

const result = dr.validateWebhookSignature(payload, signature, secret);
// => boolean
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| payload 	 | string   	 | no           	 |
| signature 	 | string   	 | no           	 |
| secret 	 | string   	 | no           	 |
