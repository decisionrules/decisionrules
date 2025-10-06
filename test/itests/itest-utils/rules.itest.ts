export const rule = {
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
                        "id": "025ebbdf-b839-45c6-ae18-eb246cd4f040",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "38de5e13-7b9e-44c9-8070-fb196cee4a6e",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "63e3801f",
                "version": 1,
                "type": "DATA_MANIPULATION",
                "position": {
                    "x": 535,
                    "y": 285
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
            }
        ],
        "connections": [
            {
                "source": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                "target": "38de5e13-7b9e-44c9-8070-fb196cee4a6e",
                "type": 0,
                "id": "9d1753c3-3117-459b-919d-03ddbeaa64a9"
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
    "visualData": {
        "scale": 1,
        "rotate": 0,
        "translate": {
            "x": -67,
            "y": -1
        }
    },
    "selectedWebhookAliases": [
        "wh-E5d6EU8B"
    ]
}

export const updateRule = {
    "name": "Updated Integration Flow v2",
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
                        "id": "025ebbdf-b839-45c6-ae18-eb246cd4f040",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "38de5e13-7b9e-44c9-8070-fb196cee4a6e",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "63e3801f",
                "version": 1,
                "type": "DATA_MANIPULATION",
                "position": {
                    "x": 535,
                    "y": 285
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
            }
        ],
        "connections": [
            {
                "source": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                "target": "38de5e13-7b9e-44c9-8070-fb196cee4a6e",
                "type": 0,
                "id": "9d1753c3-3117-459b-919d-03ddbeaa64a9"
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
    "visualData": {
        "scale": 1,
        "rotate": 0,
        "translate": {
            "x": -67,
            "y": -1
        }
    },
    "selectedWebhookAliases": [
        "wh-E5d6EU8B"
    ]
}

export const updateRule2 = {
    "name": "Updated Updated Integration Flow v2",
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
                        "id": "025ebbdf-b839-45c6-ae18-eb246cd4f040",
                        "maxCount": 1,
                        "minCount": 1
                    },
                    {
                        "type": "in",
                        "maxConnections": -1,
                        "subType": "none",
                        "id": "38de5e13-7b9e-44c9-8070-fb196cee4a6e",
                        "maxCount": 1,
                        "minCount": 1
                    }
                ],
                "id": "63e3801f",
                "version": 1,
                "type": "DATA_MANIPULATION",
                "position": {
                    "x": 535,
                    "y": 285
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
            }
        ],
        "connections": [
            {
                "source": "fbd5a179-588e-4e75-b1e3-73ef458a84a2",
                "target": "38de5e13-7b9e-44c9-8070-fb196cee4a6e",
                "type": 0,
                "id": "9d1753c3-3117-459b-919d-03ddbeaa64a9"
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
    "visualData": {
        "scale": 1,
        "rotate": 0,
        "translate": {
            "x": -67,
            "y": -1
        }
    },
    "selectedWebhookAliases": [
        "wh-E5d6EU8B"
    ]
}