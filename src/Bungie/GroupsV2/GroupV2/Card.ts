import { Capabilities } from '../Capabilities';
import { Type } from '../Group/Type';
import { ClanInfo } from './ClanInfo';
import { MembershipOption } from '../MembershipOption';


/**
 * A small infocard of group information, usually used for when a list of groups are returned
 */
export interface Card {
  groupId?: number;
  name?: string;
  groupType?: Type;
  creationDate?: Date;
  about?: string;
  motto?: string;
  memberCount?: number;
  locale?: string;
  membershipOption?: MembershipOption;
  capabilities?: Capabilities;
  clanInfo?: ClanInfo;
  avatarPath?: string;
  theme?: string;
}
