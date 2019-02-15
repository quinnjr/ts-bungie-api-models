import { Application } from '../Applications/Application';
import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';

export interface InlineResponse2001 {
  response?: Array<Application>;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
