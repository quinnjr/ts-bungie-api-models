import { ClanBanner } from '../ClanBanner';

/**
 * This contract contains clan-specific group information. It does not include any investment data.
 */
export interface ClanInfo {
  clanCallsign?: string;
  clanBannerData?: ClanBanner;
}
