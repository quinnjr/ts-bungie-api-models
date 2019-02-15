import { ApiUsage } from '../Applications/ApiUsage';
import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';

export interface InlineResponse200 {
  response?: ApiUsage;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
