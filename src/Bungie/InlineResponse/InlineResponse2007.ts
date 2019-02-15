import { Description } from '../Content/Models/Content/Type/Description';
import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';

export interface InlineResponse2007 {
  response?: Description;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
