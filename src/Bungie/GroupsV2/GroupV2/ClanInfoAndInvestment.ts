import { Progression } from '../../Destiny/Progression';
import { ClanBanner } from '../ClanBanner';


/**
 * The same as GroupV2ClanInfo, but includes any investment data.
 */
export interface ClanInfoAndInvestment {
  d2ClanProgressions?: { [key: string]: Progression; };
  clanCallsign?: string;
  clanBannerData?: ClanBanner;
}
