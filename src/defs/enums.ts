export enum HostEnum {
	GLOBAL_CLOUD = "global_cloud",
	REGION_EU = "region_eu",
	REGION_US = "region_us",
	REGION_AU = "region_au"
}

export enum MngCategoryEnum {
	RULE = "rule",
	SPACE = "space",
	TAGS = "tags",
	FOLDER = "folder",
	TOOLS = "tools",
	RULE_FLOW = "rule-flow"
}


export enum RuleStatus {
    PENDING = "pending",
    PUBLISHED = "published"
}

export enum FolderType {
    ROOT = "ROOT",
    FOLDER = "FOLDER",
    RULE = "RULE"
}

export enum StrategyOptions{
    STANDARD = 'STANDARD',
    ARRAY = 'ARRAY',
    FIRST_MATCH = 'FIRST_MATCH',
    EVALUATE_ALL = 'EVALUATE_ALL',
}