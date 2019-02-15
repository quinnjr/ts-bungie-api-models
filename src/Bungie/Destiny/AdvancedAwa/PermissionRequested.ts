/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { MembershipType } from '../../MembershipType';
import { Type } from './Type';

export interface PermissionRequested {
  /**
   * Type of advanced write action.
   */
  type?: Type;
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
