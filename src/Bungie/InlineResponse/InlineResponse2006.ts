import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';
import { PublicPartnershipDetail } from '../Partnerships/PublicPartnershipDetail';

export interface InlineResponse2006 {
  response?: Array<PublicPartnershipDetail>;
  message?: string;
  messageData?: { [key: string]: string; };
  errorStatus?: string;
  throttleSeconds?: number;
  detailedErrorTrace?: string;
  errorCode?: PlatformErrorCodes;
}
