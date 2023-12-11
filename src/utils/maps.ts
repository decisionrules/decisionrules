import { HostEnum } from "../defs/enums";

export const apiMap = new Map<HostEnum, string>();

apiMap.set(HostEnum.GLOBAL_CLOUD, "https://api.decisionrules.io");
apiMap.set(HostEnum.REGION_EU, "https://eu.api.decisionrules.io");
apiMap.set(HostEnum.REGION_AU, "https://au.api.decisionrules.io");
apiMap.set(HostEnum.REGION_US, "https://us.api.decisionrules.io");

export const biMap = new Map<HostEnum, string>();

biMap.set(HostEnum.GLOBAL_CLOUD, "https://bi.decisionrules.io");
biMap.set(HostEnum.REGION_EU, "https://eu.bi.decisionrules.io");
biMap.set(HostEnum.REGION_AU, "https://au.bi.decisionrules.io");
biMap.set(HostEnum.REGION_US, "https://us.bi.decisionrules.io");
