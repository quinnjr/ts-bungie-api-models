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
