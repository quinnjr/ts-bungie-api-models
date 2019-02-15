/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ComponentsComponentPrivacySetting } from './componentsComponentPrivacySetting';
import { DestinyEntitiesItemsDestinyItemPerksComponent } from './destinyEntitiesItemsDestinyItemPerksComponent';


export interface DictionaryComponentResponseOfint32AndDestinyItemPerksComponent { 
    data?: { [key: string]: DestinyEntitiesItemsDestinyItemPerksComponent; };
    privacy?: ComponentsComponentPrivacySetting;
}
