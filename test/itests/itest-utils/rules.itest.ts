export const rule = {
    "templateMetadata": {},
    "name": "Integration Flow v2",
    "description": "",
    "inputSchema": {
        "input": {}
    },
    "outputSchema": {
        "output": {}
    },
    "tags": [],
    "workflowData": {
        "nodes": [
            {
                "connectors": [
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "c2c8e47c",
                "version": 1,
                "type": "START",
                "position": {
                    "x": 167,
                    "y": 325
                }
            },
            {
                "connectors": [
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "29610edc-df5b-4467-a502-5394a66f8f2d",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "f518b2c4-6579-48d0-adc7-b631216dd610",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "7e85e5e6",
                "version": 1,
                "type": "DATA_MANIPULATION",
                "position": {
                    "x": 500,
                    "y": 315
                },
                "name": "assign",
                "data": {
                    "mapping": [
                        {
                            "source": {
                                "expression": {
                                    "type": 1,
                                    "outputScalarValue": {
                                        "type": "function",
                                        "value": "Job will be run",
                                        "stringValue": "Job will be run"
                                    }
                                }
                            },
                            "target": {
                                "path": "output.output"
                            }
                        }
                    ],
                    "guiSettings": {
                        "showAll": false
                    }
                }
            },
            {
                "connectors": [
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "caf5ad87-ff5d-4893-89f6-ecd839a2542f",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "78883421-0045-4353-a901-3ead927470eb",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "cbfe3058",
                "version": 1,
                "type": "HTTP_CLIENT",
                "position": {
                    "x": 316,
                    "y": 154
                },
                "data": {
                    "url": "https://postman-echo.com/delay/3",
                    "method": "GET",
                    "requestName": "",
                    "body": "",
                    "bodyFormat": "json",
                    "headers": [
                        {
                            "header": "",
                            "value": ""
                        }
                    ],
                    "connectionReference": null
                },
                "name": "api"
            }
        ],
        "connections": [
            {
                "source": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                "target": "caf5ad87-ff5d-4893-89f6-ecd839a2542f",
                "type": 0,
                "id": "1e4ed9eb-122b-4bba-9e42-06b29c2feac9"
            },
            {
                "source": "78883421-0045-4353-a901-3ead927470eb",
                "target": "f518b2c4-6579-48d0-adc7-b631216dd610",
                "type": 0,
                "id": "057ba96b-c95c-4001-8d14-95153d0026c0"
            }
        ]
    },
    "type": "integration-flow",
    "status": "published",
    "auditLog": {
        "active": false,
        "debug": {
            "active": false
        },
        "ttl": 14
    },
    "ruleAlias": "inland-wolf",
    "createdIn": "2025-12-03T11:40:52.619Z",
    "lastUpdate": "2025-12-03T11:42:13.646Z",
    "visualData": {
        "scale": 1,
        "rotate": 0,
        "translate": {
            "x": -66,
            "y": -21
        }
    }
}

export const updateRule = {
    "templateMetadata": {},
    "name": "Integration Flow",
    "description": "",
    "inputSchema": {
        "input": {}
    },
    "outputSchema": {
        "output": {}
    },
    "tags": [],
    "workflowData": {
        "nodes": [
            {
                "connectors": [
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "c2c8e47c",
                "version": 1,
                "type": "START",
                "position": {
                    "x": 167,
                    "y": 325
                }
            },
            {
                "connectors": [
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "29610edc-df5b-4467-a502-5394a66f8f2d",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "f518b2c4-6579-48d0-adc7-b631216dd610",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "7e85e5e6",
                "version": 1,
                "type": "DATA_MANIPULATION",
                "position": {
                    "x": 500,
                    "y": 315
                },
                "name": "assign",
                "data": {
                    "mapping": [
                        {
                            "source": {
                                "expression": {
                                    "type": 1,
                                    "outputScalarValue": {
                                        "type": "function",
                                        "value": "Hello world!",
                                        "stringValue": "Hello world!"
                                    }
                                }
                            },
                            "target": {
                                "path": "output.output"
                            }
                        }
                    ],
                    "guiSettings": {
                        "showAll": false
                    }
                }
            },
            {
                "connectors": [
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "caf5ad87-ff5d-4893-89f6-ecd839a2542f",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "78883421-0045-4353-a901-3ead927470eb",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "cbfe3058",
                "version": 1,
                "type": "HTTP_CLIENT",
                "position": {
                    "x": 316,
                    "y": 154
                },
                "data": {
                    "url": "https://postman-echo.com/delay/3",
                    "method": "GET",
                    "requestName": "",
                    "body": "",
                    "bodyFormat": "json",
                    "headers": [
                        {
                            "header": "",
                            "value": ""
                        }
                    ],
                    "connectionReference": null
                },
                "name": "api"
            }
        ],
        "connections": [
            {
                "source": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                "target": "caf5ad87-ff5d-4893-89f6-ecd839a2542f",
                "type": 0,
                "id": "1e4ed9eb-122b-4bba-9e42-06b29c2feac9"
            },
            {
                "source": "78883421-0045-4353-a901-3ead927470eb",
                "target": "f518b2c4-6579-48d0-adc7-b631216dd610",
                "type": 0,
                "id": "057ba96b-c95c-4001-8d14-95153d0026c0"
            }
        ]
    },
    "type": "integration-flow",
    "status": "published",
    "auditLog": {
        "active": false,
        "debug": {
            "active": false
        },
        "ttl": 14
    },
    "ruleAlias": "inland-wolf",
    "createdIn": "2025-12-03T11:40:52.619Z",
    "lastUpdate": "2025-12-03T11:42:13.646Z",
    "visualData": {
        "scale": 1,
        "rotate": 0,
        "translate": {
            "x": -66,
            "y": -21
        }
    }
}

export const updateRule2 = {
    "templateMetadata": {},
    "name": "Integration Flow",
    "description": "",
    "inputSchema": {
        "input": {}
    },
    "outputSchema": {
        "output": {}
    },
    "tags": [],
    "workflowData": {
        "nodes": [
            {
                "connectors": [
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "c2c8e47c",
                "version": 1,
                "type": "START",
                "position": {
                    "x": 167,
                    "y": 325
                }
            },
            {
                "connectors": [
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "29610edc-df5b-4467-a502-5394a66f8f2d",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "f518b2c4-6579-48d0-adc7-b631216dd610",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "7e85e5e6",
                "version": 1,
                "type": "DATA_MANIPULATION",
                "position": {
                    "x": 500,
                    "y": 315
                },
                "name": "assign",
                "data": {
                    "mapping": [
                        {
                            "source": {
                                "expression": {
                                    "type": 1,
                                    "outputScalarValue": {
                                        "type": "function",
                                        "value": "Hello world!",
                                        "stringValue": "Hello world!"
                                    }
                                }
                            },
                            "target": {
                                "path": "output.output"
                            }
                        }
                    ],
                    "guiSettings": {
                        "showAll": false
                    }
                }
            },
            {
                "connectors": [
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "caf5ad87-ff5d-4893-89f6-ecd839a2542f",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "out",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "78883421-0045-4353-a901-3ead927470eb",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "cbfe3058",
                "version": 1,
                "type": "HTTP_CLIENT",
                "position": {
                    "x": 316,
                    "y": 154
                },
                "data": {
                    "url": "https://postman-echo.com/delay/3",
                    "method": "GET",
                    "requestName": "",
                    "body": "",
                    "bodyFormat": "json",
                    "headers": [
                        {
                            "header": "",
                            "value": ""
                        }
                    ],
                    "connectionReference": null
                },
                "name": "api"
            }
        ],
        "connections": [
            {
                "source": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                "target": "caf5ad87-ff5d-4893-89f6-ecd839a2542f",
                "type": 0,
                "id": "1e4ed9eb-122b-4bba-9e42-06b29c2feac9"
            },
            {
                "source": "78883421-0045-4353-a901-3ead927470eb",
                "target": "f518b2c4-6579-48d0-adc7-b631216dd610",
                "type": 0,
                "id": "057ba96b-c95c-4001-8d14-95153d0026c0"
            }
        ]
    },
    "type": "integration-flow",
    "status": "published",
    "auditLog": {
        "active": false,
        "debug": {
            "active": false
        },
        "ttl": 14
    },
    "ruleAlias": "inland-wolf",
    "createdIn": "2025-12-03T11:40:52.619Z",
    "lastUpdate": "2025-12-03T11:42:13.646Z",
    "visualData": {
        "scale": 1,
        "rotate": 0,
        "translate": {
            "x": -66,
            "y": -21
        }
    }
}

export const lookupTable = {
    "name": "Testing table 2",
    "description": "",
    "type": "lookup-table",
    "columns": [
        {
            "name": "Primary Key",
            "alias": "pk",
            "order": 0,
            "isPrimaryKey": true
        },
        {
            "name": "id",
            "alias": "03EOXNMB"
        }
    ],
    "primaryKeyColumn": "pk",
    "data": {
        "Orange": {
            "pk": "Orange",
            "03EOXNMB": "1",
            "_position": 0
        },
        "Door hinge": {
            "pk": "Door hinge",
            "03EOXNMB": "2",
            "_position": 1
        },
        "Porridge": {
            "pk": "Porridge",
            "03EOXNMB": "3",
            "_position": 2
        },
        "Four inch": {
            "pk": "Four inch",
            "03EOXNMB": "4",
            "_position": 3
        },
        "Forage": {
            "pk": "Forage",
            "03EOXNMB": "5",
            "_position": 4
        },
        "Storage": {
            "pk": "Storage",
            "03EOXNMB": "6",
            "_position": 5
        }
    },
    "inputSchema": {
        "primaryKey": {},
        "outputColumn": {},
        "method": {}
    },
    "outputSchema": {
        "output": {}
    },
    "tags": [],
    "status": "published",
    "auditLog": {
        "active": false,
        "debug": {
            "active": false
        },
        "ttl": 14
    },
    "sourceData": [
        {
            "pk": "Orange",
            "03EOXNMB": "1",
            "_position": 0
        },
        {
            "pk": "Door hinge",
            "03EOXNMB": "2",
            "_position": 1
        },
        {
            "pk": "Porridge",
            "03EOXNMB": "3",
            "_position": 2
        },
        {
            "pk": "Four inch",
            "03EOXNMB": "4",
            "_position": 3
        },
        {
            "pk": "Forage",
            "03EOXNMB": "5",
            "_position": 4
        },
        {
            "pk": "Storage",
            "03EOXNMB": "6",
            "_position": 5
        }
    ],
    "ruleAliasInfo": {
        "usedOn": [],
        "unique": true
    }
}