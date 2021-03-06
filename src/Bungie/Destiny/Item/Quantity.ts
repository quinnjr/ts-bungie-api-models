/**
 * Used in a number of Destiny contracts to return data about an item stack and its quantity. Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returned will be 1. If it's not... uh, let me know okay? Thanks.
 */
export interface ItemQuantity {
  /**
   * The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
   */
  itemHash?: number;
  /**
   * If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
   */
  itemInstanceId?: number;
  /**
   * The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
   */
  quantity?: number;
}
