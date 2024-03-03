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
import type { BookMetadataAggregationDto } from './BookMetadataAggregationDto';
import {
    BookMetadataAggregationDtoFromJSON,
    BookMetadataAggregationDtoFromJSONTyped,
    BookMetadataAggregationDtoToJSON,
} from './BookMetadataAggregationDto';
import type { SeriesMetadataDto } from './SeriesMetadataDto';
import {
    SeriesMetadataDtoFromJSON,
    SeriesMetadataDtoFromJSONTyped,
    SeriesMetadataDtoToJSON,
} from './SeriesMetadataDto';

/**
 * 
 * @export
 * @interface SeriesDto
 */
export interface SeriesDto {
    /**
     * 
     * @type {string}
     * @memberof SeriesDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesDto
     */
    libraryId: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesDto
     */
    url: string;
    /**
     * 
     * @type {Date}
     * @memberof SeriesDto
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof SeriesDto
     */
    lastModified: Date;
    /**
     * 
     * @type {Date}
     * @memberof SeriesDto
     */
    fileLastModified: Date;
    /**
     * 
     * @type {number}
     * @memberof SeriesDto
     */
    booksCount: number;
    /**
     * 
     * @type {number}
     * @memberof SeriesDto
     */
    booksReadCount: number;
    /**
     * 
     * @type {number}
     * @memberof SeriesDto
     */
    booksUnreadCount: number;
    /**
     * 
     * @type {number}
     * @memberof SeriesDto
     */
    booksInProgressCount: number;
    /**
     * 
     * @type {SeriesMetadataDto}
     * @memberof SeriesDto
     */
    metadata: SeriesMetadataDto;
    /**
     * 
     * @type {BookMetadataAggregationDto}
     * @memberof SeriesDto
     */
    booksMetadata: BookMetadataAggregationDto;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesDto
     */
    deleted: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesDto
     */
    oneshot: boolean;
}

/**
 * Check if a given object implements the SeriesDto interface.
 */
export function instanceOfSeriesDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "libraryId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "lastModified" in value;
    isInstance = isInstance && "fileLastModified" in value;
    isInstance = isInstance && "booksCount" in value;
    isInstance = isInstance && "booksReadCount" in value;
    isInstance = isInstance && "booksUnreadCount" in value;
    isInstance = isInstance && "booksInProgressCount" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "booksMetadata" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "oneshot" in value;

    return isInstance;
}

export function SeriesDtoFromJSON(json: any): SeriesDto {
    return SeriesDtoFromJSONTyped(json, false);
}

export function SeriesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeriesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'libraryId': json['libraryId'],
        'name': json['name'],
        'url': json['url'],
        'created': (new Date(json['created'])),
        'lastModified': (new Date(json['lastModified'])),
        'fileLastModified': (new Date(json['fileLastModified'])),
        'booksCount': json['booksCount'],
        'booksReadCount': json['booksReadCount'],
        'booksUnreadCount': json['booksUnreadCount'],
        'booksInProgressCount': json['booksInProgressCount'],
        'metadata': SeriesMetadataDtoFromJSON(json['metadata']),
        'booksMetadata': BookMetadataAggregationDtoFromJSON(json['booksMetadata']),
        'deleted': json['deleted'],
        'oneshot': json['oneshot'],
    };
}

export function SeriesDtoToJSON(value?: SeriesDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'libraryId': value.libraryId,
        'name': value.name,
        'url': value.url,
        'created': (value.created.toISOString()),
        'lastModified': (value.lastModified.toISOString()),
        'fileLastModified': (value.fileLastModified.toISOString()),
        'booksCount': value.booksCount,
        'booksReadCount': value.booksReadCount,
        'booksUnreadCount': value.booksUnreadCount,
        'booksInProgressCount': value.booksInProgressCount,
        'metadata': SeriesMetadataDtoToJSON(value.metadata),
        'booksMetadata': BookMetadataAggregationDtoToJSON(value.booksMetadata),
        'deleted': value.deleted,
        'oneshot': value.oneshot,
    };
}
