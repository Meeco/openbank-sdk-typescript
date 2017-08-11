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

import { MeetingKeysJson } from './meetingKeysJson';
import { MeetingPresentJson } from './meetingPresentJson';


export interface MeetingJson {
    present: MeetingPresentJson;

    providerId: string;

    bankId: string;

    purposeId: string;

    when: string;

    meetingId: string;

    keys: MeetingKeysJson;

}
