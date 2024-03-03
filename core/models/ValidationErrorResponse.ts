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
import type { Violation } from './Violation';
import {
    ViolationFromJSON,
    ViolationFromJSONTyped,
    ViolationToJSON,
} from './Violation';

/**
 * 
 * @export
 * @interface ValidationErrorResponse
 */
export interface ValidationErrorResponse {
    /**
     * 
     * @type {Array<Violation>}
     * @memberof ValidationErrorResponse
     */
    violations: Array<Violation>;
}

/**
 * Check if a given object implements the ValidationErrorResponse interface.
 */
export function instanceOfValidationErrorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "violations" in value;

    return isInstance;
}

export function ValidationErrorResponseFromJSON(json: any): ValidationErrorResponse {
    return ValidationErrorResponseFromJSONTyped(json, false);
}

export function ValidationErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'violations': ((json['violations'] as Array<any>).map(ViolationFromJSON)),
    };
}

export function ValidationErrorResponseToJSON(value?: ValidationErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'violations': ((value.violations as Array<any>).map(ViolationToJSON)),
    };
}

