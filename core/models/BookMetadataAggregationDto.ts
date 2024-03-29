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
import type { AuthorDto } from './AuthorDto';
import {
    AuthorDtoFromJSON,
    AuthorDtoFromJSONTyped,
    AuthorDtoToJSON,
} from './AuthorDto';

/**
 * 
 * @export
 * @interface BookMetadataAggregationDto
 */
export interface BookMetadataAggregationDto {
    /**
     * 
     * @type {Array<AuthorDto>}
     * @memberof BookMetadataAggregationDto
     */
    authors: Array<AuthorDto>;
    /**
     * 
     * @type {Set<string>}
     * @memberof BookMetadataAggregationDto
     */
    tags: Set<string>;
    /**
     * 
     * @type {Date}
     * @memberof BookMetadataAggregationDto
     */
    releaseDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof BookMetadataAggregationDto
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof BookMetadataAggregationDto
     */
    summaryNumber: string;
    /**
     * 
     * @type {Date}
     * @memberof BookMetadataAggregationDto
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof BookMetadataAggregationDto
     */
    lastModified: Date;
}

/**
 * Check if a given object implements the BookMetadataAggregationDto interface.
 */
export function instanceOfBookMetadataAggregationDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "authors" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "summaryNumber" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "lastModified" in value;

    return isInstance;
}

export function BookMetadataAggregationDtoFromJSON(json: any): BookMetadataAggregationDto {
    return BookMetadataAggregationDtoFromJSONTyped(json, false);
}

export function BookMetadataAggregationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookMetadataAggregationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authors': ((json['authors'] as Array<any>).map(AuthorDtoFromJSON)),
        'tags': json['tags'],
        'releaseDate': !exists(json, 'releaseDate') ? undefined : (new Date(json['releaseDate'])),
        'summary': json['summary'],
        'summaryNumber': json['summaryNumber'],
        'created': (new Date(json['created'])),
        'lastModified': (new Date(json['lastModified'])),
    };
}

export function BookMetadataAggregationDtoToJSON(value?: BookMetadataAggregationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authors': ((value.authors as Array<any>).map(AuthorDtoToJSON)),
        'tags': Array.from(value.tags as Set<any>),
        'releaseDate': value.releaseDate === undefined ? undefined : (value.releaseDate.toISOString().substring(0,10)),
        'summary': value.summary,
        'summaryNumber': value.summaryNumber,
        'created': (value.created.toISOString()),
        'lastModified': (value.lastModified.toISOString()),
    };
}

