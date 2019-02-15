/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */
 
import { GearAssetDataBaseDefinition } from './GearAssetDataBaseDefinition';

/**
 * Manifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
 */
export interface Manifest { 
    version?: string;
    mobileAssetContentPath?: string;
    mobileGearAssetDataBases?: Array<GearAssetDataBaseDefinition>;
    mobileWorldContentPaths?: { [key: string]: string; };
    jsonWorldContentPaths?: { [key: string]: string; };
    mobileClanBannerDatabasePath?: string;
    mobileGearCDN?: { [key: string]: string; };
}
