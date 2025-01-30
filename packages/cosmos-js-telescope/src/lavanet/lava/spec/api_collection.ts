//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ParseValue_VerificationSeverity {
  Fail = 0,
  Warning = 1,
  UNRECOGNIZED = -1,
}
export const ParseValue_VerificationSeveritySDKType = ParseValue_VerificationSeverity;
export const ParseValue_VerificationSeverityAmino = ParseValue_VerificationSeverity;
export function parseValue_VerificationSeverityFromJSON(object: any): ParseValue_VerificationSeverity {
  switch (object) {
    case 0:
    case "Fail":
      return ParseValue_VerificationSeverity.Fail;
    case 1:
    case "Warning":
      return ParseValue_VerificationSeverity.Warning;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ParseValue_VerificationSeverity.UNRECOGNIZED;
  }
}
export function parseValue_VerificationSeverityToJSON(object: ParseValue_VerificationSeverity): string {
  switch (object) {
    case ParseValue_VerificationSeverity.Fail:
      return "Fail";
    case ParseValue_VerificationSeverity.Warning:
      return "Warning";
    case ParseValue_VerificationSeverity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum Header_HeaderType {
  pass_send = 0,
  pass_reply = 1,
  pass_both = 2,
  /** pass_ignore - allows it to pass around but is not signed */
  pass_ignore = 3,
  UNRECOGNIZED = -1,
}
export const Header_HeaderTypeSDKType = Header_HeaderType;
export const Header_HeaderTypeAmino = Header_HeaderType;
export function header_HeaderTypeFromJSON(object: any): Header_HeaderType {
  switch (object) {
    case 0:
    case "pass_send":
      return Header_HeaderType.pass_send;
    case 1:
    case "pass_reply":
      return Header_HeaderType.pass_reply;
    case 2:
    case "pass_both":
      return Header_HeaderType.pass_both;
    case 3:
    case "pass_ignore":
      return Header_HeaderType.pass_ignore;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Header_HeaderType.UNRECOGNIZED;
  }
}
export function header_HeaderTypeToJSON(object: Header_HeaderType): string {
  switch (object) {
    case Header_HeaderType.pass_send:
      return "pass_send";
    case Header_HeaderType.pass_reply:
      return "pass_reply";
    case Header_HeaderType.pass_both:
      return "pass_both";
    case Header_HeaderType.pass_ignore:
      return "pass_ignore";
    case Header_HeaderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum EXTENSION {
  NONE = 0,
  ARCHIVE = 1,
  UNRECOGNIZED = -1,
}
export const EXTENSIONSDKType = EXTENSION;
export const EXTENSIONAmino = EXTENSION;
export function eXTENSIONFromJSON(object: any): EXTENSION {
  switch (object) {
    case 0:
    case "NONE":
      return EXTENSION.NONE;
    case 1:
    case "ARCHIVE":
      return EXTENSION.ARCHIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EXTENSION.UNRECOGNIZED;
  }
}
export function eXTENSIONToJSON(object: EXTENSION): string {
  switch (object) {
    case EXTENSION.NONE:
      return "NONE";
    case EXTENSION.ARCHIVE:
      return "ARCHIVE";
    case EXTENSION.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FUNCTION_TAG {
  DISABLED = 0,
  GET_BLOCKNUM = 1,
  GET_BLOCK_BY_NUM = 2,
  SET_LATEST_IN_METADATA = 3,
  SET_LATEST_IN_BODY = 4,
  VERIFICATION = 5,
  GET_EARLIEST_BLOCK = 6,
  SUBSCRIBE = 7,
  UNSUBSCRIBE = 8,
  UNSUBSCRIBE_ALL = 9,
  UNRECOGNIZED = -1,
}
export const FUNCTION_TAGSDKType = FUNCTION_TAG;
export const FUNCTION_TAGAmino = FUNCTION_TAG;
export function fUNCTION_TAGFromJSON(object: any): FUNCTION_TAG {
  switch (object) {
    case 0:
    case "DISABLED":
      return FUNCTION_TAG.DISABLED;
    case 1:
    case "GET_BLOCKNUM":
      return FUNCTION_TAG.GET_BLOCKNUM;
    case 2:
    case "GET_BLOCK_BY_NUM":
      return FUNCTION_TAG.GET_BLOCK_BY_NUM;
    case 3:
    case "SET_LATEST_IN_METADATA":
      return FUNCTION_TAG.SET_LATEST_IN_METADATA;
    case 4:
    case "SET_LATEST_IN_BODY":
      return FUNCTION_TAG.SET_LATEST_IN_BODY;
    case 5:
    case "VERIFICATION":
      return FUNCTION_TAG.VERIFICATION;
    case 6:
    case "GET_EARLIEST_BLOCK":
      return FUNCTION_TAG.GET_EARLIEST_BLOCK;
    case 7:
    case "SUBSCRIBE":
      return FUNCTION_TAG.SUBSCRIBE;
    case 8:
    case "UNSUBSCRIBE":
      return FUNCTION_TAG.UNSUBSCRIBE;
    case 9:
    case "UNSUBSCRIBE_ALL":
      return FUNCTION_TAG.UNSUBSCRIBE_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FUNCTION_TAG.UNRECOGNIZED;
  }
}
export function fUNCTION_TAGToJSON(object: FUNCTION_TAG): string {
  switch (object) {
    case FUNCTION_TAG.DISABLED:
      return "DISABLED";
    case FUNCTION_TAG.GET_BLOCKNUM:
      return "GET_BLOCKNUM";
    case FUNCTION_TAG.GET_BLOCK_BY_NUM:
      return "GET_BLOCK_BY_NUM";
    case FUNCTION_TAG.SET_LATEST_IN_METADATA:
      return "SET_LATEST_IN_METADATA";
    case FUNCTION_TAG.SET_LATEST_IN_BODY:
      return "SET_LATEST_IN_BODY";
    case FUNCTION_TAG.VERIFICATION:
      return "VERIFICATION";
    case FUNCTION_TAG.GET_EARLIEST_BLOCK:
      return "GET_EARLIEST_BLOCK";
    case FUNCTION_TAG.SUBSCRIBE:
      return "SUBSCRIBE";
    case FUNCTION_TAG.UNSUBSCRIBE:
      return "UNSUBSCRIBE";
    case FUNCTION_TAG.UNSUBSCRIBE_ALL:
      return "UNSUBSCRIBE_ALL";
    case FUNCTION_TAG.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PARSER_TYPE {
  NO_PARSER = 0,
  BLOCK_LATEST = 1,
  BLOCK_EARLIEST = 2,
  RESULT = 3,
  EXTENSION_ARG = 4,
  IDENTIFIER = 5,
  DEFAULT_VALUE = 6,
  BLOCK_HASH = 7,
  UNRECOGNIZED = -1,
}
export const PARSER_TYPESDKType = PARSER_TYPE;
export const PARSER_TYPEAmino = PARSER_TYPE;
export function pARSER_TYPEFromJSON(object: any): PARSER_TYPE {
  switch (object) {
    case 0:
    case "NO_PARSER":
      return PARSER_TYPE.NO_PARSER;
    case 1:
    case "BLOCK_LATEST":
      return PARSER_TYPE.BLOCK_LATEST;
    case 2:
    case "BLOCK_EARLIEST":
      return PARSER_TYPE.BLOCK_EARLIEST;
    case 3:
    case "RESULT":
      return PARSER_TYPE.RESULT;
    case 4:
    case "EXTENSION_ARG":
      return PARSER_TYPE.EXTENSION_ARG;
    case 5:
    case "IDENTIFIER":
      return PARSER_TYPE.IDENTIFIER;
    case 6:
    case "DEFAULT_VALUE":
      return PARSER_TYPE.DEFAULT_VALUE;
    case 7:
    case "BLOCK_HASH":
      return PARSER_TYPE.BLOCK_HASH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PARSER_TYPE.UNRECOGNIZED;
  }
}
export function pARSER_TYPEToJSON(object: PARSER_TYPE): string {
  switch (object) {
    case PARSER_TYPE.NO_PARSER:
      return "NO_PARSER";
    case PARSER_TYPE.BLOCK_LATEST:
      return "BLOCK_LATEST";
    case PARSER_TYPE.BLOCK_EARLIEST:
      return "BLOCK_EARLIEST";
    case PARSER_TYPE.RESULT:
      return "RESULT";
    case PARSER_TYPE.EXTENSION_ARG:
      return "EXTENSION_ARG";
    case PARSER_TYPE.IDENTIFIER:
      return "IDENTIFIER";
    case PARSER_TYPE.DEFAULT_VALUE:
      return "DEFAULT_VALUE";
    case PARSER_TYPE.BLOCK_HASH:
      return "BLOCK_HASH";
    case PARSER_TYPE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PARSER_FUNC {
  EMPTY = 0,
  /** PARSE_BY_ARG - means parameters are ordered and flat expected arguments are: [param index] (example: PARAMS: [<#BlockNum>,"banana"]) args: 0 */
  PARSE_BY_ARG = 1,
  /** PARSE_CANONICAL - means parameters are ordered and one of them has named properties, expected arguments are: [param index to object,prop_name in object] (example: PARAMS: ["banana",{prop_name:<#BlockNum>}]) need to configure args: 1,"prop_name" */
  PARSE_CANONICAL = 2,
  /** PARSE_DICTIONARY - means parameters are named, expected arguments are [prop_name,separator] (example: PARAMS: {prop_name:<#BlockNum>,prop2:"banana"}) args: "prop_name" */
  PARSE_DICTIONARY = 3,
  /** PARSE_DICTIONARY_OR_ORDERED - means parameters are named expected arguments are [prop_name,separator,parameter order if not found] for input of: block=15&address=abc OR ?abc,15 we will do args: block,=,1 */
  PARSE_DICTIONARY_OR_ORDERED = 4,
  /** DEFAULT - reserved */
  DEFAULT = 6,
  UNRECOGNIZED = -1,
}
export const PARSER_FUNCSDKType = PARSER_FUNC;
export const PARSER_FUNCAmino = PARSER_FUNC;
export function pARSER_FUNCFromJSON(object: any): PARSER_FUNC {
  switch (object) {
    case 0:
    case "EMPTY":
      return PARSER_FUNC.EMPTY;
    case 1:
    case "PARSE_BY_ARG":
      return PARSER_FUNC.PARSE_BY_ARG;
    case 2:
    case "PARSE_CANONICAL":
      return PARSER_FUNC.PARSE_CANONICAL;
    case 3:
    case "PARSE_DICTIONARY":
      return PARSER_FUNC.PARSE_DICTIONARY;
    case 4:
    case "PARSE_DICTIONARY_OR_ORDERED":
      return PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED;
    case 6:
    case "DEFAULT":
      return PARSER_FUNC.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PARSER_FUNC.UNRECOGNIZED;
  }
}
export function pARSER_FUNCToJSON(object: PARSER_FUNC): string {
  switch (object) {
    case PARSER_FUNC.EMPTY:
      return "EMPTY";
    case PARSER_FUNC.PARSE_BY_ARG:
      return "PARSE_BY_ARG";
    case PARSER_FUNC.PARSE_CANONICAL:
      return "PARSE_CANONICAL";
    case PARSER_FUNC.PARSE_DICTIONARY:
      return "PARSE_DICTIONARY";
    case PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED:
      return "PARSE_DICTIONARY_OR_ORDERED";
    case PARSER_FUNC.DEFAULT:
      return "DEFAULT";
    case PARSER_FUNC.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ApiCollection {
  enabled: boolean;
  collectionData: CollectionData;
  apis: Api[];
  headers: Header[];
  /** by collectionKey */
  inheritanceApis: CollectionData[];
  parseDirectives: ParseDirective[];
  extensions: Extension[];
  verifications: Verification[];
}
export interface ApiCollectionProtoMsg {
  typeUrl: "/lavanet.lava.spec.ApiCollection";
  value: Uint8Array;
}
export interface ApiCollectionAmino {
  enabled?: boolean;
  collection_data?: CollectionDataAmino;
  apis?: ApiAmino[];
  headers?: HeaderAmino[];
  /** by collectionKey */
  inheritance_apis?: CollectionDataAmino[];
  parse_directives?: ParseDirectiveAmino[];
  extensions?: ExtensionAmino[];
  verifications?: VerificationAmino[];
}
export interface ApiCollectionAminoMsg {
  type: "/lavanet.lava.spec.ApiCollection";
  value: ApiCollectionAmino;
}
export interface ApiCollectionSDKType {
  enabled: boolean;
  collection_data: CollectionDataSDKType;
  apis: ApiSDKType[];
  headers: HeaderSDKType[];
  inheritance_apis: CollectionDataSDKType[];
  parse_directives: ParseDirectiveSDKType[];
  extensions: ExtensionSDKType[];
  verifications: VerificationSDKType[];
}
export interface Extension {
  name: string;
  rule?: Rule;
  cuMultiplier: bigint;
}
export interface ExtensionProtoMsg {
  typeUrl: "/lavanet.lava.spec.Extension";
  value: Uint8Array;
}
export interface ExtensionAmino {
  name?: string;
  rule?: RuleAmino;
  cu_multiplier?: string;
}
export interface ExtensionAminoMsg {
  type: "/lavanet.lava.spec.Extension";
  value: ExtensionAmino;
}
export interface ExtensionSDKType {
  name: string;
  rule?: RuleSDKType;
  cu_multiplier: bigint;
}
export interface Rule {
  block: bigint;
}
export interface RuleProtoMsg {
  typeUrl: "/lavanet.lava.spec.Rule";
  value: Uint8Array;
}
export interface RuleAmino {
  block?: string;
}
export interface RuleAminoMsg {
  type: "/lavanet.lava.spec.Rule";
  value: RuleAmino;
}
export interface RuleSDKType {
  block: bigint;
}
export interface Verification {
  name: string;
  parseDirective?: ParseDirective;
  values: ParseValue[];
}
export interface VerificationProtoMsg {
  typeUrl: "/lavanet.lava.spec.Verification";
  value: Uint8Array;
}
export interface VerificationAmino {
  name?: string;
  parse_directive?: ParseDirectiveAmino;
  values?: ParseValueAmino[];
}
export interface VerificationAminoMsg {
  type: "/lavanet.lava.spec.Verification";
  value: VerificationAmino;
}
export interface VerificationSDKType {
  name: string;
  parse_directive?: ParseDirectiveSDKType;
  values: ParseValueSDKType[];
}
export interface ParseValue {
  extension: string;
  expectedValue: string;
  latestDistance: bigint;
  severity: ParseValue_VerificationSeverity;
}
export interface ParseValueProtoMsg {
  typeUrl: "/lavanet.lava.spec.ParseValue";
  value: Uint8Array;
}
export interface ParseValueAmino {
  extension?: string;
  expected_value?: string;
  latest_distance?: string;
  severity?: ParseValue_VerificationSeverity;
}
export interface ParseValueAminoMsg {
  type: "/lavanet.lava.spec.ParseValue";
  value: ParseValueAmino;
}
export interface ParseValueSDKType {
  extension: string;
  expected_value: string;
  latest_distance: bigint;
  severity: ParseValue_VerificationSeverity;
}
export interface CollectionData {
  apiInterface: string;
  internalPath: string;
  type: string;
  addOn: string;
}
export interface CollectionDataProtoMsg {
  typeUrl: "/lavanet.lava.spec.CollectionData";
  value: Uint8Array;
}
export interface CollectionDataAmino {
  api_interface: string;
  internal_path: string;
  type: string;
  add_on: string;
}
export interface CollectionDataAminoMsg {
  type: "/lavanet.lava.spec.CollectionData";
  value: CollectionDataAmino;
}
export interface CollectionDataSDKType {
  api_interface: string;
  internal_path: string;
  type: string;
  add_on: string;
}
export interface Header {
  name: string;
  kind: Header_HeaderType;
  functionTag: FUNCTION_TAG;
}
export interface HeaderProtoMsg {
  typeUrl: "/lavanet.lava.spec.Header";
  value: Uint8Array;
}
export interface HeaderAmino {
  name?: string;
  kind?: Header_HeaderType;
  function_tag?: FUNCTION_TAG;
}
export interface HeaderAminoMsg {
  type: "/lavanet.lava.spec.Header";
  value: HeaderAmino;
}
export interface HeaderSDKType {
  name: string;
  kind: Header_HeaderType;
  function_tag: FUNCTION_TAG;
}
export interface Api {
  enabled: boolean;
  name: string;
  computeUnits: bigint;
  extraComputeUnits: bigint;
  category: SpecCategory;
  blockParsing: BlockParser;
  timeoutMs: bigint;
  parsers: GenericParser[];
}
export interface ApiProtoMsg {
  typeUrl: "/lavanet.lava.spec.Api";
  value: Uint8Array;
}
export interface ApiAmino {
  enabled?: boolean;
  name?: string;
  compute_units?: string;
  extra_compute_units?: string;
  category?: SpecCategoryAmino;
  block_parsing?: BlockParserAmino;
  timeout_ms?: string;
  parsers?: GenericParserAmino[];
}
export interface ApiAminoMsg {
  type: "/lavanet.lava.spec.Api";
  value: ApiAmino;
}
export interface ApiSDKType {
  enabled: boolean;
  name: string;
  compute_units: bigint;
  extra_compute_units: bigint;
  category: SpecCategorySDKType;
  block_parsing: BlockParserSDKType;
  timeout_ms: bigint;
  parsers: GenericParserSDKType[];
}
export interface ParseDirective {
  functionTag: FUNCTION_TAG;
  functionTemplate: string;
  resultParsing: BlockParser;
  apiName: string;
  parsers: GenericParser[];
}
export interface ParseDirectiveProtoMsg {
  typeUrl: "/lavanet.lava.spec.ParseDirective";
  value: Uint8Array;
}
export interface ParseDirectiveAmino {
  function_tag?: FUNCTION_TAG;
  function_template?: string;
  result_parsing?: BlockParserAmino;
  api_name?: string;
  parsers?: GenericParserAmino[];
}
export interface ParseDirectiveAminoMsg {
  type: "/lavanet.lava.spec.ParseDirective";
  value: ParseDirectiveAmino;
}
export interface ParseDirectiveSDKType {
  function_tag: FUNCTION_TAG;
  function_template: string;
  result_parsing: BlockParserSDKType;
  api_name: string;
  parsers: GenericParserSDKType[];
}
export interface BlockParser {
  parserArg: string[];
  parserFunc: PARSER_FUNC;
  /** default value when set allows parsing failures to assume the default value */
  defaultValue: string;
  /** used to parse byte responses: base64,hex,bech32 */
  encoding: string;
}
export interface BlockParserProtoMsg {
  typeUrl: "/lavanet.lava.spec.BlockParser";
  value: Uint8Array;
}
export interface BlockParserAmino {
  parser_arg?: string[];
  parser_func?: PARSER_FUNC;
  /** default value when set allows parsing failures to assume the default value */
  default_value?: string;
  /** used to parse byte responses: base64,hex,bech32 */
  encoding?: string;
}
export interface BlockParserAminoMsg {
  type: "/lavanet.lava.spec.BlockParser";
  value: BlockParserAmino;
}
export interface BlockParserSDKType {
  parser_arg: string[];
  parser_func: PARSER_FUNC;
  default_value: string;
  encoding: string;
}
export interface GenericParser {
  parsePath: string;
  value: string;
  parseType: PARSER_TYPE;
  rule: string;
}
export interface GenericParserProtoMsg {
  typeUrl: "/lavanet.lava.spec.GenericParser";
  value: Uint8Array;
}
export interface GenericParserAmino {
  parse_path?: string;
  value?: string;
  parse_type?: PARSER_TYPE;
  rule?: string;
}
export interface GenericParserAminoMsg {
  type: "/lavanet.lava.spec.GenericParser";
  value: GenericParserAmino;
}
export interface GenericParserSDKType {
  parse_path: string;
  value: string;
  parse_type: PARSER_TYPE;
  rule: string;
}
export interface SpecCategory {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
  hangingApi: boolean;
}
export interface SpecCategoryProtoMsg {
  typeUrl: "/lavanet.lava.spec.SpecCategory";
  value: Uint8Array;
}
export interface SpecCategoryAmino {
  deterministic?: boolean;
  local?: boolean;
  subscription?: boolean;
  stateful?: number;
  hanging_api?: boolean;
}
export interface SpecCategoryAminoMsg {
  type: "/lavanet.lava.spec.SpecCategory";
  value: SpecCategoryAmino;
}
export interface SpecCategorySDKType {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
  hanging_api: boolean;
}
function createBaseApiCollection(): ApiCollection {
  return {
    enabled: false,
    collectionData: CollectionData.fromPartial({}),
    apis: [],
    headers: [],
    inheritanceApis: [],
    parseDirectives: [],
    extensions: [],
    verifications: []
  };
}
export const ApiCollection = {
  typeUrl: "/lavanet.lava.spec.ApiCollection",
  is(o: any): o is ApiCollection {
    return o && (o.$typeUrl === ApiCollection.typeUrl || typeof o.enabled === "boolean" && CollectionData.is(o.collectionData) && Array.isArray(o.apis) && (!o.apis.length || Api.is(o.apis[0])) && Array.isArray(o.headers) && (!o.headers.length || Header.is(o.headers[0])) && Array.isArray(o.inheritanceApis) && (!o.inheritanceApis.length || CollectionData.is(o.inheritanceApis[0])) && Array.isArray(o.parseDirectives) && (!o.parseDirectives.length || ParseDirective.is(o.parseDirectives[0])) && Array.isArray(o.extensions) && (!o.extensions.length || Extension.is(o.extensions[0])) && Array.isArray(o.verifications) && (!o.verifications.length || Verification.is(o.verifications[0])));
  },
  isSDK(o: any): o is ApiCollectionSDKType {
    return o && (o.$typeUrl === ApiCollection.typeUrl || typeof o.enabled === "boolean" && CollectionData.isSDK(o.collection_data) && Array.isArray(o.apis) && (!o.apis.length || Api.isSDK(o.apis[0])) && Array.isArray(o.headers) && (!o.headers.length || Header.isSDK(o.headers[0])) && Array.isArray(o.inheritance_apis) && (!o.inheritance_apis.length || CollectionData.isSDK(o.inheritance_apis[0])) && Array.isArray(o.parse_directives) && (!o.parse_directives.length || ParseDirective.isSDK(o.parse_directives[0])) && Array.isArray(o.extensions) && (!o.extensions.length || Extension.isSDK(o.extensions[0])) && Array.isArray(o.verifications) && (!o.verifications.length || Verification.isSDK(o.verifications[0])));
  },
  isAmino(o: any): o is ApiCollectionAmino {
    return o && (o.$typeUrl === ApiCollection.typeUrl || typeof o.enabled === "boolean" && CollectionData.isAmino(o.collection_data) && Array.isArray(o.apis) && (!o.apis.length || Api.isAmino(o.apis[0])) && Array.isArray(o.headers) && (!o.headers.length || Header.isAmino(o.headers[0])) && Array.isArray(o.inheritance_apis) && (!o.inheritance_apis.length || CollectionData.isAmino(o.inheritance_apis[0])) && Array.isArray(o.parse_directives) && (!o.parse_directives.length || ParseDirective.isAmino(o.parse_directives[0])) && Array.isArray(o.extensions) && (!o.extensions.length || Extension.isAmino(o.extensions[0])) && Array.isArray(o.verifications) && (!o.verifications.length || Verification.isAmino(o.verifications[0])));
  },
  encode(message: ApiCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.collectionData !== undefined) {
      CollectionData.encode(message.collectionData, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.headers) {
      Header.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.inheritanceApis) {
      CollectionData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.parseDirectives) {
      ParseDirective.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.verifications) {
      Verification.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApiCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.collectionData = CollectionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 4:
          message.headers.push(Header.decode(reader, reader.uint32()));
          break;
        case 5:
          message.inheritanceApis.push(CollectionData.decode(reader, reader.uint32()));
          break;
        case 6:
          message.parseDirectives.push(ParseDirective.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extensions.push(Extension.decode(reader, reader.uint32()));
          break;
        case 8:
          message.verifications.push(Verification.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ApiCollection {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      collectionData: isSet(object.collectionData) ? CollectionData.fromJSON(object.collectionData) : undefined,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromJSON(e)) : [],
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => Header.fromJSON(e)) : [],
      inheritanceApis: Array.isArray(object?.inheritanceApis) ? object.inheritanceApis.map((e: any) => CollectionData.fromJSON(e)) : [],
      parseDirectives: Array.isArray(object?.parseDirectives) ? object.parseDirectives.map((e: any) => ParseDirective.fromJSON(e)) : [],
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Extension.fromJSON(e)) : [],
      verifications: Array.isArray(object?.verifications) ? object.verifications.map((e: any) => Verification.fromJSON(e)) : []
    };
  },
  toJSON(message: ApiCollection): JsonSafe<ApiCollection> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.collectionData !== undefined && (obj.collectionData = message.collectionData ? CollectionData.toJSON(message.collectionData) : undefined);
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toJSON(e) : undefined);
    } else {
      obj.headers = [];
    }
    if (message.inheritanceApis) {
      obj.inheritanceApis = message.inheritanceApis.map(e => e ? CollectionData.toJSON(e) : undefined);
    } else {
      obj.inheritanceApis = [];
    }
    if (message.parseDirectives) {
      obj.parseDirectives = message.parseDirectives.map(e => e ? ParseDirective.toJSON(e) : undefined);
    } else {
      obj.parseDirectives = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Extension.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }
    if (message.verifications) {
      obj.verifications = message.verifications.map(e => e ? Verification.toJSON(e) : undefined);
    } else {
      obj.verifications = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ApiCollection>, I>>(object: I): ApiCollection {
    const message = createBaseApiCollection();
    message.enabled = object.enabled ?? false;
    message.collectionData = object.collectionData !== undefined && object.collectionData !== null ? CollectionData.fromPartial(object.collectionData) : undefined;
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.headers = object.headers?.map(e => Header.fromPartial(e)) || [];
    message.inheritanceApis = object.inheritanceApis?.map(e => CollectionData.fromPartial(e)) || [];
    message.parseDirectives = object.parseDirectives?.map(e => ParseDirective.fromPartial(e)) || [];
    message.extensions = object.extensions?.map(e => Extension.fromPartial(e)) || [];
    message.verifications = object.verifications?.map(e => Verification.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ApiCollectionAmino): ApiCollection {
    const message = createBaseApiCollection();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.collection_data !== undefined && object.collection_data !== null) {
      message.collectionData = CollectionData.fromAmino(object.collection_data);
    }
    message.apis = object.apis?.map(e => Api.fromAmino(e)) || [];
    message.headers = object.headers?.map(e => Header.fromAmino(e)) || [];
    message.inheritanceApis = object.inheritance_apis?.map(e => CollectionData.fromAmino(e)) || [];
    message.parseDirectives = object.parse_directives?.map(e => ParseDirective.fromAmino(e)) || [];
    message.extensions = object.extensions?.map(e => Extension.fromAmino(e)) || [];
    message.verifications = object.verifications?.map(e => Verification.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ApiCollection): ApiCollectionAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.collection_data = message.collectionData ? CollectionData.toAmino(message.collectionData) : undefined;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = message.apis;
    }
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toAmino(e) : undefined);
    } else {
      obj.headers = message.headers;
    }
    if (message.inheritanceApis) {
      obj.inheritance_apis = message.inheritanceApis.map(e => e ? CollectionData.toAmino(e) : undefined);
    } else {
      obj.inheritance_apis = message.inheritanceApis;
    }
    if (message.parseDirectives) {
      obj.parse_directives = message.parseDirectives.map(e => e ? ParseDirective.toAmino(e) : undefined);
    } else {
      obj.parse_directives = message.parseDirectives;
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Extension.toAmino(e) : undefined);
    } else {
      obj.extensions = message.extensions;
    }
    if (message.verifications) {
      obj.verifications = message.verifications.map(e => e ? Verification.toAmino(e) : undefined);
    } else {
      obj.verifications = message.verifications;
    }
    return obj;
  },
  fromAminoMsg(object: ApiCollectionAminoMsg): ApiCollection {
    return ApiCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiCollectionProtoMsg): ApiCollection {
    return ApiCollection.decode(message.value);
  },
  toProto(message: ApiCollection): Uint8Array {
    return ApiCollection.encode(message).finish();
  },
  toProtoMsg(message: ApiCollection): ApiCollectionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ApiCollection",
      value: ApiCollection.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ApiCollection.typeUrl, ApiCollection);
function createBaseExtension(): Extension {
  return {
    name: "",
    rule: undefined,
    cuMultiplier: BigInt(0)
  };
}
export const Extension = {
  typeUrl: "/lavanet.lava.spec.Extension",
  is(o: any): o is Extension {
    return o && (o.$typeUrl === Extension.typeUrl || typeof o.name === "string" && typeof o.cuMultiplier === "bigint");
  },
  isSDK(o: any): o is ExtensionSDKType {
    return o && (o.$typeUrl === Extension.typeUrl || typeof o.name === "string" && typeof o.cu_multiplier === "bigint");
  },
  isAmino(o: any): o is ExtensionAmino {
    return o && (o.$typeUrl === Extension.typeUrl || typeof o.name === "string" && typeof o.cu_multiplier === "bigint");
  },
  encode(message: Extension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.rule !== undefined) {
      Rule.encode(message.rule, writer.uint32(26).fork()).ldelim();
    }
    if (message.cuMultiplier !== BigInt(0)) {
      writer.uint32(32).uint64(message.cuMultiplier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Extension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.rule = Rule.decode(reader, reader.uint32());
          break;
        case 4:
          message.cuMultiplier = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Extension {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      rule: isSet(object.rule) ? Rule.fromJSON(object.rule) : undefined,
      cuMultiplier: isSet(object.cuMultiplier) ? BigInt(object.cuMultiplier.toString()) : BigInt(0)
    };
  },
  toJSON(message: Extension): JsonSafe<Extension> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.rule !== undefined && (obj.rule = message.rule ? Rule.toJSON(message.rule) : undefined);
    message.cuMultiplier !== undefined && (obj.cuMultiplier = (message.cuMultiplier || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Extension>, I>>(object: I): Extension {
    const message = createBaseExtension();
    message.name = object.name ?? "";
    message.rule = object.rule !== undefined && object.rule !== null ? Rule.fromPartial(object.rule) : undefined;
    message.cuMultiplier = object.cuMultiplier !== undefined && object.cuMultiplier !== null ? BigInt(object.cuMultiplier.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ExtensionAmino): Extension {
    const message = createBaseExtension();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = Rule.fromAmino(object.rule);
    }
    if (object.cu_multiplier !== undefined && object.cu_multiplier !== null) {
      message.cuMultiplier = BigInt(object.cu_multiplier);
    }
    return message;
  },
  toAmino(message: Extension): ExtensionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.rule = message.rule ? Rule.toAmino(message.rule) : undefined;
    obj.cu_multiplier = message.cuMultiplier !== BigInt(0) ? (message.cuMultiplier?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ExtensionAminoMsg): Extension {
    return Extension.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionProtoMsg): Extension {
    return Extension.decode(message.value);
  },
  toProto(message: Extension): Uint8Array {
    return Extension.encode(message).finish();
  },
  toProtoMsg(message: Extension): ExtensionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Extension",
      value: Extension.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Extension.typeUrl, Extension);
function createBaseRule(): Rule {
  return {
    block: BigInt(0)
  };
}
export const Rule = {
  typeUrl: "/lavanet.lava.spec.Rule",
  is(o: any): o is Rule {
    return o && (o.$typeUrl === Rule.typeUrl || typeof o.block === "bigint");
  },
  isSDK(o: any): o is RuleSDKType {
    return o && (o.$typeUrl === Rule.typeUrl || typeof o.block === "bigint");
  },
  isAmino(o: any): o is RuleAmino {
    return o && (o.$typeUrl === Rule.typeUrl || typeof o.block === "bigint");
  },
  encode(message: Rule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Rule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Rule {
    return {
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0)
    };
  },
  toJSON(message: Rule): JsonSafe<Rule> {
    const obj: any = {};
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Rule>, I>>(object: I): Rule {
    const message = createBaseRule();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RuleAmino): Rule {
    const message = createBaseRule();
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    return message;
  },
  toAmino(message: Rule): RuleAmino {
    const obj: any = {};
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: RuleAminoMsg): Rule {
    return Rule.fromAmino(object.value);
  },
  fromProtoMsg(message: RuleProtoMsg): Rule {
    return Rule.decode(message.value);
  },
  toProto(message: Rule): Uint8Array {
    return Rule.encode(message).finish();
  },
  toProtoMsg(message: Rule): RuleProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Rule",
      value: Rule.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Rule.typeUrl, Rule);
function createBaseVerification(): Verification {
  return {
    name: "",
    parseDirective: undefined,
    values: []
  };
}
export const Verification = {
  typeUrl: "/lavanet.lava.spec.Verification",
  is(o: any): o is Verification {
    return o && (o.$typeUrl === Verification.typeUrl || typeof o.name === "string" && Array.isArray(o.values) && (!o.values.length || ParseValue.is(o.values[0])));
  },
  isSDK(o: any): o is VerificationSDKType {
    return o && (o.$typeUrl === Verification.typeUrl || typeof o.name === "string" && Array.isArray(o.values) && (!o.values.length || ParseValue.isSDK(o.values[0])));
  },
  isAmino(o: any): o is VerificationAmino {
    return o && (o.$typeUrl === Verification.typeUrl || typeof o.name === "string" && Array.isArray(o.values) && (!o.values.length || ParseValue.isAmino(o.values[0])));
  },
  encode(message: Verification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parseDirective !== undefined) {
      ParseDirective.encode(message.parseDirective, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.values) {
      ParseValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Verification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parseDirective = ParseDirective.decode(reader, reader.uint32());
          break;
        case 3:
          message.values.push(ParseValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Verification {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parseDirective: isSet(object.parseDirective) ? ParseDirective.fromJSON(object.parseDirective) : undefined,
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ParseValue.fromJSON(e)) : []
    };
  },
  toJSON(message: Verification): JsonSafe<Verification> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parseDirective !== undefined && (obj.parseDirective = message.parseDirective ? ParseDirective.toJSON(message.parseDirective) : undefined);
    if (message.values) {
      obj.values = message.values.map(e => e ? ParseValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Verification>, I>>(object: I): Verification {
    const message = createBaseVerification();
    message.name = object.name ?? "";
    message.parseDirective = object.parseDirective !== undefined && object.parseDirective !== null ? ParseDirective.fromPartial(object.parseDirective) : undefined;
    message.values = object.values?.map(e => ParseValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VerificationAmino): Verification {
    const message = createBaseVerification();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.parse_directive !== undefined && object.parse_directive !== null) {
      message.parseDirective = ParseDirective.fromAmino(object.parse_directive);
    }
    message.values = object.values?.map(e => ParseValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Verification): VerificationAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.parse_directive = message.parseDirective ? ParseDirective.toAmino(message.parseDirective) : undefined;
    if (message.values) {
      obj.values = message.values.map(e => e ? ParseValue.toAmino(e) : undefined);
    } else {
      obj.values = message.values;
    }
    return obj;
  },
  fromAminoMsg(object: VerificationAminoMsg): Verification {
    return Verification.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationProtoMsg): Verification {
    return Verification.decode(message.value);
  },
  toProto(message: Verification): Uint8Array {
    return Verification.encode(message).finish();
  },
  toProtoMsg(message: Verification): VerificationProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Verification",
      value: Verification.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Verification.typeUrl, Verification);
function createBaseParseValue(): ParseValue {
  return {
    extension: "",
    expectedValue: "",
    latestDistance: BigInt(0),
    severity: 0
  };
}
export const ParseValue = {
  typeUrl: "/lavanet.lava.spec.ParseValue",
  is(o: any): o is ParseValue {
    return o && (o.$typeUrl === ParseValue.typeUrl || typeof o.extension === "string" && typeof o.expectedValue === "string" && typeof o.latestDistance === "bigint" && isSet(o.severity));
  },
  isSDK(o: any): o is ParseValueSDKType {
    return o && (o.$typeUrl === ParseValue.typeUrl || typeof o.extension === "string" && typeof o.expected_value === "string" && typeof o.latest_distance === "bigint" && isSet(o.severity));
  },
  isAmino(o: any): o is ParseValueAmino {
    return o && (o.$typeUrl === ParseValue.typeUrl || typeof o.extension === "string" && typeof o.expected_value === "string" && typeof o.latest_distance === "bigint" && isSet(o.severity));
  },
  encode(message: ParseValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.extension !== "") {
      writer.uint32(10).string(message.extension);
    }
    if (message.expectedValue !== "") {
      writer.uint32(18).string(message.expectedValue);
    }
    if (message.latestDistance !== BigInt(0)) {
      writer.uint32(24).uint64(message.latestDistance);
    }
    if (message.severity !== 0) {
      writer.uint32(32).int32(message.severity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extension = reader.string();
          break;
        case 2:
          message.expectedValue = reader.string();
          break;
        case 3:
          message.latestDistance = reader.uint64();
          break;
        case 4:
          message.severity = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParseValue {
    return {
      extension: isSet(object.extension) ? String(object.extension) : "",
      expectedValue: isSet(object.expectedValue) ? String(object.expectedValue) : "",
      latestDistance: isSet(object.latestDistance) ? BigInt(object.latestDistance.toString()) : BigInt(0),
      severity: isSet(object.severity) ? parseValue_VerificationSeverityFromJSON(object.severity) : -1
    };
  },
  toJSON(message: ParseValue): JsonSafe<ParseValue> {
    const obj: any = {};
    message.extension !== undefined && (obj.extension = message.extension);
    message.expectedValue !== undefined && (obj.expectedValue = message.expectedValue);
    message.latestDistance !== undefined && (obj.latestDistance = (message.latestDistance || BigInt(0)).toString());
    message.severity !== undefined && (obj.severity = parseValue_VerificationSeverityToJSON(message.severity));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParseValue>, I>>(object: I): ParseValue {
    const message = createBaseParseValue();
    message.extension = object.extension ?? "";
    message.expectedValue = object.expectedValue ?? "";
    message.latestDistance = object.latestDistance !== undefined && object.latestDistance !== null ? BigInt(object.latestDistance.toString()) : BigInt(0);
    message.severity = object.severity ?? 0;
    return message;
  },
  fromAmino(object: ParseValueAmino): ParseValue {
    const message = createBaseParseValue();
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = object.extension;
    }
    if (object.expected_value !== undefined && object.expected_value !== null) {
      message.expectedValue = object.expected_value;
    }
    if (object.latest_distance !== undefined && object.latest_distance !== null) {
      message.latestDistance = BigInt(object.latest_distance);
    }
    if (object.severity !== undefined && object.severity !== null) {
      message.severity = object.severity;
    }
    return message;
  },
  toAmino(message: ParseValue): ParseValueAmino {
    const obj: any = {};
    obj.extension = message.extension === "" ? undefined : message.extension;
    obj.expected_value = message.expectedValue === "" ? undefined : message.expectedValue;
    obj.latest_distance = message.latestDistance !== BigInt(0) ? (message.latestDistance?.toString)() : undefined;
    obj.severity = message.severity === 0 ? undefined : message.severity;
    return obj;
  },
  fromAminoMsg(object: ParseValueAminoMsg): ParseValue {
    return ParseValue.fromAmino(object.value);
  },
  fromProtoMsg(message: ParseValueProtoMsg): ParseValue {
    return ParseValue.decode(message.value);
  },
  toProto(message: ParseValue): Uint8Array {
    return ParseValue.encode(message).finish();
  },
  toProtoMsg(message: ParseValue): ParseValueProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ParseValue",
      value: ParseValue.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParseValue.typeUrl, ParseValue);
function createBaseCollectionData(): CollectionData {
  return {
    apiInterface: "",
    internalPath: "",
    type: "",
    addOn: ""
  };
}
export const CollectionData = {
  typeUrl: "/lavanet.lava.spec.CollectionData",
  is(o: any): o is CollectionData {
    return o && (o.$typeUrl === CollectionData.typeUrl || typeof o.apiInterface === "string" && typeof o.internalPath === "string" && typeof o.type === "string" && typeof o.addOn === "string");
  },
  isSDK(o: any): o is CollectionDataSDKType {
    return o && (o.$typeUrl === CollectionData.typeUrl || typeof o.api_interface === "string" && typeof o.internal_path === "string" && typeof o.type === "string" && typeof o.add_on === "string");
  },
  isAmino(o: any): o is CollectionDataAmino {
    return o && (o.$typeUrl === CollectionData.typeUrl || typeof o.api_interface === "string" && typeof o.internal_path === "string" && typeof o.type === "string" && typeof o.add_on === "string");
  },
  encode(message: CollectionData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiInterface !== "") {
      writer.uint32(10).string(message.apiInterface);
    }
    if (message.internalPath !== "") {
      writer.uint32(18).string(message.internalPath);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.addOn !== "") {
      writer.uint32(34).string(message.addOn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CollectionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiInterface = reader.string();
          break;
        case 2:
          message.internalPath = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.addOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CollectionData {
    return {
      apiInterface: isSet(object.apiInterface) ? String(object.apiInterface) : "",
      internalPath: isSet(object.internalPath) ? String(object.internalPath) : "",
      type: isSet(object.type) ? String(object.type) : "",
      addOn: isSet(object.addOn) ? String(object.addOn) : ""
    };
  },
  toJSON(message: CollectionData): JsonSafe<CollectionData> {
    const obj: any = {};
    message.apiInterface !== undefined && (obj.apiInterface = message.apiInterface);
    message.internalPath !== undefined && (obj.internalPath = message.internalPath);
    message.type !== undefined && (obj.type = message.type);
    message.addOn !== undefined && (obj.addOn = message.addOn);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CollectionData>, I>>(object: I): CollectionData {
    const message = createBaseCollectionData();
    message.apiInterface = object.apiInterface ?? "";
    message.internalPath = object.internalPath ?? "";
    message.type = object.type ?? "";
    message.addOn = object.addOn ?? "";
    return message;
  },
  fromAmino(object: CollectionDataAmino): CollectionData {
    const message = createBaseCollectionData();
    if (object.api_interface !== undefined && object.api_interface !== null) {
      message.apiInterface = object.api_interface;
    }
    if (object.internal_path !== undefined && object.internal_path !== null) {
      message.internalPath = object.internal_path;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.add_on !== undefined && object.add_on !== null) {
      message.addOn = object.add_on;
    }
    return message;
  },
  toAmino(message: CollectionData): CollectionDataAmino {
    const obj: any = {};
    obj.api_interface = message.apiInterface ?? "";
    obj.internal_path = message.internalPath ?? "";
    obj.type = message.type ?? "";
    obj.add_on = message.addOn ?? "";
    return obj;
  },
  fromAminoMsg(object: CollectionDataAminoMsg): CollectionData {
    return CollectionData.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionDataProtoMsg): CollectionData {
    return CollectionData.decode(message.value);
  },
  toProto(message: CollectionData): Uint8Array {
    return CollectionData.encode(message).finish();
  },
  toProtoMsg(message: CollectionData): CollectionDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.CollectionData",
      value: CollectionData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CollectionData.typeUrl, CollectionData);
function createBaseHeader(): Header {
  return {
    name: "",
    kind: 0,
    functionTag: 0
  };
}
export const Header = {
  typeUrl: "/lavanet.lava.spec.Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || typeof o.name === "string" && isSet(o.kind) && isSet(o.functionTag));
  },
  isSDK(o: any): o is HeaderSDKType {
    return o && (o.$typeUrl === Header.typeUrl || typeof o.name === "string" && isSet(o.kind) && isSet(o.function_tag));
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || typeof o.name === "string" && isSet(o.kind) && isSet(o.function_tag));
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.functionTag !== 0) {
      writer.uint32(24).int32(message.functionTag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kind = reader.int32() as any;
          break;
        case 3:
          message.functionTag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      kind: isSet(object.kind) ? header_HeaderTypeFromJSON(object.kind) : -1,
      functionTag: isSet(object.functionTag) ? fUNCTION_TAGFromJSON(object.functionTag) : -1
    };
  },
  toJSON(message: Header): JsonSafe<Header> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.kind !== undefined && (obj.kind = header_HeaderTypeToJSON(message.kind));
    message.functionTag !== undefined && (obj.functionTag = fUNCTION_TAGToJSON(message.functionTag));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    message.name = object.name ?? "";
    message.kind = object.kind ?? 0;
    message.functionTag = object.functionTag ?? 0;
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.function_tag !== undefined && object.function_tag !== null) {
      message.functionTag = object.function_tag;
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.function_tag = message.functionTag === 0 ? undefined : message.functionTag;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Header",
      value: Header.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Header.typeUrl, Header);
function createBaseApi(): Api {
  return {
    enabled: false,
    name: "",
    computeUnits: BigInt(0),
    extraComputeUnits: BigInt(0),
    category: SpecCategory.fromPartial({}),
    blockParsing: BlockParser.fromPartial({}),
    timeoutMs: BigInt(0),
    parsers: []
  };
}
export const Api = {
  typeUrl: "/lavanet.lava.spec.Api",
  is(o: any): o is Api {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.enabled === "boolean" && typeof o.name === "string" && typeof o.computeUnits === "bigint" && typeof o.extraComputeUnits === "bigint" && SpecCategory.is(o.category) && BlockParser.is(o.blockParsing) && typeof o.timeoutMs === "bigint" && Array.isArray(o.parsers) && (!o.parsers.length || GenericParser.is(o.parsers[0])));
  },
  isSDK(o: any): o is ApiSDKType {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.enabled === "boolean" && typeof o.name === "string" && typeof o.compute_units === "bigint" && typeof o.extra_compute_units === "bigint" && SpecCategory.isSDK(o.category) && BlockParser.isSDK(o.block_parsing) && typeof o.timeout_ms === "bigint" && Array.isArray(o.parsers) && (!o.parsers.length || GenericParser.isSDK(o.parsers[0])));
  },
  isAmino(o: any): o is ApiAmino {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.enabled === "boolean" && typeof o.name === "string" && typeof o.compute_units === "bigint" && typeof o.extra_compute_units === "bigint" && SpecCategory.isAmino(o.category) && BlockParser.isAmino(o.block_parsing) && typeof o.timeout_ms === "bigint" && Array.isArray(o.parsers) && (!o.parsers.length || GenericParser.isAmino(o.parsers[0])));
  },
  encode(message: Api, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.computeUnits !== BigInt(0)) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (message.extraComputeUnits !== BigInt(0)) {
      writer.uint32(32).uint64(message.extraComputeUnits);
    }
    if (message.category !== undefined) {
      SpecCategory.encode(message.category, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockParsing !== undefined) {
      BlockParser.encode(message.blockParsing, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeoutMs !== BigInt(0)) {
      writer.uint32(64).uint64(message.timeoutMs);
    }
    for (const v of message.parsers) {
      GenericParser.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Api {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.computeUnits = reader.uint64();
          break;
        case 4:
          message.extraComputeUnits = reader.uint64();
          break;
        case 6:
          message.category = SpecCategory.decode(reader, reader.uint32());
          break;
        case 7:
          message.blockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeoutMs = reader.uint64();
          break;
        case 9:
          message.parsers.push(GenericParser.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Api {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      name: isSet(object.name) ? String(object.name) : "",
      computeUnits: isSet(object.computeUnits) ? BigInt(object.computeUnits.toString()) : BigInt(0),
      extraComputeUnits: isSet(object.extraComputeUnits) ? BigInt(object.extraComputeUnits.toString()) : BigInt(0),
      category: isSet(object.category) ? SpecCategory.fromJSON(object.category) : undefined,
      blockParsing: isSet(object.blockParsing) ? BlockParser.fromJSON(object.blockParsing) : undefined,
      timeoutMs: isSet(object.timeoutMs) ? BigInt(object.timeoutMs.toString()) : BigInt(0),
      parsers: Array.isArray(object?.parsers) ? object.parsers.map((e: any) => GenericParser.fromJSON(e)) : []
    };
  },
  toJSON(message: Api): JsonSafe<Api> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.name !== undefined && (obj.name = message.name);
    message.computeUnits !== undefined && (obj.computeUnits = (message.computeUnits || BigInt(0)).toString());
    message.extraComputeUnits !== undefined && (obj.extraComputeUnits = (message.extraComputeUnits || BigInt(0)).toString());
    message.category !== undefined && (obj.category = message.category ? SpecCategory.toJSON(message.category) : undefined);
    message.blockParsing !== undefined && (obj.blockParsing = message.blockParsing ? BlockParser.toJSON(message.blockParsing) : undefined);
    message.timeoutMs !== undefined && (obj.timeoutMs = (message.timeoutMs || BigInt(0)).toString());
    if (message.parsers) {
      obj.parsers = message.parsers.map(e => e ? GenericParser.toJSON(e) : undefined);
    } else {
      obj.parsers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Api>, I>>(object: I): Api {
    const message = createBaseApi();
    message.enabled = object.enabled ?? false;
    message.name = object.name ?? "";
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? BigInt(object.computeUnits.toString()) : BigInt(0);
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? BigInt(object.extraComputeUnits.toString()) : BigInt(0);
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    message.timeoutMs = object.timeoutMs !== undefined && object.timeoutMs !== null ? BigInt(object.timeoutMs.toString()) : BigInt(0);
    message.parsers = object.parsers?.map(e => GenericParser.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ApiAmino): Api {
    const message = createBaseApi();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.compute_units !== undefined && object.compute_units !== null) {
      message.computeUnits = BigInt(object.compute_units);
    }
    if (object.extra_compute_units !== undefined && object.extra_compute_units !== null) {
      message.extraComputeUnits = BigInt(object.extra_compute_units);
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = SpecCategory.fromAmino(object.category);
    }
    if (object.block_parsing !== undefined && object.block_parsing !== null) {
      message.blockParsing = BlockParser.fromAmino(object.block_parsing);
    }
    if (object.timeout_ms !== undefined && object.timeout_ms !== null) {
      message.timeoutMs = BigInt(object.timeout_ms);
    }
    message.parsers = object.parsers?.map(e => GenericParser.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Api): ApiAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.name = message.name === "" ? undefined : message.name;
    obj.compute_units = message.computeUnits !== BigInt(0) ? (message.computeUnits?.toString)() : undefined;
    obj.extra_compute_units = message.extraComputeUnits !== BigInt(0) ? (message.extraComputeUnits?.toString)() : undefined;
    obj.category = message.category ? SpecCategory.toAmino(message.category) : undefined;
    obj.block_parsing = message.blockParsing ? BlockParser.toAmino(message.blockParsing) : undefined;
    obj.timeout_ms = message.timeoutMs !== BigInt(0) ? (message.timeoutMs?.toString)() : undefined;
    if (message.parsers) {
      obj.parsers = message.parsers.map(e => e ? GenericParser.toAmino(e) : undefined);
    } else {
      obj.parsers = message.parsers;
    }
    return obj;
  },
  fromAminoMsg(object: ApiAminoMsg): Api {
    return Api.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiProtoMsg): Api {
    return Api.decode(message.value);
  },
  toProto(message: Api): Uint8Array {
    return Api.encode(message).finish();
  },
  toProtoMsg(message: Api): ApiProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Api",
      value: Api.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Api.typeUrl, Api);
function createBaseParseDirective(): ParseDirective {
  return {
    functionTag: 0,
    functionTemplate: "",
    resultParsing: BlockParser.fromPartial({}),
    apiName: "",
    parsers: []
  };
}
export const ParseDirective = {
  typeUrl: "/lavanet.lava.spec.ParseDirective",
  is(o: any): o is ParseDirective {
    return o && (o.$typeUrl === ParseDirective.typeUrl || isSet(o.functionTag) && typeof o.functionTemplate === "string" && BlockParser.is(o.resultParsing) && typeof o.apiName === "string" && Array.isArray(o.parsers) && (!o.parsers.length || GenericParser.is(o.parsers[0])));
  },
  isSDK(o: any): o is ParseDirectiveSDKType {
    return o && (o.$typeUrl === ParseDirective.typeUrl || isSet(o.function_tag) && typeof o.function_template === "string" && BlockParser.isSDK(o.result_parsing) && typeof o.api_name === "string" && Array.isArray(o.parsers) && (!o.parsers.length || GenericParser.isSDK(o.parsers[0])));
  },
  isAmino(o: any): o is ParseDirectiveAmino {
    return o && (o.$typeUrl === ParseDirective.typeUrl || isSet(o.function_tag) && typeof o.function_template === "string" && BlockParser.isAmino(o.result_parsing) && typeof o.api_name === "string" && Array.isArray(o.parsers) && (!o.parsers.length || GenericParser.isAmino(o.parsers[0])));
  },
  encode(message: ParseDirective, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.functionTag !== 0) {
      writer.uint32(8).int32(message.functionTag);
    }
    if (message.functionTemplate !== "") {
      writer.uint32(18).string(message.functionTemplate);
    }
    if (message.resultParsing !== undefined) {
      BlockParser.encode(message.resultParsing, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiName !== "") {
      writer.uint32(34).string(message.apiName);
    }
    for (const v of message.parsers) {
      GenericParser.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseDirective {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseDirective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTag = reader.int32() as any;
          break;
        case 2:
          message.functionTemplate = reader.string();
          break;
        case 3:
          message.resultParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiName = reader.string();
          break;
        case 5:
          message.parsers.push(GenericParser.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParseDirective {
    return {
      functionTag: isSet(object.functionTag) ? fUNCTION_TAGFromJSON(object.functionTag) : -1,
      functionTemplate: isSet(object.functionTemplate) ? String(object.functionTemplate) : "",
      resultParsing: isSet(object.resultParsing) ? BlockParser.fromJSON(object.resultParsing) : undefined,
      apiName: isSet(object.apiName) ? String(object.apiName) : "",
      parsers: Array.isArray(object?.parsers) ? object.parsers.map((e: any) => GenericParser.fromJSON(e)) : []
    };
  },
  toJSON(message: ParseDirective): JsonSafe<ParseDirective> {
    const obj: any = {};
    message.functionTag !== undefined && (obj.functionTag = fUNCTION_TAGToJSON(message.functionTag));
    message.functionTemplate !== undefined && (obj.functionTemplate = message.functionTemplate);
    message.resultParsing !== undefined && (obj.resultParsing = message.resultParsing ? BlockParser.toJSON(message.resultParsing) : undefined);
    message.apiName !== undefined && (obj.apiName = message.apiName);
    if (message.parsers) {
      obj.parsers = message.parsers.map(e => e ? GenericParser.toJSON(e) : undefined);
    } else {
      obj.parsers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParseDirective>, I>>(object: I): ParseDirective {
    const message = createBaseParseDirective();
    message.functionTag = object.functionTag ?? 0;
    message.functionTemplate = object.functionTemplate ?? "";
    message.resultParsing = object.resultParsing !== undefined && object.resultParsing !== null ? BlockParser.fromPartial(object.resultParsing) : undefined;
    message.apiName = object.apiName ?? "";
    message.parsers = object.parsers?.map(e => GenericParser.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParseDirectiveAmino): ParseDirective {
    const message = createBaseParseDirective();
    if (object.function_tag !== undefined && object.function_tag !== null) {
      message.functionTag = object.function_tag;
    }
    if (object.function_template !== undefined && object.function_template !== null) {
      message.functionTemplate = object.function_template;
    }
    if (object.result_parsing !== undefined && object.result_parsing !== null) {
      message.resultParsing = BlockParser.fromAmino(object.result_parsing);
    }
    if (object.api_name !== undefined && object.api_name !== null) {
      message.apiName = object.api_name;
    }
    message.parsers = object.parsers?.map(e => GenericParser.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ParseDirective): ParseDirectiveAmino {
    const obj: any = {};
    obj.function_tag = message.functionTag === 0 ? undefined : message.functionTag;
    obj.function_template = message.functionTemplate === "" ? undefined : message.functionTemplate;
    obj.result_parsing = message.resultParsing ? BlockParser.toAmino(message.resultParsing) : undefined;
    obj.api_name = message.apiName === "" ? undefined : message.apiName;
    if (message.parsers) {
      obj.parsers = message.parsers.map(e => e ? GenericParser.toAmino(e) : undefined);
    } else {
      obj.parsers = message.parsers;
    }
    return obj;
  },
  fromAminoMsg(object: ParseDirectiveAminoMsg): ParseDirective {
    return ParseDirective.fromAmino(object.value);
  },
  fromProtoMsg(message: ParseDirectiveProtoMsg): ParseDirective {
    return ParseDirective.decode(message.value);
  },
  toProto(message: ParseDirective): Uint8Array {
    return ParseDirective.encode(message).finish();
  },
  toProtoMsg(message: ParseDirective): ParseDirectiveProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ParseDirective",
      value: ParseDirective.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParseDirective.typeUrl, ParseDirective);
function createBaseBlockParser(): BlockParser {
  return {
    parserArg: [],
    parserFunc: 0,
    defaultValue: "",
    encoding: ""
  };
}
export const BlockParser = {
  typeUrl: "/lavanet.lava.spec.BlockParser",
  is(o: any): o is BlockParser {
    return o && (o.$typeUrl === BlockParser.typeUrl || Array.isArray(o.parserArg) && (!o.parserArg.length || typeof o.parserArg[0] === "string") && isSet(o.parserFunc) && typeof o.defaultValue === "string" && typeof o.encoding === "string");
  },
  isSDK(o: any): o is BlockParserSDKType {
    return o && (o.$typeUrl === BlockParser.typeUrl || Array.isArray(o.parser_arg) && (!o.parser_arg.length || typeof o.parser_arg[0] === "string") && isSet(o.parser_func) && typeof o.default_value === "string" && typeof o.encoding === "string");
  },
  isAmino(o: any): o is BlockParserAmino {
    return o && (o.$typeUrl === BlockParser.typeUrl || Array.isArray(o.parser_arg) && (!o.parser_arg.length || typeof o.parser_arg[0] === "string") && isSet(o.parser_func) && typeof o.default_value === "string" && typeof o.encoding === "string");
  },
  encode(message: BlockParser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.parserArg) {
      writer.uint32(10).string(v!);
    }
    if (message.parserFunc !== 0) {
      writer.uint32(16).int32(message.parserFunc);
    }
    if (message.defaultValue !== "") {
      writer.uint32(26).string(message.defaultValue);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockParser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parserArg.push(reader.string());
          break;
        case 2:
          message.parserFunc = reader.int32() as any;
          break;
        case 3:
          message.defaultValue = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockParser {
    return {
      parserArg: Array.isArray(object?.parserArg) ? object.parserArg.map((e: any) => String(e)) : [],
      parserFunc: isSet(object.parserFunc) ? pARSER_FUNCFromJSON(object.parserFunc) : -1,
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : ""
    };
  },
  toJSON(message: BlockParser): JsonSafe<BlockParser> {
    const obj: any = {};
    if (message.parserArg) {
      obj.parserArg = message.parserArg.map(e => e);
    } else {
      obj.parserArg = [];
    }
    message.parserFunc !== undefined && (obj.parserFunc = pARSER_FUNCToJSON(message.parserFunc));
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockParser>, I>>(object: I): BlockParser {
    const message = createBaseBlockParser();
    message.parserArg = object.parserArg?.map(e => e) || [];
    message.parserFunc = object.parserFunc ?? 0;
    message.defaultValue = object.defaultValue ?? "";
    message.encoding = object.encoding ?? "";
    return message;
  },
  fromAmino(object: BlockParserAmino): BlockParser {
    const message = createBaseBlockParser();
    message.parserArg = object.parser_arg?.map(e => e) || [];
    if (object.parser_func !== undefined && object.parser_func !== null) {
      message.parserFunc = object.parser_func;
    }
    if (object.default_value !== undefined && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    }
    return message;
  },
  toAmino(message: BlockParser): BlockParserAmino {
    const obj: any = {};
    if (message.parserArg) {
      obj.parser_arg = message.parserArg.map(e => e);
    } else {
      obj.parser_arg = message.parserArg;
    }
    obj.parser_func = message.parserFunc === 0 ? undefined : message.parserFunc;
    obj.default_value = message.defaultValue === "" ? undefined : message.defaultValue;
    obj.encoding = message.encoding === "" ? undefined : message.encoding;
    return obj;
  },
  fromAminoMsg(object: BlockParserAminoMsg): BlockParser {
    return BlockParser.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockParserProtoMsg): BlockParser {
    return BlockParser.decode(message.value);
  },
  toProto(message: BlockParser): Uint8Array {
    return BlockParser.encode(message).finish();
  },
  toProtoMsg(message: BlockParser): BlockParserProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.BlockParser",
      value: BlockParser.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockParser.typeUrl, BlockParser);
function createBaseGenericParser(): GenericParser {
  return {
    parsePath: "",
    value: "",
    parseType: 0,
    rule: ""
  };
}
export const GenericParser = {
  typeUrl: "/lavanet.lava.spec.GenericParser",
  is(o: any): o is GenericParser {
    return o && (o.$typeUrl === GenericParser.typeUrl || typeof o.parsePath === "string" && typeof o.value === "string" && isSet(o.parseType) && typeof o.rule === "string");
  },
  isSDK(o: any): o is GenericParserSDKType {
    return o && (o.$typeUrl === GenericParser.typeUrl || typeof o.parse_path === "string" && typeof o.value === "string" && isSet(o.parse_type) && typeof o.rule === "string");
  },
  isAmino(o: any): o is GenericParserAmino {
    return o && (o.$typeUrl === GenericParser.typeUrl || typeof o.parse_path === "string" && typeof o.value === "string" && isSet(o.parse_type) && typeof o.rule === "string");
  },
  encode(message: GenericParser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsePath !== "") {
      writer.uint32(10).string(message.parsePath);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.parseType !== 0) {
      writer.uint32(24).int32(message.parseType);
    }
    if (message.rule !== "") {
      writer.uint32(34).string(message.rule);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenericParser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsePath = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.parseType = reader.int32() as any;
          break;
        case 4:
          message.rule = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericParser {
    return {
      parsePath: isSet(object.parsePath) ? String(object.parsePath) : "",
      value: isSet(object.value) ? String(object.value) : "",
      parseType: isSet(object.parseType) ? pARSER_TYPEFromJSON(object.parseType) : -1,
      rule: isSet(object.rule) ? String(object.rule) : ""
    };
  },
  toJSON(message: GenericParser): JsonSafe<GenericParser> {
    const obj: any = {};
    message.parsePath !== undefined && (obj.parsePath = message.parsePath);
    message.value !== undefined && (obj.value = message.value);
    message.parseType !== undefined && (obj.parseType = pARSER_TYPEToJSON(message.parseType));
    message.rule !== undefined && (obj.rule = message.rule);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenericParser>, I>>(object: I): GenericParser {
    const message = createBaseGenericParser();
    message.parsePath = object.parsePath ?? "";
    message.value = object.value ?? "";
    message.parseType = object.parseType ?? 0;
    message.rule = object.rule ?? "";
    return message;
  },
  fromAmino(object: GenericParserAmino): GenericParser {
    const message = createBaseGenericParser();
    if (object.parse_path !== undefined && object.parse_path !== null) {
      message.parsePath = object.parse_path;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.parse_type !== undefined && object.parse_type !== null) {
      message.parseType = object.parse_type;
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = object.rule;
    }
    return message;
  },
  toAmino(message: GenericParser): GenericParserAmino {
    const obj: any = {};
    obj.parse_path = message.parsePath === "" ? undefined : message.parsePath;
    obj.value = message.value === "" ? undefined : message.value;
    obj.parse_type = message.parseType === 0 ? undefined : message.parseType;
    obj.rule = message.rule === "" ? undefined : message.rule;
    return obj;
  },
  fromAminoMsg(object: GenericParserAminoMsg): GenericParser {
    return GenericParser.fromAmino(object.value);
  },
  fromProtoMsg(message: GenericParserProtoMsg): GenericParser {
    return GenericParser.decode(message.value);
  },
  toProto(message: GenericParser): Uint8Array {
    return GenericParser.encode(message).finish();
  },
  toProtoMsg(message: GenericParser): GenericParserProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.GenericParser",
      value: GenericParser.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenericParser.typeUrl, GenericParser);
function createBaseSpecCategory(): SpecCategory {
  return {
    deterministic: false,
    local: false,
    subscription: false,
    stateful: 0,
    hangingApi: false
  };
}
export const SpecCategory = {
  typeUrl: "/lavanet.lava.spec.SpecCategory",
  is(o: any): o is SpecCategory {
    return o && (o.$typeUrl === SpecCategory.typeUrl || typeof o.deterministic === "boolean" && typeof o.local === "boolean" && typeof o.subscription === "boolean" && typeof o.stateful === "number" && typeof o.hangingApi === "boolean");
  },
  isSDK(o: any): o is SpecCategorySDKType {
    return o && (o.$typeUrl === SpecCategory.typeUrl || typeof o.deterministic === "boolean" && typeof o.local === "boolean" && typeof o.subscription === "boolean" && typeof o.stateful === "number" && typeof o.hanging_api === "boolean");
  },
  isAmino(o: any): o is SpecCategoryAmino {
    return o && (o.$typeUrl === SpecCategory.typeUrl || typeof o.deterministic === "boolean" && typeof o.local === "boolean" && typeof o.subscription === "boolean" && typeof o.stateful === "number" && typeof o.hanging_api === "boolean");
  },
  encode(message: SpecCategory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deterministic === true) {
      writer.uint32(8).bool(message.deterministic);
    }
    if (message.local === true) {
      writer.uint32(16).bool(message.local);
    }
    if (message.subscription === true) {
      writer.uint32(24).bool(message.subscription);
    }
    if (message.stateful !== 0) {
      writer.uint32(32).uint32(message.stateful);
    }
    if (message.hangingApi === true) {
      writer.uint32(40).bool(message.hangingApi);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpecCategory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deterministic = reader.bool();
          break;
        case 2:
          message.local = reader.bool();
          break;
        case 3:
          message.subscription = reader.bool();
          break;
        case 4:
          message.stateful = reader.uint32();
          break;
        case 5:
          message.hangingApi = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpecCategory {
    return {
      deterministic: isSet(object.deterministic) ? Boolean(object.deterministic) : false,
      local: isSet(object.local) ? Boolean(object.local) : false,
      subscription: isSet(object.subscription) ? Boolean(object.subscription) : false,
      stateful: isSet(object.stateful) ? Number(object.stateful) : 0,
      hangingApi: isSet(object.hangingApi) ? Boolean(object.hangingApi) : false
    };
  },
  toJSON(message: SpecCategory): JsonSafe<SpecCategory> {
    const obj: any = {};
    message.deterministic !== undefined && (obj.deterministic = message.deterministic);
    message.local !== undefined && (obj.local = message.local);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.stateful !== undefined && (obj.stateful = Math.round(message.stateful));
    message.hangingApi !== undefined && (obj.hangingApi = message.hangingApi);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpecCategory>, I>>(object: I): SpecCategory {
    const message = createBaseSpecCategory();
    message.deterministic = object.deterministic ?? false;
    message.local = object.local ?? false;
    message.subscription = object.subscription ?? false;
    message.stateful = object.stateful ?? 0;
    message.hangingApi = object.hangingApi ?? false;
    return message;
  },
  fromAmino(object: SpecCategoryAmino): SpecCategory {
    const message = createBaseSpecCategory();
    if (object.deterministic !== undefined && object.deterministic !== null) {
      message.deterministic = object.deterministic;
    }
    if (object.local !== undefined && object.local !== null) {
      message.local = object.local;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = object.subscription;
    }
    if (object.stateful !== undefined && object.stateful !== null) {
      message.stateful = object.stateful;
    }
    if (object.hanging_api !== undefined && object.hanging_api !== null) {
      message.hangingApi = object.hanging_api;
    }
    return message;
  },
  toAmino(message: SpecCategory): SpecCategoryAmino {
    const obj: any = {};
    obj.deterministic = message.deterministic === false ? undefined : message.deterministic;
    obj.local = message.local === false ? undefined : message.local;
    obj.subscription = message.subscription === false ? undefined : message.subscription;
    obj.stateful = message.stateful === 0 ? undefined : message.stateful;
    obj.hanging_api = message.hangingApi === false ? undefined : message.hangingApi;
    return obj;
  },
  fromAminoMsg(object: SpecCategoryAminoMsg): SpecCategory {
    return SpecCategory.fromAmino(object.value);
  },
  fromProtoMsg(message: SpecCategoryProtoMsg): SpecCategory {
    return SpecCategory.decode(message.value);
  },
  toProto(message: SpecCategory): Uint8Array {
    return SpecCategory.encode(message).finish();
  },
  toProtoMsg(message: SpecCategory): SpecCategoryProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.SpecCategory",
      value: SpecCategory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpecCategory.typeUrl, SpecCategory);