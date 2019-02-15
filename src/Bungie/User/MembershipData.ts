import { GeneralUser } from './GeneralUser';
import { InfoCard } from './InfoCard';

export interface MembershipData {
  /**
   * this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)
   */
  destinyMemberships?: Array<InfoCard>;
  bungieNetUser?: GeneralUser;
}
