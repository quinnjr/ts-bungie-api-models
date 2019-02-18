import { MembershipType } from '../../MembershipType';
import { AwaType } from './AwaType';

export interface PermissionRequested {
  /**
   * Type of advanced write action.
   */
  type?: AwaType;
  /**
   * Item instance ID the action shall be applied to. This is optional for all but a new AwaType values. Rule of thumb is to provide the item instance ID if one is available.
   */
  affectedItemId?: number;
  /**
   * Destiny membership type of the account to modify.
   */
  membershipType?: MembershipType;
  /**
   * Destiny character ID, if applicable, that will be affected by the action.
   */
  characterId?: number;
}
