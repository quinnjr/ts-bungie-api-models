import { PartnershipType } from '../Partnerships/PartnershipType';
import { InfoCard } from '../User/InfoCard';

export interface LiveStatus {
  dateStatusUpdated?: Date;
  url?: string;
  partnershipIdentifier?: string;
  partnershipType?: PartnershipType;
  thumbnail?: string;
  thumbnailSmall?: string;
  thumbnailLarge?: string;
  destinyCharacterId?: number;
  userInfo?: InfoCard;
  currentActivityHash?: number;
  dateLastPlayed?: Date;
  dateStreamStarted?: Date;
  locale?: string;
  currentViewers?: number;
  followers?: number;
  overallViewers?: number;
  isFeatured?: boolean;
  title?: string;
  activityModeHash?: number;
  dateFeatured?: Date;
  trendingValue?: number;
  isSubscribable?: boolean;
}
