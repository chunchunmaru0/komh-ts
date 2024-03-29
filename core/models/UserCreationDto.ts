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
 * @interface UserCreationDto
 */
export interface UserCreationDto {
    /**
     * 
     * @type {string}
     * @memberof UserCreationDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreationDto
     */
    password: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserCreationDto
     */
    roles: Array<string>;
}

/**
 * Check if a given object implements the UserCreationDto interface.
 */
export function instanceOfUserCreationDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "roles" in value;

    return isInstance;
}

export function UserCreationDtoFromJSON(json: any): UserCreationDto {
    return UserCreationDtoFromJSONTyped(json, false);
}

export function UserCreationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCreationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
        'roles': json['roles'],
    };
}

export function UserCreationDtoToJSON(value?: UserCreationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'roles': value.roles,
    };
}

