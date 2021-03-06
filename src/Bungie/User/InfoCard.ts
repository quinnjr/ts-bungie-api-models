import { MembershipType } from '../MembershipType';

/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
 */
export interface InfoCard {
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
   */
  supplementalDisplayName?: string;
  /**
   * URL the Icon if available.
   */
  iconPath?: string;
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
