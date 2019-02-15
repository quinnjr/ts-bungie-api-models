import { PartnershipType } from '../Partnerships/PartnershipType';
import { UserInfoCard } from '../User/UserInfoCard';

export interface LiveStatus {
  dateStatusUpdated?: Date;
  url?: string;
  partnershipIdentifier?: string;
  partnershipType?: PartnershipType;
  thumbnail?: string;
  thumbnailSmall?: string;
  thumbnailLarge?: string;
  destinyCharacterId?: number;
  userInfo?: UserInfoCard;
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
