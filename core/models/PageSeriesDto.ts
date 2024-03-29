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
import type { PageableObject } from './PageableObject';
import {
    PageableObjectFromJSON,
    PageableObjectFromJSONTyped,
    PageableObjectToJSON,
} from './PageableObject';
import type { SeriesDto } from './SeriesDto';
import {
    SeriesDtoFromJSON,
    SeriesDtoFromJSONTyped,
    SeriesDtoToJSON,
} from './SeriesDto';
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
} from './SortObject';

/**
 * 
 * @export
 * @interface PageSeriesDto
 */
export interface PageSeriesDto {
    /**
     * 
     * @type {number}
     * @memberof PageSeriesDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageSeriesDto
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageSeriesDto
     */
    size?: number;
    /**
     * 
     * @type {Array<SeriesDto>}
     * @memberof PageSeriesDto
     */
    content?: Array<SeriesDto>;
    /**
     * 
     * @type {number}
     * @memberof PageSeriesDto
     */
    number?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageSeriesDto
     */
    sort?: SortObject;
    /**
     * 
     * @type {number}
     * @memberof PageSeriesDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageSeriesDto
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageSeriesDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageSeriesDto
     */
    last?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageSeriesDto
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageSeriesDto interface.
 */
export function instanceOfPageSeriesDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageSeriesDtoFromJSON(json: any): PageSeriesDto {
    return PageSeriesDtoFromJSONTyped(json, false);
}

export function PageSeriesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageSeriesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(SeriesDtoFromJSON)),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortObjectFromJSON(json['sort']),
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !exists(json, 'pageable') ? undefined : PageableObjectFromJSON(json['pageable']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageSeriesDtoToJSON(value?: PageSeriesDto | null): any {
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
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(SeriesDtoToJSON)),
        'number': value.number,
        'sort': SortObjectToJSON(value.sort),
        'numberOfElements': value.numberOfElements,
        'pageable': PageableObjectToJSON(value.pageable),
        'first': value.first,
        'last': value.last,
        'empty': value.empty,
    };
}

