/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { WithinRangeInteger } from "italia-ts-commons/lib/numbers";
import * as t from "io-ts";

/**
 * The HTTP status code generated by the origin server for this occurrence
 * of the problem.
 */

export type HttpStatusCode = t.TypeOf<typeof HttpStatusCode>;
export const HttpStatusCode = WithinRangeInteger(100, 600);
