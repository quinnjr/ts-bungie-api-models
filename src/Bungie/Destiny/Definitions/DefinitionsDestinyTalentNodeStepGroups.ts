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
import { DestinyDefinitionsDestinyTalentNodeStepDamageTypes } from './destinyDefinitionsDestinyTalentNodeStepDamageTypes';
import { DestinyDefinitionsDestinyTalentNodeStepGuardianAttributes } from './destinyDefinitionsDestinyTalentNodeStepGuardianAttributes';
import { DestinyDefinitionsDestinyTalentNodeStepImpactEffects } from './destinyDefinitionsDestinyTalentNodeStepImpactEffects';
import { DestinyDefinitionsDestinyTalentNodeStepLightAbilities } from './destinyDefinitionsDestinyTalentNodeStepLightAbilities';
import { DestinyDefinitionsDestinyTalentNodeStepWeaponPerformances } from './destinyDefinitionsDestinyTalentNodeStepWeaponPerformances';


/**
 * These properties are an attempt to categorize talent node steps by certain common properties. See the related enumerations for the type of properties being categorized.
 */
export interface DestinyDefinitionsDestinyTalentNodeStepGroups { 
    weaponPerformance?: DestinyDefinitionsDestinyTalentNodeStepWeaponPerformances;
    impactEffects?: DestinyDefinitionsDestinyTalentNodeStepImpactEffects;
    guardianAttributes?: DestinyDefinitionsDestinyTalentNodeStepGuardianAttributes;
    lightAbilities?: DestinyDefinitionsDestinyTalentNodeStepLightAbilities;
    damageTypes?: DestinyDefinitionsDestinyTalentNodeStepDamageTypes;
}