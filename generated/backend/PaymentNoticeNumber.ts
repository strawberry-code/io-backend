/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { PatternString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

/**
 * The field ["Numero Avviso"](https://pagopa-specifichepagamenti.readthedocs.io/it/latest/_docs/Capitolo7.html#il-numero-avviso-e-larchivio-dei-pagamenti-in-attesa) of pagoPa, needed to identify the payment. Format is `<aux digit (1n)>[<application code> (2n)]<codice IUV (15|17n)>`. See [pagoPa specs](https://www.agid.gov.it/sites/default/files/repository_files/specifiche_attuative_pagamenti_1_3_1_0.pdf) for more info on this field and the IUV.
 */

export type PaymentNoticeNumber = t.TypeOf<typeof PaymentNoticeNumber>;
export const PaymentNoticeNumber = PatternString("^[0123][0-9]{17}$");
