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
 * @interface ReadListUpdateDto
 */
export interface ReadListUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof ReadListUpdateDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReadListUpdateDto
     */
    summary?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReadListUpdateDto
     */
    bookIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ReadListUpdateDto
     */
    ordered?: boolean;
}

/**
 * Check if a given object implements the ReadListUpdateDto interface.
 */
export function instanceOfReadListUpdateDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadListUpdateDtoFromJSON(json: any): ReadListUpdateDto {
    return ReadListUpdateDtoFromJSONTyped(json, false);
}

export function ReadListUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadListUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'bookIds': !exists(json, 'bookIds') ? undefined : json['bookIds'],
        'ordered': !exists(json, 'ordered') ? undefined : json['ordered'],
    };
}

export function ReadListUpdateDtoToJSON(value?: ReadListUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'summary': value.summary,
        'bookIds': value.bookIds,
        'ordered': value.ordered,
    };
}
