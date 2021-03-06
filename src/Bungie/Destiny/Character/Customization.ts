/**
 * Raw data about the customization options chosen for a character's face and appearance.  You can look up the relevant class/race/gender combo in DestinyCharacterCustomizationOptionDefinition for the character, and then look up these values within the CustomizationOptions found to pull some data about their choices. Warning: not all of that data is meaningful. Some data has useful icons. Others have nothing, and are only meant for 3D rendering purposes (which we sadly do not expose yet)
 */
export interface Customization {
  personality?: number;
  face?: number;
  skinColor?: number;
  lipColor?: number;
  eyeColor?: number;
  hairColors?: Array<number>;
  featureColors?: Array<number>;
  decalColor?: number;
  wearHelmet?: boolean;
  hairIndex?: number;
  featureIndex?: number;
  decalIndex?: number;
}
