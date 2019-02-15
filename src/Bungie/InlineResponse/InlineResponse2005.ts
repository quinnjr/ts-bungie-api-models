import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';
import { MembershipData } from '../User/MembershipData';

export interface InlineResponse2005 {
  response?: MembershipData;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
