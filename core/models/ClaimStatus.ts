/* tslint:disable */
/* eslint-disable */
/**
 * Komga API
 * Komga offers 2 APIs: REST and OPDS.  Both APIs are secured using HTTP Basic Authentication.
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ClaimStatus
 */
export interface ClaimStatus {
    /**
     * 
     * @type {boolean}
     * @memberof ClaimStatus
     */
    isClaimed: boolean;
}

/**
 * Check if a given object implements the ClaimStatus interface.
 */
export function instanceOfClaimStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isClaimed" in value;

    return isInstance;
}

export function ClaimStatusFromJSON(json: any): ClaimStatus {
    return ClaimStatusFromJSONTyped(json, false);
}

export function ClaimStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClaimStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isClaimed': json['isClaimed'],
    };
}

export function ClaimStatusToJSON(value?: ClaimStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isClaimed': value.isClaimed,
    };
}

