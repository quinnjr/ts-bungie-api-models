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
