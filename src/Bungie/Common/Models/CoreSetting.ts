export interface CoreSetting {
  identifier?: string;
  isDefault?: boolean;
  displayName?: string;
  summary?: string;
  imagePath?: string;
  childSettings?: Array<CoreSetting>;
}
