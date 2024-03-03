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
import type { AuthenticationActivityDto } from './AuthenticationActivityDto';
import {
    AuthenticationActivityDtoFromJSON,
    AuthenticationActivityDtoFromJSONTyped,
    AuthenticationActivityDtoToJSON,
} from './AuthenticationActivityDto';
import type { PageableObject } from './PageableObject';
import {
    PageableObjectFromJSON,
    PageableObjectFromJSONTyped,
    PageableObjectToJSON,
} from './PageableObject';
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
} from './SortObject';

/**
 * 
 * @export
 * @interface PageAuthenticationActivityDto
 */
export interface PageAuthenticationActivityDto {
    /**
     * 
     * @type {number}
     * @memberof PageAuthenticationActivityDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageAuthenticationActivityDto
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageAuthenticationActivityDto
     */
    size?: number;
    /**
     * 
     * @type {Array<AuthenticationActivityDto>}
     * @memberof PageAuthenticationActivityDto
     */
    content?: Array<AuthenticationActivityDto>;
    /**
     * 
     * @type {number}
     * @memberof PageAuthenticationActivityDto
     */
    number?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageAuthenticationActivityDto
     */
    sort?: SortObject;
    /**
     * 
     * @type {number}
     * @memberof PageAuthenticationActivityDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageAuthenticationActivityDto
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageAuthenticationActivityDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageAuthenticationActivityDto
     */
    last?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageAuthenticationActivityDto
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageAuthenticationActivityDto interface.
 */
export function instanceOfPageAuthenticationActivityDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageAuthenticationActivityDtoFromJSON(json: any): PageAuthenticationActivityDto {
    return PageAuthenticationActivityDtoFromJSONTyped(json, false);
}

export function PageAuthenticationActivityDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageAuthenticationActivityDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(AuthenticationActivityDtoFromJSON)),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !exists(json, 'pageable') ? undefined : PageableObjectFromJSON(json['pageable']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageAuthenticationActivityDtoToJSON(value?: PageAuthenticationActivityDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalElements': value.totalElements,
        'totalPages': value.totalPages,
        'size': value.size,
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(AuthenticationActivityDtoToJSON)),
        'number': value.number,
        'sort': SortObjectToJSON(value.sort),
        'numberOfElements': value.numberOfElements,
        'pageable': PageableObjectToJSON(value.pageable),
        'first': value.first,
        'last': value.last,
        'empty': value.empty,
    };
}
