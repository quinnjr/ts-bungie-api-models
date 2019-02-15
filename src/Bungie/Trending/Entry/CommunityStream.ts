import { PartnershipType } from '../../Partnerships/PartnershipType';

export interface CommunityStream {
  image?: string;
  title?: string;
  partnershipIdentifier?: string;
  partnershipType?: PartnershipType;
}
