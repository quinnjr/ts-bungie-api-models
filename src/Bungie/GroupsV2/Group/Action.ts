import { MembershipType } from '../../MembershipType';
import { ChatSecuritySetting } from '../ChatSecuritySetting';
import { Homepage } from './Homepage';
import { Type } from './Type';
import { MembershipOption } from '../MembershipOption';


export interface GroupsV2GroupAction {
  /**
   * Type of group, either Bungie.net hosted group, or a game services hosted clan.
   */
  groupType?: Type;
  name?: string;
  about?: string;
  motto?: string;
  theme?: string;
  avatarImageIndex?: number;
  tags?: string;
  isPublic?: boolean;
  membershipOption?: MembershipOption;
  isPublicTopicAdminOnly?: boolean;
  isDefaultPostPublic?: boolean;
  allowChat?: boolean;
  isDefaultPostAlliance?: boolean;
  chatSecurity?: ChatSecuritySetting;
  callsign?: string;
  locale?: string;
  homepage?: Homepage;
  /**
   * When operation needs a platform specific account ID for the present user, use this property. In particular, groupType of Clan requires this value to be set.
   */
  platformMembershipType?: MembershipType;
}
