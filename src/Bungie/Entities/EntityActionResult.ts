import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';

export interface EntityActionResult {
  entityId?: number;
  result?: PlatformErrorCodes;
}
