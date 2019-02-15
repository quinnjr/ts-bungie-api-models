import { PropertyDataTypeEnum } from '../PropertyDataTypeEnum';
import { DefaultValue } from './DefaultValue';

export interface Property {
  name?: string;
  readableName?: string;
  value?: string;
  propertyDescription?: string;
  localizable?: boolean;
  fallback?: boolean;
  enabled?: boolean;
  order?: number;
  visible?: boolean;
  isTitle?: boolean;
  required?: boolean;
  maxLength?: number;
  maxByteLength?: number;
  maxFileSize?: number;
  regexp?: string;
  validateAs?: string;
  rssAttribute?: string;
  visibleDependency?: string;
  visibleOn?: string;
  datatype?: PropertyDataTypeEnum;
  attributes?: { [key: string]: string; };
  childProperties?: Array<ModelsContentTypeProperty>;
  contentTypeAllowed?: string;
  bindToProperty?: string;
  boundRegex?: string;
  representationSelection?: { [key: string]: string; };
  defaultValues?: Array<DefaultValue>;
  isExternalAllowed?: boolean;
  propertySection?: string;
  weight?: number;
  entitytype?: string;
  isCombo?: boolean;
  suppressProperty?: boolean;
  legalContentTypes?: Array<string>;
  representationValidationString?: string;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  isVideo?: boolean;
  isImage?: boolean;
}