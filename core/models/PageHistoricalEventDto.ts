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
import type { HistoricalEventDto } from './HistoricalEventDto';
import {
    HistoricalEventDtoFromJSON,
    HistoricalEventDtoFromJSONTyped,
    HistoricalEventDtoToJSON,
} from './HistoricalEventDto';
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
 * @interface PageHistoricalEventDto
 */
export interface PageHistoricalEventDto {
    /**
     * 
     * @type {number}
     * @memberof PageHistoricalEventDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageHistoricalEventDto
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageHistoricalEventDto
     */
    size?: number;
    /**
     * 
     * @type {Array<HistoricalEventDto>}
     * @memberof PageHistoricalEventDto
     */
    content?: Array<HistoricalEventDto>;
    /**
     * 
     * @type {number}
     * @memberof PageHistoricalEventDto
     */
    number?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageHistoricalEventDto
     */
    sort?: SortObject;
    /**
     * 
     * @type {number}
     * @memberof PageHistoricalEventDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageHistoricalEventDto
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageHistoricalEventDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageHistoricalEventDto
     */
    last?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageHistoricalEventDto
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageHistoricalEventDto interface.
 */
export function instanceOfPageHistoricalEventDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageHistoricalEventDtoFromJSON(json: any): PageHistoricalEventDto {
    return PageHistoricalEventDtoFromJSONTyped(json, false);
}

export function PageHistoricalEventDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageHistoricalEventDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(HistoricalEventDtoFromJSON)),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !exists(json, 'pageable') ? undefined : PageableObjectFromJSON(json['pageable']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageHistoricalEventDtoToJSON(value?: PageHistoricalEventDto | null): any {
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
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(HistoricalEventDtoToJSON)),
        'number': value.number,
        'sort': SortObjectToJSON(value.sort),
        'numberOfElements': value.numberOfElements,
        'pageable': PageableObjectToJSON(value.pageable),
        'first': value.first,
        'last': value.last,
        'empty': value.empty,
    };
}

