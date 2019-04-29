/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { ImportoEuroCents } from "./ImportoEuroCents";
import { CodiceContestoPagamento } from "./CodiceContestoPagamento";
import { Iban } from "./Iban";
import { EnteBeneficiario } from "./EnteBeneficiario";
import { SpezzoniCausaleVersamento } from "./SpezzoniCausaleVersamento";
import * as t from "io-ts";
import { WithinRangeString } from "italia-ts-commons/lib/strings";

/**
 * Define the response to send to CD App containing payment information
 */

// required attributes
const PaymentRequestsGetResponseR = t.interface({
  importoSingoloVersamento: ImportoEuroCents,

  codiceContestoPagamento: CodiceContestoPagamento
});

// optional attributes
const PaymentRequestsGetResponseO = t.partial({
  ibanAccredito: Iban,

  causaleVersamento: WithinRangeString(1, 141),

  enteBeneficiario: EnteBeneficiario,

  spezzoniCausaleVersamento: SpezzoniCausaleVersamento
});

export const PaymentRequestsGetResponse = t.intersection(
  [PaymentRequestsGetResponseR, PaymentRequestsGetResponseO],
  "PaymentRequestsGetResponse"
);

export type PaymentRequestsGetResponse = t.TypeOf<
  typeof PaymentRequestsGetResponse
>;
