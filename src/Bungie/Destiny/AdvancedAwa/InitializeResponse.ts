export interface InitializeResponse {
  /**
   * ID used to get the token. Present this ID to the user as it will identify this specific request on their device.
   */
  correlationId?: string;
  /**
   * True if the PUSH message will only be sent to the device that made this request.
   */
  sentToSelf?: boolean;
}
