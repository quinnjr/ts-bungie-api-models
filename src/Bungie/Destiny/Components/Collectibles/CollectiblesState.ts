export enum CollectiblesState {
  None,
  NotAcquired,
  Obscured,
  Invisible = 4,
  CannotAffordMaterialRequirements = 8,
  InventorySpaceUnavailable = 16,
  UniquenessViolation = 32,
  PurchaseDisabled = 64,
}
