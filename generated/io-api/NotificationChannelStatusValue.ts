/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { enumType } from "italia-ts-commons/lib/types";
import * as t from "io-ts";

export enum NotificationChannelStatusValueEnum {
  "SENT" = "SENT",

  "THROTTLED" = "THROTTLED",

  "EXPIRED" = "EXPIRED",

  "FAILED" = "FAILED"
}

/**
 * The status of a notification (one for each channel).
 * "SENT": the notification was succesfully sent to the channel (ie. email or push notification)
 * "THROTTLED": a temporary failure caused a retry during the notification processing;
 *   the notification associated with this channel will be delayed for a maximum of 7 days or until the message expires
 * "EXPIRED": the message expired before the notification could be sent;
 *   this means that the maximum message time to live was reached; no notification will be sent to this channel
 * "FAILED": a permanent failure caused the process to exit with an error, no notification will be sent to this channel
 */

export type NotificationChannelStatusValue = t.TypeOf<
  typeof NotificationChannelStatusValue
>;
export const NotificationChannelStatusValue = enumType<
  NotificationChannelStatusValueEnum
>(NotificationChannelStatusValueEnum, "NotificationChannelStatusValue");
