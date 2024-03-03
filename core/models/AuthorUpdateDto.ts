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
 * @interface AuthorUpdateDto
 */
export interface AuthorUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof AuthorUpdateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorUpdateDto
     */
    role: string;
}

/**
 * Check if a given object implements the AuthorUpdateDto interface.
 */
export function instanceOfAuthorUpdateDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function AuthorUpdateDtoFromJSON(json: any): AuthorUpdateDto {
    return AuthorUpdateDtoFromJSONTyped(json, false);
}

export function AuthorUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'role': json['role'],
    };
}

export function AuthorUpdateDtoToJSON(value?: AuthorUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'role': value.role,
    };
}
