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
 * @interface DirectoryRequestDto
 */
export interface DirectoryRequestDto {
    /**
     * 
     * @type {string}
     * @memberof DirectoryRequestDto
     */
    path: string;
}

/**
 * Check if a given object implements the DirectoryRequestDto interface.
 */
export function instanceOfDirectoryRequestDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function DirectoryRequestDtoFromJSON(json: any): DirectoryRequestDto {
    return DirectoryRequestDtoFromJSONTyped(json, false);
}

export function DirectoryRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectoryRequestDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'path': json['path'],
    };
}

export function DirectoryRequestDtoToJSON(value?: DirectoryRequestDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'path': value.path,
    };
}

