import { MembershipType } from '../../MembershipType';
import { ResponseReason } from './ResponseReason';
import { AwaType } from './AwaType';
import { UserSelection } from './UserSelection';

export interface AuthorizationResult {
  /**
   * Indication of how the user responded to the request. If the value is \"Approved\" the actionToken will contain the token that can be presented when performing the advanced write action.
   */
  userSelection?: UserSelection;
  responseReason?: ResponseReason;
  /**
   * Message to the app developer to help understand the response.
   */
  developerNote?: string;
  /**
   * Credential used to prove the user authorized an advanced write action.
   */
  actionToken?: string;
  /**
   * This token may be used to perform the requested action this number of times, at a maximum. If this value is 0, then there is no limit.
   */
  maximumNumberOfUses?: number;
  /**
   * Time, UTC, when token expires.
   */
  validUntil?: Date;
  /**
   * Advanced Write Action Type from the permission request.
   */
  type?: AwaType;
  /**
   * MembershipType from the permission request.
   */
  membershipType?: MembershipType;
}
