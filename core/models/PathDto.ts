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
 * @interface PathDto
 */
export interface PathDto {
    /**
     * 
     * @type {string}
     * @memberof PathDto
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof PathDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PathDto
     */
    path: string;
}

/**
 * Check if a given object implements the PathDto interface.
 */
export function instanceOfPathDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function PathDtoFromJSON(json: any): PathDto {
    return PathDtoFromJSONTyped(json, false);
}

export function PathDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PathDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'name': json['name'],
        'path': json['path'],
    };
}

export function PathDtoToJSON(value?: PathDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'path': value.path,
    };
}

