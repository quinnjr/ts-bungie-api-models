import { PlatformInviteResult } from './PlatformInviteResult';
import { UserInfoCard } from '../User/UserInfoCard';

export interface Member {
  destinyUserInfo?: UserInfoCard;
  bungieNetUserInfo?: UserInfoCard;
  characterId?: number;
  dateJoined?: Date;
  hasMicrophone?: boolean;
  lastPlatformInviteAttemptDate?: Date;
  lastPlatformInviteAttemptResult?: PlatformInviteResult;
}
