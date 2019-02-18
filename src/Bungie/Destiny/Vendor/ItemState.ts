/**
 * The possible states of Destiny Profile Records. IMPORTANT: Any given item can theoretically have many of these states simultaneously: as a result, this was altered to be a flags enumeration for v3.2.0.
 */
export enum ItemState {
  None,
  Incomplete,
  RewardAvailable,
  Complete = 4,
  New = 8,
  Featured = 16,
  Ending = 32,
  OnSale = 64,
  Owned = 128,
  WideView = 256,
  NexusAttention = 512
};
