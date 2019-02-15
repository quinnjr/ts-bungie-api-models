/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com

 */
import { DestinyHistoricalStatsDefinitionsDestinyActivityModeType } from './destinyHistoricalStatsDefinitionsDestinyActivityModeType';
import { DestinyHistoricalStatsDefinitionsDestinyStatsCategoryType } from './destinyHistoricalStatsDefinitionsDestinyStatsCategoryType';
import { DestinyHistoricalStatsDefinitionsDestinyStatsGroupType } from './destinyHistoricalStatsDefinitionsDestinyStatsGroupType';
import { DestinyHistoricalStatsDefinitionsPeriodType } from './destinyHistoricalStatsDefinitionsPeriodType';
import { DestinyHistoricalStatsDefinitionsUnitType } from './destinyHistoricalStatsDefinitionsUnitType';


export interface DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition {
  /**
   * Unique programmer friendly ID for this stat
   */
  statId?: string;
  /**
   * Statistic group
   */
  group?: DestinyHistoricalStatsDefinitionsDestinyStatsGroupType;
  /**
   * Time periods the statistic covers
   */
  periodTypes?: Array<DestinyHistoricalStatsDefinitionsPeriodType>;
  /**
   * Game modes where this statistic can be reported.
   */
  modes?: Array<DestinyHistoricalStatsDefinitionsDestinyActivityModeType>;
  /**
   * Category for the stat.
   */
  category?: DestinyHistoricalStatsDefinitionsDestinyStatsCategoryType;
  /**
   * Display name
   */
  statName?: string;
  /**
   * Display name abbreviated
   */
  statNameAbbr?: string;
  /**
   * Description of a stat if applicable.
   */
  statDescription?: string;
  /**
   * Unit, if any, for the statistic
   */
  unitType?: DestinyHistoricalStatsDefinitionsUnitType;
  /**
   * Optional URI to an icon for the statistic
   */
  iconImage?: string;
  /**
   * Optional icon for the statistic
   */
  mergeMethod?: DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition.MergeMethodEnum;
  /**
   * Localized Unit Name for the stat.
   */
  unitLabel?: string;
  /**
   * Weight assigned to this stat indicating its relative impressiveness.
   */
  weight?: number;
  /**
   * The tier associated with this medal - be it implicitly or explicitly.
   */
  medalTierHash?: number;
}
export namespace DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition {
  export type MergeMethodEnum = 0 | 1 | 2;
  export const MergeMethodEnum = {
    NUMBER_0: 0 as MergeMethodEnum,
    NUMBER_1: 1 as MergeMethodEnum,
    NUMBER_2: 2 as MergeMethodEnum
  };
}
