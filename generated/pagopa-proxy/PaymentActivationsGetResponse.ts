/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { WithinRangeString } from "italia-ts-commons/lib/strings";

/**
 * Define the response to send to App to provide the payment activation status related to a codiceContestoPagamento
 */

// required attributes
const PaymentActivationsGetResponseR = t.interface({
  idPagamento: WithinRangeString(1, 37)
});

// optional attributes
const PaymentActivationsGetResponseO = t.partial({});

export const PaymentActivationsGetResponse = t.intersection(
  [PaymentActivationsGetResponseR, PaymentActivationsGetResponseO],
  "PaymentActivationsGetResponse"
);

export type PaymentActivationsGetResponse = t.TypeOf<
  typeof PaymentActivationsGetResponse
>;
