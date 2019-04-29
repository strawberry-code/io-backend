/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { WithinRangeString } from "italia-ts-commons/lib/strings";
import { PatternString } from "italia-ts-commons/lib/strings";

/**
 * Beneficiary institution related to a payment
 */

// required attributes
const EnteBeneficiarioR = t.interface({
  identificativoUnivocoBeneficiario: WithinRangeString(1, 36),

  denominazioneBeneficiario: WithinRangeString(1, 71)
});

// optional attributes
const EnteBeneficiarioO = t.partial({
  codiceUnitOperBeneficiario: WithinRangeString(1, 36),

  denomUnitOperBeneficiario: WithinRangeString(1, 71),

  indirizzoBeneficiario: WithinRangeString(1, 71),

  civicoBeneficiario: WithinRangeString(1, 17),

  capBeneficiario: WithinRangeString(1, 17),

  localitaBeneficiario: WithinRangeString(1, 36),

  provinciaBeneficiario: WithinRangeString(1, 36),

  nazioneBeneficiario: PatternString("[A-Z]{2}")
});

export const EnteBeneficiario = t.exact(
  t.intersection([EnteBeneficiarioR, EnteBeneficiarioO], "EnteBeneficiario")
);

export type EnteBeneficiario = t.TypeOf<typeof EnteBeneficiario>;
