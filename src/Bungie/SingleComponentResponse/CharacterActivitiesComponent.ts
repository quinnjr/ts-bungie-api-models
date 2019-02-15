/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { ComponentPrivacySetting } from '../Components/ComponentPrivacySetting';
import { CharacterActivitiesComponent } from '../Destiny/Entities/Characters/Destiny/CharacterActivitiesComponent';

export interface CharacterActivitiesComponent {
  data?: CharacterActivitiesComponent;
  privacy?: ComponentPrivacySetting;
}
