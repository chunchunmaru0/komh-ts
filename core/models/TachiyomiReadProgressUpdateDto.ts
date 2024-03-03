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
 * @interface TachiyomiReadProgressUpdateDto
 */
export interface TachiyomiReadProgressUpdateDto {
    /**
     * 
     * @type {number}
     * @memberof TachiyomiReadProgressUpdateDto
     */
    lastBookRead: number;
}

/**
 * Check if a given object implements the TachiyomiReadProgressUpdateDto interface.
 */
export function instanceOfTachiyomiReadProgressUpdateDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lastBookRead" in value;

    return isInstance;
}

export function TachiyomiReadProgressUpdateDtoFromJSON(json: any): TachiyomiReadProgressUpdateDto {
    return TachiyomiReadProgressUpdateDtoFromJSONTyped(json, false);
}

export function TachiyomiReadProgressUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TachiyomiReadProgressUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastBookRead': json['lastBookRead'],
    };
}

export function TachiyomiReadProgressUpdateDtoToJSON(value?: TachiyomiReadProgressUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastBookRead': value.lastBookRead,
    };
}
