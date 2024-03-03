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
import type { BookDto } from './BookDto';
import {
    BookDtoFromJSON,
    BookDtoFromJSONTyped,
    BookDtoToJSON,
} from './BookDto';
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
 * @interface PageBookDto
 */
export interface PageBookDto {
    /**
     * 
     * @type {number}
     * @memberof PageBookDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBookDto
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBookDto
     */
    size?: number;
    /**
     * 
     * @type {Array<BookDto>}
     * @memberof PageBookDto
     */
    content?: Array<BookDto>;
    /**
     * 
     * @type {number}
     * @memberof PageBookDto
     */
    number?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageBookDto
     */
    sort?: SortObject;
    /**
     * 
     * @type {number}
     * @memberof PageBookDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageBookDto
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageBookDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageBookDto
     */
    last?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageBookDto
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageBookDto interface.
 */
export function instanceOfPageBookDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageBookDtoFromJSON(json: any): PageBookDto {
    return PageBookDtoFromJSONTyped(json, false);
}

export function PageBookDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageBookDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(BookDtoFromJSON)),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !exists(json, 'pageable') ? undefined : PageableObjectFromJSON(json['pageable']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageBookDtoToJSON(value?: PageBookDto | null): any {
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
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(BookDtoToJSON)),
        'number': value.number,
        'sort': SortObjectToJSON(value.sort),
        'numberOfElements': value.numberOfElements,
        'pageable': PageableObjectToJSON(value.pageable),
        'first': value.first,
        'last': value.last,
        'empty': value.empty,
    };
}
