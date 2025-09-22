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

const result = await dr.solve(inputData, ruleId, version, solverOpt);
```

**Management API example**

Management API can be used through management object on DecisionRules class. All methods return a Promise

```javascript
const rule = await dr.management.getRule(ruleId, version);
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

const rule = await dr.job.start(inputData, ruleId, version);
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
const result = await dr.solve(inputData, ruleId, version, options);
// => Promise<any>
```
Arguments:

| **arg** 	    | **type**      	 | **optional** 	|
|--------------|-----------------|--------------	|
| inputData  	 | object        	 | no           	|
| ruleId  	    | string        	 | no           	|
| version 	    | string        	 | yes          	|
| options 	    | SolverOptions 	 | yes          	|

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

const result = await dr.management.getRule(ruleIdOrAlias, version);
// => Promise<any>
```

Arguments:

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.updateRuleStatus**

Changes rule status from pending to published and vice versa. If the version is not specified, the latest version will be used.

```javascript

const result = await dr.management.updateRuleStatus(ruleIdOrAlias, status, version)
// => Promise<any>
```
| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| status   	| string   	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.updateRule**

Changes the rule according to the body of the request.

Note that there are a few attributes of the rule that cannot be updated by the PUT endpoint. Namely, you cannot use PUT to change the rule ID, version and rule alias. Also, you cannot change the date of last update, since it gets updated automatically.

```javascript

const result = await dr.management.updateRule(ruleIdOrAlias, rule, version);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias   	| string   	| no           	|
| rule     	| any      	| no           	|
| version  	| string   	| yes          	|

**DecisionRules.management.createRule**

Creates rule based on the body of the request. The body must be formatted according to the example below.

```javascript

const result = await dr.management.createRule(rule, path);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| rule     	| any      	| no           	|
| path     	    | string      	 | yes           	 |


**DecisionRules.management.createNewRuleVersion**

Creates new version of a rule and applies changes to new rule based on the body of the request. The body must be formatted according to the example below.

```javascript

const result = await dr.management.createNewRuleVersion(ruleIdOrAlias, rule);
// => Promise<any>
```

| **args** 	| **type** 	| **optional** 	|
|----------	|----------	|--------------	|
| ruleIdOrAlias     	| any      	| no           	|
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

**DecisionRules.management.lockRule**

Lock the rule.

```javascript

const result = await dr.management.lockRule(lock, ruleId, version);
// => Promise<any>
```

| **args** 	 | **type** 	  | **optional** 	|
|------------|-------------|--------------	|
| lock     	 | boolean   	 | no           	|
| ruleId   	 | string   	  | no           	|
| version  	 | string   	  | yes          	|


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


**DecisionRules.management.exportRuleFlow**

Export Rule Flow with all rules. If the version is not specified, export Rule Flow with the latest version.

```javascript

const result = await dr.management.exportRuleFlow(ruleIdOrAlias, version);
// => Promise<any>
```

| **args**     	           | **type** 	| **optional** 	  |
|--------------------------|----------	|-----------------|
| ruleIdOrAlias, version 	 | string   	| no           	  |
| version        	         | string      	| yes           	 |

**DecisionRules.management.importRuleFlow**

Import Rule Flow with all rules. If no query parameters are set, a new Rule Flow will be created. If the new-version and version query parameter are set, a new version of the targeted Rule Flow will be created. If the overwrite and version query parameters are set, a specific version of the target rule flow will be overwritten.
```javascript

const result = await dr.management.importRuleFlow(ruleFlow, options);
// => Promise<any>
```

| **args**     	   | **type** 	 | **optional** 	  |
|------------------|------------|-----------------|
| ruleFlow 	       | any   	    | no           	  |
| options        	 | any      	 | yes           	 |


| **options**     	 | **type** 	    | **optional** 	  |
|-------------------|---------------|-----------------|
| newVersion 	      | string   	    | yes           	 |
| overwrite        	  | string      	 | yes           	 |
| version        	  | string      	 | yes           	 |


**DecisionRules.management.createFolder**

Creates folders under a specified target, moves rules into the new structure by baseId or ruleAlias. Define which folder's structure to update by either inputting it's id as a parameter. Appends the Folder Structure specified in the request body as a child of the target node.
```javascript

const result = await dr.management.createFolder(targetNodeId, data);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	  |
|----------------|------------|-----------------|
| targetNodeId 	 | string   	 | yes           	 |
| data        	  | any      	 | yes           	 |


| **data**     	    | **type** 	      | **optional** 	  |
|-------------------|-----------------|-----------------|
| type 	            | string   	      | yes           	 |
| name        	     | string      	   | yes           	 |
| id        	       | string      	   | yes           	 |
| baseId 	          | string   	      | yes           	 |
| version        	  | string      	   | yes           	 |
| children        	 | object[]      	 | yes           	 |

**DecisionRules.management.updateNodeFolderStructure**

Creates folders under a specified target, moves rules into the new structure by baseId or ruleAlias. Define which folder's structure to update by either inputting it's id as a parameter. Appends the Folder Structure specified in the request body as a child of the target node.
```javascript

const result = await dr.management.updateNodeFolderStructure(targetNodeId, data);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| targetNodeId 	 | string   	 | no           	 |
| data        	  | any      	 | no           	 |


| **data**     	    | **type** 	      | **optional** 	  |
|-------------------|-----------------|-----------------|
| type 	            | string   	      | yes           	 |
| name        	     | string      	   | yes           	 |
| id        	       | string      	   | yes           	 |
| baseId 	          | string   	      | yes           	 |
| version        	  | string      	   | yes           	 |
| children        	 | object[]      	 | yes           	 |

**DecisionRules.management.getNodeFolderStructure**

Retrieve folder structure by node ID. Returns a JSON with a tree like structure containing the descendant folders and rules of the target node.
```javascript

const result = await dr.management.getNodeFolderStructure(targetNodeId);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| targetNodeId 	 | string   	 | no           	 |

**DecisionRules.management.deleteFolder**

Delete a folder (Including it's rules) by node ID. If you want to delete the contents of the entire space target the 'root' by Id and include the optional parameter deleteAll=true.
```javascript

const result = await dr.management.deleteFolder(targetNodeId, deleteAll);
// => Promise<any>
```

| **args**     	 | **type** 	  | **optional** 	  |
|----------------|-------------|-----------------|
| targetNodeId 	 | string   	  | no           	   |
| deleteAll 	    | boolean   	 | yes           	 |

**DecisionRules.management.renameFolder**

Delete a folder (Including it's rules) by node ID. If you want to delete the contents of the entire space target the 'root' by Id and include the optional parameter deleteAll=true.
```javascript

const result = await dr.management.renameFolder(targetNodeId);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	  |
|----------------|------------|-----------------|
| targetNodeId 	 | string   	 | no           	   |
| name 	         | string   	 | yes           	 |

**DecisionRules.management.moveFolder**

Moves folders (including descendants) and/or rules under the parent specified by targetId or targetPath attribute in the request body.
```javascript

const result = await dr.management.moveFolder(targetNodeId, data);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| targetNodeId 	 | string   	 | no           	 |
| data 	         | string   	 | no           	 |

| **data**     	 | **type** 	   | **optional** 	  |
|----------------|--------------|-----------------|
| targetId 	 | string   	   | yes           	 |
| targetPath 	         | string   	   | yes           	 |
| nodes 	         | object[]   	 | yes           	 |

**DecisionRules.management.findFolderOrRuleByAttribute**

Finds Folders and Rules which satisfy all of the criteria from the request body. Use any of the attributes listed below or their combination to find folders and rules.
```javascript

const result = await dr.management.findFolderOrRuleByAttribute(data);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| data 	         | string   	 | no           	 |

| **data**     	 | **type** 	   | **optional** 	  |
|----------------|--------------|-----------------|
| name 	 | string   	   | yes           	 | 
| id 	         | string   	   | yes           	 |
| baseId 	         | string   	 | yes           	 |
| ruleAlias 	         | string   	 | yes           	 |
| ruleType 	         | string   	 | yes           	 |
| tags 	         | string[]   	 | yes           	 |
| ruleState 	         | string   	 | yes           	 |
| type 	         | string   	 | yes           	 |
| version 	         | number   	 | yes           	 |

**DecisionRules.job.start**

Starts a new asynchronous job for a specific Integration Flow. The identifier is the unique ID of the Integration Flow, and version is its specific version. This endpoint only accepts rules of type IntegrationFlow.
```javascript

const result = await dr.job.start(targetNodeId, data);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| inputData 	 | object   	 | no           	 |
| ruleId 	 | string   	 | no           	 |
| version 	         | string   	 | no           	 |

**DecisionRules.job.cancel**

Attempts to cancel a specific job by its ID. The job must belong to the requesting space.
```javascript

const result = await dr.job.cancel(jobId);
// => Promise<any>
```

| **args**     	 | **type** 	 | **optional** 	 |
|----------------|------------|----------------|
| jobId 	 | string   	 | no           	 |

**DecisionRules.job.info**

Retrieves detailed information about a specific job, including its status and output. The job must belong to the requesting space.

```javascript

const result = await dr.job.info(jobId);
// => Promise<any>
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
| jobId 	 | string   	 | no           	 |
