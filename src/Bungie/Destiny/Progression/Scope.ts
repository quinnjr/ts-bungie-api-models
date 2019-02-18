/**
 * There are many Progressions in Destiny (think Character Level, or Reputation).
 * These are the various \"Scopes\" of Progressions, which affect many things:
 * Where/if they are stored 
 * How they are calculated
 * Where they can be used in other game logic
 */
export enum Scope {
  Account,
  Character,
  Clan,
  Item,
  ImplicitFromEquipment,
  Mapped,
  MappedAggregate,
  MappedStat,
  MappedUnlockValue
}
