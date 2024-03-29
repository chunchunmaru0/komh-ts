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
import type { AuthorUpdateDto } from './AuthorUpdateDto';
import {
    AuthorUpdateDtoFromJSON,
    AuthorUpdateDtoFromJSONTyped,
    AuthorUpdateDtoToJSON,
} from './AuthorUpdateDto';
import type { WebLinkUpdateDto } from './WebLinkUpdateDto';
import {
    WebLinkUpdateDtoFromJSON,
    WebLinkUpdateDtoFromJSONTyped,
    WebLinkUpdateDtoToJSON,
} from './WebLinkUpdateDto';

/**
 * Metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.
 * @export
 * @interface BookMetadataUpdateDto
 */
export interface BookMetadataUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof BookMetadataUpdateDto
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    titleLock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    summaryLock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BookMetadataUpdateDto
     */
    number?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    numberLock?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BookMetadataUpdateDto
     */
    numberSort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    numberSortLock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    releaseDateLock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    authorsLock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    tagsLock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    isbnLock?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BookMetadataUpdateDto
     */
    linksLock?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof BookMetadataUpdateDto
     */
    tags?: Set<string>;
    /**
     * 
     * @type {Date}
     * @memberof BookMetadataUpdateDto
     */
    releaseDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof BookMetadataUpdateDto
     */
    isbn?: string;
    /**
     * 
     * @type {Array<WebLinkUpdateDto>}
     * @memberof BookMetadataUpdateDto
     */
    links?: Array<WebLinkUpdateDto>;
    /**
     * 
     * @type {Array<AuthorUpdateDto>}
     * @memberof BookMetadataUpdateDto
     */
    authors?: Array<AuthorUpdateDto>;
    /**
     * 
     * @type {string}
     * @memberof BookMetadataUpdateDto
     */
    summary?: string;
}

/**
 * Check if a given object implements the BookMetadataUpdateDto interface.
 */
export function instanceOfBookMetadataUpdateDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookMetadataUpdateDtoFromJSON(json: any): BookMetadataUpdateDto {
    return BookMetadataUpdateDtoFromJSONTyped(json, false);
}

export function BookMetadataUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookMetadataUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'titleLock': !exists(json, 'titleLock') ? undefined : json['titleLock'],
        'summaryLock': !exists(json, 'summaryLock') ? undefined : json['summaryLock'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'numberLock': !exists(json, 'numberLock') ? undefined : json['numberLock'],
        'numberSort': !exists(json, 'numberSort') ? undefined : json['numberSort'],
        'numberSortLock': !exists(json, 'numberSortLock') ? undefined : json['numberSortLock'],
        'releaseDateLock': !exists(json, 'releaseDateLock') ? undefined : json['releaseDateLock'],
        'authorsLock': !exists(json, 'authorsLock') ? undefined : json['authorsLock'],
        'tagsLock': !exists(json, 'tagsLock') ? undefined : json['tagsLock'],
        'isbnLock': !exists(json, 'isbnLock') ? undefined : json['isbnLock'],
        'linksLock': !exists(json, 'linksLock') ? undefined : json['linksLock'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'releaseDate': !exists(json, 'releaseDate') ? undefined : (new Date(json['releaseDate'])),
        'isbn': !exists(json, 'isbn') ? undefined : json['isbn'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(WebLinkUpdateDtoFromJSON)),
        'authors': !exists(json, 'authors') ? undefined : ((json['authors'] as Array<any>).map(AuthorUpdateDtoFromJSON)),
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
    };
}

export function BookMetadataUpdateDtoToJSON(value?: BookMetadataUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'titleLock': value.titleLock,
        'summaryLock': value.summaryLock,
        'number': value.number,
        'numberLock': value.numberLock,
        'numberSort': value.numberSort,
        'numberSortLock': value.numberSortLock,
        'releaseDateLock': value.releaseDateLock,
        'authorsLock': value.authorsLock,
        'tagsLock': value.tagsLock,
        'isbnLock': value.isbnLock,
        'linksLock': value.linksLock,
        'tags': value.tags === undefined ? undefined : Array.from(value.tags as Set<any>),
        'releaseDate': value.releaseDate === undefined ? undefined : (value.releaseDate.toISOString().substring(0,10)),
        'isbn': value.isbn,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(WebLinkUpdateDtoToJSON)),
        'authors': value.authors === undefined ? undefined : ((value.authors as Array<any>).map(AuthorUpdateDtoToJSON)),
        'summary': value.summary,
    };
}

