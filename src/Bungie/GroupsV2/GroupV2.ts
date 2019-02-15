import { ChatSecuritySetting } from './ChatSecuritySetting';
import { Features } from './Group/Features';
import { Homepage } from './Group/Homepage';
import { PostPublicity } from './Group/PostPublicity';
import { Type } from './Group/Type';
import { ClanInfoAndInvestment } from './GroupV2/ClanInfoAndInvestment';
import { MembershipOption } from './MembershipOption';


export interface GroupV2 {
  groupId?: number;
  name?: string;
  groupType?: Type;
  membershipIdCreated?: number;
  creationDate?: Date;
  modificationDate?: Date;
  about?: string;
  tags?: Array<string>;
  memberCount?: number;
  isPublic?: boolean;
  isPublicTopicAdminOnly?: boolean;
  motto?: string;
  allowChat?: boolean;
  isDefaultPostPublic?: boolean;
  chatSecurity?: ChatSecuritySetting;
  locale?: string;
  avatarImageIndex?: number;
  homepage?: Homepage;
  membershipOption?: MembershipOption;
  defaultPublicity?: PostPublicity;
  theme?: string;
  bannerPath?: string;
  avatarPath?: string;
  conversationId?: number;
  enableInvitationMessagingForAdmins?: boolean;
  banExpireDate?: Date;
  features?: Features;
  clanInfo?: ClanInfoAndInvestment;
}
