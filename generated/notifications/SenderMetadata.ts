/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { NonEmptyString } from "italia-ts-commons/lib/strings";

/**
 * Metadata associated to a sender (service).
 */

// required attributes
const SenderMetadataR = t.interface({
  service_name: NonEmptyString,

  organization_name: NonEmptyString,

  department_name: NonEmptyString
});

// optional attributes
const SenderMetadataO = t.partial({});

export const SenderMetadata = t.exact(
  t.intersection([SenderMetadataR, SenderMetadataO], "SenderMetadata")
);

export type SenderMetadata = t.TypeOf<typeof SenderMetadata>;
