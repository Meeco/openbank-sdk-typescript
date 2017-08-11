/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AmountOfMoneyJsonV121 } from './amountOfMoneyJsonV121';
import { TransactionTypeId } from './transactionTypeId';
export interface TransactionTypeJsonV200 {
    description: string;
    shortCode: string;
    bankId: string;
    id: TransactionTypeId;
    charge: AmountOfMoneyJsonV121;
    summary: string;
}
