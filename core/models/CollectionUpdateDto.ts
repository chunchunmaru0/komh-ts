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
 * @interface CollectionUpdateDto
 */
export interface CollectionUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof CollectionUpdateDto
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CollectionUpdateDto
     */
    ordered?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CollectionUpdateDto
     */
    seriesIds?: Array<string>;
}

/**
 * Check if a given object implements the CollectionUpdateDto interface.
 */
export function instanceOfCollectionUpdateDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionUpdateDtoFromJSON(json: any): CollectionUpdateDto {
    return CollectionUpdateDtoFromJSONTyped(json, false);
}

export function CollectionUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ordered': !exists(json, 'ordered') ? undefined : json['ordered'],
        'seriesIds': !exists(json, 'seriesIds') ? undefined : json['seriesIds'],
    };
}

export function CollectionUpdateDtoToJSON(value?: CollectionUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'ordered': value.ordered,
        'seriesIds': value.seriesIds,
    };
}

