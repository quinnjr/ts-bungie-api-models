import { MembershipType } from '../MembershipType';

/**
 * Very basic info about a user as returned by the Account server.
 */
export interface Membership {
  /**
   * Type of the membership.
   */
  membershipType?: MembershipType;
  /**
   * Membership ID as they user is known in the Accounts service
   */
  membershipId?: number;
  /**
   * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
   */
  displayName?: string;
}
