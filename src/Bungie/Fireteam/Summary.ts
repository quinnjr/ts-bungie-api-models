import { ActivityType } from './ActivityType';
import { Platform } from './Platform';

export interface Summary {
  fireteamId?: number;
  groupId?: number;
  platform?: Platform;
  activityType?: ActivityType;
  isImmediate?: boolean;
  scheduledTime?: Date;
  ownerMembershipId?: number;
  playerSlotCount?: number;
  alternateSlotCount?: number;
  availablePlayerSlotCount?: number;
  availableAlternateSlotCount?: number;
  title?: string;
  dateCreated?: Date;
  dateModified?: Date;
  isPublic?: boolean;
  locale?: string;
  isValid?: boolean;
  datePlayerModified?: Date;
}
