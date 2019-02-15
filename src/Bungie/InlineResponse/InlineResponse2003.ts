import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';
import { GeneralUser } from '../User/GeneralUser';

export interface InlineResponse2003 {
  response?: Array<GeneralUser>;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
