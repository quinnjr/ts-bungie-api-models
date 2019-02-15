import { CoreSetting } from './CoreSetting';
import { CoreSystem } from './CoreSystem';
import { Destiny2CoreSettings } from './Destiny2CoreSettings';

export interface CoreSettingsConfiguration {
  systems?: { [key: string]: CoreSystem; };
  ignoreReasons?: Array<CoreSetting>;
  forumCategories?: Array<CoreSetting>;
  groupAvatars?: Array<CoreSetting>;
  destinyMembershipTypes?: Array<CoreSetting>;
  recruitmentPlatformTags?: Array<CoreSetting>;
  recruitmentMiscTags?: Array<CoreSetting>;
  recruitmentActivities?: Array<CoreSetting>;
  userContentLocales?: Array<CoreSetting>;
  systemContentLocales?: Array<CoreSetting>;
  clanBannerDecals?: Array<CoreSetting>;
  clanBannerDecalColors?: Array<CoreSetting>;
  clanBannerGonfalons?: Array<CoreSetting>;
  clanBannerGonfalonColors?: Array<CoreSetting>;
  clanBannerGonfalonDetails?: Array<CoreSetting>;
  clanBannerGonfalonDetailColors?: Array<CoreSetting>;
  clanBannerStandards?: Array<CoreSetting>;
  destiny2CoreSettings?: Destiny2CoreSettings;
}
