//@ts-nocheck
import { Policy, PolicyAmino, PolicySDKType } from "../plans/policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ProjectKey_Type {
  NONE = 0,
  ADMIN = 1,
  DEVELOPER = 2,
  UNRECOGNIZED = -1,
}
export const ProjectKey_TypeSDKType = ProjectKey_Type;
export const ProjectKey_TypeAmino = ProjectKey_Type;
export function projectKey_TypeFromJSON(object: any): ProjectKey_Type {
  switch (object) {
    case 0:
    case "NONE":
      return ProjectKey_Type.NONE;
    case 1:
    case "ADMIN":
      return ProjectKey_Type.ADMIN;
    case 2:
    case "DEVELOPER":
      return ProjectKey_Type.DEVELOPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectKey_Type.UNRECOGNIZED;
  }
}
export function projectKey_TypeToJSON(object: ProjectKey_Type): string {
  switch (object) {
    case ProjectKey_Type.NONE:
      return "NONE";
    case ProjectKey_Type.ADMIN:
      return "ADMIN";
    case ProjectKey_Type.DEVELOPER:
      return "DEVELOPER";
    case ProjectKey_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Project {
  /** unique id that will be the combination of subscription address and project name, cannot be changed once created */
  index: string;
  /** the subscription address that owns the project */
  subscription: string;
  /** enabled flag */
  enabled: boolean;
  /** list of the projects keys */
  projectKeys: ProjectKey[];
  adminPolicy?: Policy;
  usedCu: bigint;
  subscriptionPolicy?: Policy;
  /** snapshot id to uniquely identify snapshots */
  snapshot: bigint;
}
export interface ProjectProtoMsg {
  typeUrl: "/lavanet.lava.projects.Project";
  value: Uint8Array;
}
export interface ProjectAmino {
  /** unique id that will be the combination of subscription address and project name, cannot be changed once created */
  index?: string;
  /** the subscription address that owns the project */
  subscription?: string;
  /** enabled flag */
  enabled?: boolean;
  /** list of the projects keys */
  project_keys: ProjectKeyAmino[];
  admin_policy: PolicyAmino;
  used_cu?: string;
  subscription_policy: PolicyAmino;
  /** snapshot id to uniquely identify snapshots */
  snapshot?: string;
}
export interface ProjectAminoMsg {
  type: "/lavanet.lava.projects.Project";
  value: ProjectAmino;
}
export interface ProjectSDKType {
  index: string;
  subscription: string;
  enabled: boolean;
  project_keys: ProjectKeySDKType[];
  admin_policy?: PolicySDKType;
  used_cu: bigint;
  subscription_policy?: PolicySDKType;
  snapshot: bigint;
}
export interface ProjectKey {
  /** the address of the project key */
  key: string;
  kinds: number;
}
export interface ProjectKeyProtoMsg {
  typeUrl: "/lavanet.lava.projects.ProjectKey";
  value: Uint8Array;
}
export interface ProjectKeyAmino {
  /** the address of the project key */
  key: string;
  kinds: number;
}
export interface ProjectKeyAminoMsg {
  type: "/lavanet.lava.projects.ProjectKey";
  value: ProjectKeyAmino;
}
export interface ProjectKeySDKType {
  key: string;
  kinds: number;
}
export interface ProtoDeveloperData {
  projectID: string;
}
export interface ProtoDeveloperDataProtoMsg {
  typeUrl: "/lavanet.lava.projects.ProtoDeveloperData";
  value: Uint8Array;
}
export interface ProtoDeveloperDataAmino {
  projectID?: string;
}
export interface ProtoDeveloperDataAminoMsg {
  type: "/lavanet.lava.projects.ProtoDeveloperData";
  value: ProtoDeveloperDataAmino;
}
export interface ProtoDeveloperDataSDKType {
  projectID: string;
}
/** used as a container struct for the subscription module */
export interface ProjectData {
  name: string;
  enabled: boolean;
  projectKeys: ProjectKey[];
  policy?: Policy;
}
export interface ProjectDataProtoMsg {
  typeUrl: "/lavanet.lava.projects.ProjectData";
  value: Uint8Array;
}
/** used as a container struct for the subscription module */
export interface ProjectDataAmino {
  name?: string;
  enabled?: boolean;
  projectKeys?: ProjectKeyAmino[];
  policy?: PolicyAmino;
}
export interface ProjectDataAminoMsg {
  type: "/lavanet.lava.projects.ProjectData";
  value: ProjectDataAmino;
}
/** used as a container struct for the subscription module */
export interface ProjectDataSDKType {
  name: string;
  enabled: boolean;
  projectKeys: ProjectKeySDKType[];
  policy?: PolicySDKType;
}
function createBaseProject(): Project {
  return {
    index: "",
    subscription: "",
    enabled: false,
    projectKeys: [],
    adminPolicy: undefined,
    usedCu: BigInt(0),
    subscriptionPolicy: undefined,
    snapshot: BigInt(0)
  };
}
export const Project = {
  typeUrl: "/lavanet.lava.projects.Project",
  is(o: any): o is Project {
    return o && (o.$typeUrl === Project.typeUrl || typeof o.index === "string" && typeof o.subscription === "string" && typeof o.enabled === "boolean" && Array.isArray(o.projectKeys) && (!o.projectKeys.length || ProjectKey.is(o.projectKeys[0])) && typeof o.usedCu === "bigint" && typeof o.snapshot === "bigint");
  },
  isSDK(o: any): o is ProjectSDKType {
    return o && (o.$typeUrl === Project.typeUrl || typeof o.index === "string" && typeof o.subscription === "string" && typeof o.enabled === "boolean" && Array.isArray(o.project_keys) && (!o.project_keys.length || ProjectKey.isSDK(o.project_keys[0])) && typeof o.used_cu === "bigint" && typeof o.snapshot === "bigint");
  },
  isAmino(o: any): o is ProjectAmino {
    return o && (o.$typeUrl === Project.typeUrl || typeof o.index === "string" && typeof o.subscription === "string" && typeof o.enabled === "boolean" && Array.isArray(o.project_keys) && (!o.project_keys.length || ProjectKey.isAmino(o.project_keys[0])) && typeof o.used_cu === "bigint" && typeof o.snapshot === "bigint");
  },
  encode(message: Project, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.adminPolicy !== undefined) {
      Policy.encode(message.adminPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(56).uint64(message.usedCu);
    }
    if (message.subscriptionPolicy !== undefined) {
      Policy.encode(message.subscriptionPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.snapshot !== BigInt(0)) {
      writer.uint32(72).uint64(message.snapshot);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Project {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.subscription = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 6:
          message.adminPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 7:
          message.usedCu = reader.uint64();
          break;
        case 8:
          message.subscriptionPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 9:
          message.snapshot = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Project {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      subscription: isSet(object.subscription) ? String(object.subscription) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : [],
      adminPolicy: isSet(object.adminPolicy) ? Policy.fromJSON(object.adminPolicy) : undefined,
      usedCu: isSet(object.usedCu) ? BigInt(object.usedCu.toString()) : BigInt(0),
      subscriptionPolicy: isSet(object.subscriptionPolicy) ? Policy.fromJSON(object.subscriptionPolicy) : undefined,
      snapshot: isSet(object.snapshot) ? BigInt(object.snapshot.toString()) : BigInt(0)
    };
  },
  toJSON(message: Project): JsonSafe<Project> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    message.adminPolicy !== undefined && (obj.adminPolicy = message.adminPolicy ? Policy.toJSON(message.adminPolicy) : undefined);
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || BigInt(0)).toString());
    message.subscriptionPolicy !== undefined && (obj.subscriptionPolicy = message.subscriptionPolicy ? Policy.toJSON(message.subscriptionPolicy) : undefined);
    message.snapshot !== undefined && (obj.snapshot = (message.snapshot || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.index = object.index ?? "";
    message.subscription = object.subscription ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? BigInt(object.snapshot.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProjectAmino): Project {
    const message = createBaseProject();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = object.subscription;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    message.projectKeys = object.project_keys?.map(e => ProjectKey.fromAmino(e)) || [];
    if (object.admin_policy !== undefined && object.admin_policy !== null) {
      message.adminPolicy = Policy.fromAmino(object.admin_policy);
    }
    if (object.used_cu !== undefined && object.used_cu !== null) {
      message.usedCu = BigInt(object.used_cu);
    }
    if (object.subscription_policy !== undefined && object.subscription_policy !== null) {
      message.subscriptionPolicy = Policy.fromAmino(object.subscription_policy);
    }
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = BigInt(object.snapshot);
    }
    return message;
  },
  toAmino(message: Project): ProjectAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.subscription = message.subscription === "" ? undefined : message.subscription;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = message.projectKeys;
    }
    obj.admin_policy = message.adminPolicy ? Policy.toAmino(message.adminPolicy) : Policy.toAmino(Policy.fromPartial({}));
    obj.used_cu = message.usedCu !== BigInt(0) ? (message.usedCu?.toString)() : undefined;
    obj.subscription_policy = message.subscriptionPolicy ? Policy.toAmino(message.subscriptionPolicy) : Policy.toAmino(Policy.fromPartial({}));
    obj.snapshot = message.snapshot !== BigInt(0) ? (message.snapshot?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectAminoMsg): Project {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectProtoMsg): Project {
    return Project.decode(message.value);
  },
  toProto(message: Project): Uint8Array {
    return Project.encode(message).finish();
  },
  toProtoMsg(message: Project): ProjectProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.Project",
      value: Project.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Project.typeUrl, Project);
function createBaseProjectKey(): ProjectKey {
  return {
    key: "",
    kinds: 0
  };
}
export const ProjectKey = {
  typeUrl: "/lavanet.lava.projects.ProjectKey",
  is(o: any): o is ProjectKey {
    return o && (o.$typeUrl === ProjectKey.typeUrl || typeof o.key === "string" && typeof o.kinds === "number");
  },
  isSDK(o: any): o is ProjectKeySDKType {
    return o && (o.$typeUrl === ProjectKey.typeUrl || typeof o.key === "string" && typeof o.kinds === "number");
  },
  isAmino(o: any): o is ProjectKeyAmino {
    return o && (o.$typeUrl === ProjectKey.typeUrl || typeof o.key === "string" && typeof o.kinds === "number");
  },
  encode(message: ProjectKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.kinds !== 0) {
      writer.uint32(32).uint32(message.kinds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 4:
          message.kinds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProjectKey {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      kinds: isSet(object.kinds) ? Number(object.kinds) : 0
    };
  },
  toJSON(message: ProjectKey): JsonSafe<ProjectKey> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.kinds !== undefined && (obj.kinds = Math.round(message.kinds));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProjectKey>, I>>(object: I): ProjectKey {
    const message = createBaseProjectKey();
    message.key = object.key ?? "";
    message.kinds = object.kinds ?? 0;
    return message;
  },
  fromAmino(object: ProjectKeyAmino): ProjectKey {
    const message = createBaseProjectKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.kinds !== undefined && object.kinds !== null) {
      message.kinds = object.kinds;
    }
    return message;
  },
  toAmino(message: ProjectKey): ProjectKeyAmino {
    const obj: any = {};
    obj.key = message.key ?? "";
    obj.kinds = message.kinds ?? 0;
    return obj;
  },
  fromAminoMsg(object: ProjectKeyAminoMsg): ProjectKey {
    return ProjectKey.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectKeyProtoMsg): ProjectKey {
    return ProjectKey.decode(message.value);
  },
  toProto(message: ProjectKey): Uint8Array {
    return ProjectKey.encode(message).finish();
  },
  toProtoMsg(message: ProjectKey): ProjectKeyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectKey",
      value: ProjectKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProjectKey.typeUrl, ProjectKey);
function createBaseProtoDeveloperData(): ProtoDeveloperData {
  return {
    projectID: ""
  };
}
export const ProtoDeveloperData = {
  typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
  is(o: any): o is ProtoDeveloperData {
    return o && (o.$typeUrl === ProtoDeveloperData.typeUrl || typeof o.projectID === "string");
  },
  isSDK(o: any): o is ProtoDeveloperDataSDKType {
    return o && (o.$typeUrl === ProtoDeveloperData.typeUrl || typeof o.projectID === "string");
  },
  isAmino(o: any): o is ProtoDeveloperDataAmino {
    return o && (o.$typeUrl === ProtoDeveloperData.typeUrl || typeof o.projectID === "string");
  },
  encode(message: ProtoDeveloperData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProtoDeveloperData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeveloperData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProtoDeveloperData {
    return {
      projectID: isSet(object.projectID) ? String(object.projectID) : ""
    };
  },
  toJSON(message: ProtoDeveloperData): JsonSafe<ProtoDeveloperData> {
    const obj: any = {};
    message.projectID !== undefined && (obj.projectID = message.projectID);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProtoDeveloperData>, I>>(object: I): ProtoDeveloperData {
    const message = createBaseProtoDeveloperData();
    message.projectID = object.projectID ?? "";
    return message;
  },
  fromAmino(object: ProtoDeveloperDataAmino): ProtoDeveloperData {
    const message = createBaseProtoDeveloperData();
    if (object.projectID !== undefined && object.projectID !== null) {
      message.projectID = object.projectID;
    }
    return message;
  },
  toAmino(message: ProtoDeveloperData): ProtoDeveloperDataAmino {
    const obj: any = {};
    obj.projectID = message.projectID === "" ? undefined : message.projectID;
    return obj;
  },
  fromAminoMsg(object: ProtoDeveloperDataAminoMsg): ProtoDeveloperData {
    return ProtoDeveloperData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtoDeveloperDataProtoMsg): ProtoDeveloperData {
    return ProtoDeveloperData.decode(message.value);
  },
  toProto(message: ProtoDeveloperData): Uint8Array {
    return ProtoDeveloperData.encode(message).finish();
  },
  toProtoMsg(message: ProtoDeveloperData): ProtoDeveloperDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
      value: ProtoDeveloperData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProtoDeveloperData.typeUrl, ProtoDeveloperData);
function createBaseProjectData(): ProjectData {
  return {
    name: "",
    enabled: false,
    projectKeys: [],
    policy: undefined
  };
}
export const ProjectData = {
  typeUrl: "/lavanet.lava.projects.ProjectData",
  is(o: any): o is ProjectData {
    return o && (o.$typeUrl === ProjectData.typeUrl || typeof o.name === "string" && typeof o.enabled === "boolean" && Array.isArray(o.projectKeys) && (!o.projectKeys.length || ProjectKey.is(o.projectKeys[0])));
  },
  isSDK(o: any): o is ProjectDataSDKType {
    return o && (o.$typeUrl === ProjectData.typeUrl || typeof o.name === "string" && typeof o.enabled === "boolean" && Array.isArray(o.projectKeys) && (!o.projectKeys.length || ProjectKey.isSDK(o.projectKeys[0])));
  },
  isAmino(o: any): o is ProjectDataAmino {
    return o && (o.$typeUrl === ProjectData.typeUrl || typeof o.name === "string" && typeof o.enabled === "boolean" && Array.isArray(o.projectKeys) && (!o.projectKeys.length || ProjectKey.isAmino(o.projectKeys[0])));
  },
  encode(message: ProjectData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 5:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProjectData {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : [],
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: ProjectData): JsonSafe<ProjectData> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProjectData>, I>>(object: I): ProjectData {
    const message = createBaseProjectData();
    message.name = object.name ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: ProjectDataAmino): ProjectData {
    const message = createBaseProjectData();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromAmino(e)) || [];
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: ProjectData): ProjectDataAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.projectKeys = message.projectKeys;
    }
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectDataAminoMsg): ProjectData {
    return ProjectData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectDataProtoMsg): ProjectData {
    return ProjectData.decode(message.value);
  },
  toProto(message: ProjectData): Uint8Array {
    return ProjectData.encode(message).finish();
  },
  toProtoMsg(message: ProjectData): ProjectDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectData",
      value: ProjectData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProjectData.typeUrl, ProjectData);