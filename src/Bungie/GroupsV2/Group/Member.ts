import { GroupsV2RuntimeGroupMemberType } from './groupsV2RuntimeGroupMemberType';
import { UserUserInfoCard } from './userUserInfoCard';

export interface Member {
  memberType?: GroupsV2RuntimeGroupMemberType;
  isOnline?: boolean;
  groupId?: number;
  destinyUserInfo?: UserUserInfoCard;
  bungieNetUserInfo?: UserUserInfoCard;
  joinDate?: Date;
}
