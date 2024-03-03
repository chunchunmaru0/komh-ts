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
 * page can be omitted if completed is set to true. completed can be omitted, and will be set accordingly depending on the page passed and the total number of pages in the book.
 * @export
 * @interface ReadProgressUpdateDto
 */
export interface ReadProgressUpdateDto {
    /**
     * 
     * @type {number}
     * @memberof ReadProgressUpdateDto
     */
    page?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReadProgressUpdateDto
     */
    completed?: boolean;
}

/**
 * Check if a given object implements the ReadProgressUpdateDto interface.
 */
export function instanceOfReadProgressUpdateDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadProgressUpdateDtoFromJSON(json: any): ReadProgressUpdateDto {
    return ReadProgressUpdateDtoFromJSONTyped(json, false);
}

export function ReadProgressUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadProgressUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
    };
}

export function ReadProgressUpdateDtoToJSON(value?: ReadProgressUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'completed': value.completed,
    };
}

