export const createFolderResult = ''
export const getFolderStructureResult = {
    type: 'ROOT',
    name: 'Home',
    id: 'root',
    children: [
        {
            'name': 'Shipment Milestones',
            'type': 'RULE',
            'version': 1,
        },
        {
            name: 'Integration Flow',
            type: 'RULE',
            version: 1,
        },
        {
            name: 'Folder Name',
            type: 'FOLDER',
            children: []
        }
    ]
}
export const deleteFolderResult = ''
export const createFolderByPathResult = ''
export const getFolderStructureResult1 = {
    type: 'ROOT',
    name: 'Home',
    id: 'root',
    children: [
        {
            'name': 'Shipment Milestones',
            'type': 'RULE',
            'version': 1,
        },
        {
            name: 'Integration Flow',
            type: 'RULE',
            version: 1,
        },
        {
            name: 'Folder Name',
            type: 'FOLDER',
            children: []
        }
    ]
}
export const createRuleResult = {
    'name': 'Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': 'c2c8e47c',
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': '63e3801f',
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'type': 0,
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'published',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const updateRuleResult = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': '63e3801f',
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'type': 0,
                'id': '9d1753c3-3117-459b-919d-03ddbeaa64a9'
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'published',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const updateRuleStatusResult = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': 'c2c8e47c',
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': '63e3801f',
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'type': 0,
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'pending',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const lockRuleResult = ''
export const lockRuleResult1 = ''
export const lockRuleByPathResult = ''
export const lockRuleByPathResult1 = ''
export const createNewRuleVersionResult = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'type': 0,
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'pending',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const getRuleResult = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'type': 0,
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'pending',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const getRuleResult1 = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'type': 0,
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'pending',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const getRuleByPathResult = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': '63e3801f',
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {}
        ]
    },
    'type': 'integration-flow',
    'status': 'pending',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const getRuleByPathResult1 = {
    'name': 'Updated Integration Flow v2',
    'description': '',
    'inputSchema': {
        'input': {}
    },
    'outputSchema': {
        'output': {}
    },
    'tags': [],
    'workflowData': {
        'nodes': [
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'id': 'fbd5a179-588e-4e75-b1e3-73ef458a84a2',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': 'c2c8e47c',
                'version': 1,
                'type': 'START',
                'position': {
                    'x': 167,
                    'y': 325
                }
            },
            {
                'connectors': [
                    {
                        'type': 'out',
                        'maxConnections': -1,
                        'subType': 'none',
                        'id': '025ebbdf-b839-45c6-ae18-eb246cd4f040',
                        'maxCount': 1,
                        'minCount': 1
                    },
                    {
                        'type': 'in',
                        'maxConnections': -1,
                        'subType': 'none',
                        'id': '38de5e13-7b9e-44c9-8070-fb196cee4a6e',
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'id': '63e3801f',
                'version': 1,
                'type': 'DATA_MANIPULATION',
                'position': {
                    'x': 535,
                    'y': 285
                },
                'name': 'assign',
                'data': {
                    'mapping': [
                        {
                            'source': {
                                'expression': {
                                    'type': 1,
                                    'outputScalarValue': {
                                        'type': 'function',
                                        'value': 'Job will be run',
                                        'stringValue': 'Job will be run'
                                    }
                                }
                            },
                            'target': {
                                'path': 'output.output'
                            }
                        }
                    ],
                    'guiSettings': {
                        'showAll': false
                    }
                }
            }
        ],
        'connections': [
            {
                'source': 'fbd5a179-588e-4e75-b1e3-73ef458a84a2',
                'target': '38de5e13-7b9e-44c9-8070-fb196cee4a6e',
                'type': 0,
                'id': '9d1753c3-3117-459b-919d-03ddbeaa64a9'
            }
        ]
    },
    'type': 'integration-flow',
    'status': 'pending',
    'auditLog': {
        'active': false,
        'debug': {
            'active': false
        },
        'ttl': 14
    },
    'visualData': {
        'scale': 1,
        'rotate': 0,
        'translate': {
            'x': -67,
            'y': -1
        }
    },
    'selectedWebhookAliases': [
        'wh-E5d6EU8B'
    ]
}
export const exportFolderResult = {
    'export': {
        'data': {
            'rules': [
                {
                    'auditLog': {
                        'active': false,
                        'debug': {
                            'active': false,
                        },
                        'ttl': 14,
                    },
                    'description': '',
                    'inputSchema': {
                        'input': {},
                    },
                    'name': 'Updated Integration Flow v2',
                    'outputSchema': {
                        'output': {},
                    },
                    'selectedWebhookAliases': [
                        'wh-E5d6EU8B',
                    ],
                    'status': 'pending',
                    'tags': [],
                    'type': 'integration-flow',
                    'version': 2,
                    'visualData': {
                        'rotate': 0,
                        'scale': 1,
                        'translate': {
                            'x': -67,
                            'y': -1,
                        },
                    },
                    'workflowData': {
                        'connections': [
                            {
                                'type': 0,
                            },
                        ],
                        'nodes': [
                            {
                                'connectors': [
                                    {
                                        'maxConnections': -1,
                                        'maxCount': 1,
                                        'minCount': 1,
                                        'subType': 'none',
                                        'type': 'out',
                                    },
                                ],
                                'id': 'c2c8e47c',
                                'position': {
                                    'x': 167,
                                    'y': 325,
                                },
                                'type': 'START',
                                'version': 1,
                            },
                            {
                                'connectors': [
                                    {
                                        'maxConnections': -1,
                                        'maxCount': 1,
                                        'minCount': 1,
                                        'subType': 'none',
                                        'type': 'out',
                                    },
                                    {
                                        'maxConnections': -1,
                                        'maxCount': 1,
                                        'minCount': 1,
                                        'subType': 'none',
                                        'type': 'in',
                                    },
                                ],
                                'data': {
                                    'guiSettings': {
                                        'showAll': false,
                                    },
                                    'mapping': [
                                        {
                                            'source': {
                                                'expression': {
                                                    'outputScalarValue': {
                                                        'stringValue': 'Job will be run',
                                                        'type': 'function',
                                                        'value': 'Job will be run',
                                                    },
                                                    'type': 1,
                                                },
                                            },
                                            'target': {
                                                'path': 'output.output',
                                            },
                                        },
                                    ],
                                },
                                'name': 'assign',
                                'position': {
                                    'x': 535,
                                    'y': 285,
                                },
                                'type': 'DATA_MANIPULATION',
                                'version': 1,
                            },
                        ],
                    },
                },
                {
                    'auditLog': {
                        'active': false,
                        'debug': {
                            'active': false,
                        },
                        'ttl': 14,
                    },
                    'description': '',
                    'inputSchema': {
                        'input': {},
                    },
                    'locked': false,
                    'name': 'Updated Integration Flow v2',
                    'outputSchema': {
                        'output': {},
                    },
                    'selectedWebhookAliases': [
                        'wh-E5d6EU8B',
                    ],
                    'status': 'pending',
                    'tags': [],
                    'type': 'integration-flow',
                    'version': 1,
                    'visualData': {
                        'rotate': 0,
                        'scale': 1,
                        'translate': {
                            'x': -67,
                            'y': -1,
                        },
                    },
                    'workflowData': {
                        'connections': [
                            {
                                'type': 0,
                            },
                        ],
                        'nodes': [
                            {
                                'connectors': [
                                    {
                                        'maxConnections': -1,
                                        'maxCount': 1,
                                        'minCount': 1,
                                        'subType': 'none',
                                        'type': 'out',
                                    },
                                ],
                                'position': {
                                    'x': 167,
                                    'y': 325,
                                },
                                'type': 'START',
                                'version': 1,
                            },
                            {
                                'connectors': [
                                    {
                                        'maxConnections': -1,
                                        'maxCount': 1,
                                        'minCount': 1,
                                        'subType': 'none',
                                        'type': 'out',
                                    },
                                    {
                                        'maxConnections': -1,
                                        'maxCount': 1,
                                        'minCount': 1,
                                        'subType': 'none',
                                        'type': 'in',
                                    },
                                ],
                                'data': {
                                    'guiSettings': {
                                        'showAll': false,
                                    },
                                    'mapping': [
                                        {
                                            'source': {
                                                'expression': {
                                                    'outputScalarValue': {
                                                        'stringValue': 'Job will be run',
                                                        'type': 'function',
                                                        'value': 'Job will be run',
                                                    },
                                                    'type': 1,
                                                },
                                            },
                                            'target': {
                                                'path': 'output.output',
                                            },
                                        },
                                    ],
                                },
                                'name': 'assign',
                                'position': {
                                    'x': 535,
                                    'y': 285,
                                },
                                'type': 'DATA_MANIPULATION',
                                'version': 1,
                            },
                        ],
                    },
                },
            ],
            'structure': {
                'children': [
                    {
                        'name': 'Updated Integration Flow v2',
                        'type': 'RULE',
                        'version': 2,
                    },
                    {
                        'name': 'Updated Integration Flow v2',
                        'type': 'RULE',
                        'version': 1,
                    },
                ],
                'name': 'Folder Name',
                'type': 'FOLDER',
            },
        },
        'exportType': 'FOLDER',
        'version': 1,
    },
}
export const deleteRuleResult = ''
export const getRulesForSpaceResult = [
    {
        'description': '',
        'name': 'Integration Flow',
        'ruleAlias': 'overall-alligator',
        'status': 'published',
        'tags': [],
        'type': 'integration-flow',
        'version': 1
    },
    {
        'description': 'This Decision Table validates whether the shipment milestones are in the correct order; if not, a message is returned.',
        'name': 'Shipment Milestones',
        'status': 'published',
        'tags': [],
        'type': 'decision-table',
    }
]
export const renameFolderResult = ''
export const importFolderResult = 'folderNode'
export const getFolderStructureResult2 = {
    type: 'ROOT',
    name: 'Home',
    id: 'root',
    children: [
        {
            'name': 'Shipment Milestones',
            'type': 'RULE',
            'version': 1,
        },
        {
            'name': 'Integration Flow',
            'type': 'RULE',
            'version': 1
        },
        {
            name: 'New Name',
            type: 'FOLDER',
            children: []
        },
        {
            name: 'Folder Name',
            type: 'FOLDER',
            children: [
                {
                    'name': 'Updated Integration Flow v2',
                    'type': 'RULE',
                    'version': 1,
                },
                {
                    'name': 'Updated Integration Flow v2',
                    'type': 'RULE',
                    'version': 2,
                }]
        }
    ]
}
export const getFolderStructureResult3 = {
    name: 'Folder Name',
    type: 'FOLDER',
    children: [
        {
            version: 1,
            name: 'Updated Integration Flow v2',
            type: 'RULE'
        },
        {
            version: 2,
            name: 'Updated Integration Flow v2',
            type: 'RULE'
        }
    ]
}
export const moveFolderResult = ''
export const findFolderOrRuleByAttributeResult = [

    {
        'name': 'Integration Flow',
        'type': 'RULE',
        'version': 1
    },
    {
        'name': 'Shipment Milestones',
        'type': 'RULE',
        'version': 1,
    },
    {
        name: 'Updated Integration Flow v2',
        version: 2,
        ruleType: 'integration-flow',
        ruleStatus: 'pending',
        type: 'RULE',
        tags: [],
        description: '',
        path: '/New Name/Folder Name/Updated Integration Flow v2'
    },
    {
        name: 'Updated Integration Flow v2',
        version: 1,
        ruleType: 'integration-flow',
        ruleStatus: 'pending',
        type: 'RULE',
        tags: [],
        description: '',
        path: '/New Name/Folder Name/Updated Integration Flow v2'
    }
]
export const deleteFolderByPathResult = ''

export const start = {
    status: {
        state: 'WAITING',
        code: 'JOB_INITIALIZED',
        message: 'Job initialized'
    }
}
export const info = {
    ruleReference: {
        baseId: '715c5cd8-594b-22e2-c803-65f18403e8cd',
        version: 1,
        type: 'integration-flow'
    },
    inputData: {},
    context: {
        executorUser: null,
        environmentGroup: 'staging',
        priority: 1,
        parallelLimit: 1
    },
    status: {
        state: 'RUNNING',
        code: 'JOB_RUNNING',
        message: 'Job is being processed'
    },
}

export const cancel = {
    ruleReference: {
        version: 1,
        type: 'integration-flow'
    },
    inputData: {},
    context: {
        executorUser: null,
        environmentGroup: 'staging',
        priority: 1,
        parallelLimit: 1
    },
    status: {
        state: 'CANCELING',
        code: 'JOB_RUNNING',
        message: 'Job is being canceled'
    },
}

export const solve = [
    {
        'typeOfMilestoneResult': '24 21 20 17 16 13 12 9',
        'message': 'In wrong order for DHL operator'
    }
]