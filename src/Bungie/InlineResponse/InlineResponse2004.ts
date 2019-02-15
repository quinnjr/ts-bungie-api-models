import { UserTheme } from '../Config/UserTheme';
import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';

export interface InlineResponse2004 {
  response?: Array<UserTheme>;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
