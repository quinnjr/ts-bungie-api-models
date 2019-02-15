import { PartnershipType } from './PartnershipType';

/**
 * All the partnership info that's fit to expose externally, if we care to do so.
 */
export interface PublicPartnershipDetail {
  partnerType?: PartnershipType;
  identifier?: string;
  name?: string;
  icon?: string;
}
