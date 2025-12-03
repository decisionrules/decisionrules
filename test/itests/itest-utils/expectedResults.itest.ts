export const createFolderResult = ''
export const getFolderStructureResult = {
    type: 'ROOT',
    name: 'Home',
    id: 'root',
    children: [
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
                'version': 1,
                'type': 'START',
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
    },
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
    },
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
                'version': 1,
                'type': 'START',
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
    },
}
export const updateRuleStatusResult1 = {
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
    },
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
    },
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
    },
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
    },
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
    },
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
                        'maxCount': 1,
                        'minCount': 1
                    }
                ],
                'version': 1,
                'type': 'START',
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
    },
}
export const getRuleByPathResult2 = {
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
                'version': 1,
                'type': 'START',
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
    },
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
                    'status': 'published',
                    'tags': [],
                    'type': 'integration-flow',
                    'version': 2,
                    'visualData': {
                        'rotate': 0,
                        'scale': 1,
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
                    'status': 'published',
                    'tags': [],
                    'type': 'integration-flow',
                    'version': 1,
                    'visualData': {
                        'rotate': 0,
                        'scale': 1,
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

]
export const renameFolderResult = ''
export const importFolderResult = 'folderNode'
export const getFolderStructureResult2 = {
    type: 'ROOT',
    name: 'Home',
    id: 'root',
    children: [
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
        name: 'Updated Integration Flow v2',
        version: 2,
        ruleType: 'integration-flow',
        ruleStatus: 'published',
        type: 'RULE',
        tags: [],
        description: '',
        path: '/New Name/Folder Name/Updated Integration Flow v2'
    },
    {
        name: 'Updated Integration Flow v2',
        version: 1,
        ruleType: 'integration-flow',
        ruleStatus: 'published',
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
    { output: true }
]