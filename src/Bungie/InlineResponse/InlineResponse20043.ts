/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyResponsesDestinyCollectibleNodeDetailResponse } from './destinyResponsesDestinyCollectibleNodeDetailResponse';
import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';


export interface InlineResponse20043 { 
    response?: DestinyResponsesDestinyCollectibleNodeDetailResponse;
    message?: string;
    messageData?: { [key: string]: string; };
    errorStatus?: string;
    throttleSeconds?: number;
    detailedErrorTrace?: string;
    errorCode?: PlatformErrorCodes;
}
