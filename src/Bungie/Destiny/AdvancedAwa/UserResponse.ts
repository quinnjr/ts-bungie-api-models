/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { UserSelection } from './UserSelection';

export interface UserResponse {
  /**
   * Indication of the selection the user has made (Approving or rejecting the action)
   */
  selection?: UserSelection;
  /**
   * Correlation ID of the request
   */
  correlationId?: string;
  /**
   * Secret nonce received via the PUSH notification.
   */
  nonce?: Array<string>;
}
