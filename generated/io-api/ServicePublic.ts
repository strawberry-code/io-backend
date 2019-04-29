/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { ServiceId } from "./ServiceId";
import { ServiceName } from "./ServiceName";
import { OrganizationName } from "./OrganizationName";
import { DepartmentName } from "./DepartmentName";
import { OrganizationFiscalCode } from "./OrganizationFiscalCode";
import * as t from "io-ts";

/**
 * A Service associated to an user's subscription.
 */

// required attributes
const ServicePublicR = t.interface({
  service_id: ServiceId,

  service_name: ServiceName,

  organization_name: OrganizationName,

  department_name: DepartmentName,

  organization_fiscal_code: OrganizationFiscalCode,

  version: t.Integer
});

// optional attributes
const ServicePublicO = t.partial({});

export const ServicePublic = t.intersection(
  [ServicePublicR, ServicePublicO],
  "ServicePublic"
);

export type ServicePublic = t.TypeOf<typeof ServicePublic>;
