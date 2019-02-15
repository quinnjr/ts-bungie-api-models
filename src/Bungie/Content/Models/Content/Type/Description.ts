import { Preview } from '../Preview';
import { Property } from './Property';
import { PropertySection } from './PropertySection';
import { Definition } from '../../TagMetadata/Definition';
import { Item } from '../../TagMetadata/Item';

export interface Description {
  cType?: string;
  name?: string;
  contentDescription?: string;
  previewImage?: string;
  priority?: number;
  reminder?: string;
  properties?: Array<Property>;
  tagMetadata?: Array<Definition>;
  tagMetadataItems?: { [key: string]: Item; };
  usageExamples?: Array<string>;
  showInContentEditor?: boolean;
  typeOf?: string;
  bindIdentifierToProperty?: string;
  boundRegex?: string;
  forceIdentifierBinding?: boolean;
  allowComments?: boolean;
  autoEnglishPropertyFallback?: boolean;
  bulkUploadable?: boolean;
  previews?: Array<Preview>;
  suppressCmsPath?: boolean;
  propertySections?: Array<PropertySection>;
}
