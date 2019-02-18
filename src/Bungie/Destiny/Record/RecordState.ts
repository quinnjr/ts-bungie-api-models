/**
 * A Flags enumeration where each bit represents a possible state that a Record/Triumph can be in.
 */
export enum RecordState {
  None,
  RecordRedeemed,
  RewardUnavailable,
  ObjecctiveNotCompleted = 4,
  Obscured = 8,
  Invisible = 16,
  EntitlementUnowned = 32,
  CanEquipTitle = 64
}
