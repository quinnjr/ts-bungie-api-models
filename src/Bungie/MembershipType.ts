/**
 * The types of membership the Accounts system supports. This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.MembershipType.
 */
export enum MembershipType {
  None = 0,
  Xbox,
  Psn,
  Blizzard = 4,
  Demon = 10,
  BungieNext = 254,
  All = -1
};
