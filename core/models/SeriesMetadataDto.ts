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
import type { AlternateTitleDto } from './AlternateTitleDto';
import {
    AlternateTitleDtoFromJSON,
    AlternateTitleDtoFromJSONTyped,
    AlternateTitleDtoToJSON,
} from './AlternateTitleDto';
import type { WebLinkDto } from './WebLinkDto';
import {
    WebLinkDtoFromJSON,
    WebLinkDtoFromJSONTyped,
    WebLinkDtoToJSON,
} from './WebLinkDto';

/**
 * 
 * @export
 * @interface SeriesMetadataDto
 */
export interface SeriesMetadataDto {
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    status: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    statusLock: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    titleLock: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    titleSort: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    titleSortLock: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    summary: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    summaryLock: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    readingDirection: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    readingDirectionLock: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    publisher: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    publisherLock: boolean;
    /**
     * 
     * @type {number}
     * @memberof SeriesMetadataDto
     */
    ageRating?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    ageRatingLock: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesMetadataDto
     */
    language: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    languageLock: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof SeriesMetadataDto
     */
    genres: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    genresLock: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof SeriesMetadataDto
     */
    tags: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    tagsLock: boolean;
    /**
     * 
     * @type {number}
     * @memberof SeriesMetadataDto
     */
    totalBookCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    totalBookCountLock: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof SeriesMetadataDto
     */
    sharingLabels: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    sharingLabelsLock: boolean;
    /**
     * 
     * @type {Array<WebLinkDto>}
     * @memberof SeriesMetadataDto
     */
    links: Array<WebLinkDto>;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    linksLock: boolean;
    /**
     * 
     * @type {Array<AlternateTitleDto>}
     * @memberof SeriesMetadataDto
     */
    alternateTitles: Array<AlternateTitleDto>;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesMetadataDto
     */
    alternateTitlesLock: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SeriesMetadataDto
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof SeriesMetadataDto
     */
    lastModified: Date;
}

/**
 * Check if a given object implements the SeriesMetadataDto interface.
 */
export function instanceOfSeriesMetadataDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "statusLock" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "titleLock" in value;
    isInstance = isInstance && "titleSort" in value;
    isInstance = isInstance && "titleSortLock" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "summaryLock" in value;
    isInstance = isInstance && "readingDirection" in value;
    isInstance = isInstance && "readingDirectionLock" in value;
    isInstance = isInstance && "publisher" in value;
    isInstance = isInstance && "publisherLock" in value;
    isInstance = isInstance && "ageRatingLock" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "languageLock" in value;
    isInstance = isInstance && "genres" in value;
    isInstance = isInstance && "genresLock" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "tagsLock" in value;
    isInstance = isInstance && "totalBookCountLock" in value;
    isInstance = isInstance && "sharingLabels" in value;
    isInstance = isInstance && "sharingLabelsLock" in value;
    isInstance = isInstance && "links" in value;
    isInstance = isInstance && "linksLock" in value;
    isInstance = isInstance && "alternateTitles" in value;
    isInstance = isInstance && "alternateTitlesLock" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "lastModified" in value;

    return isInstance;
}

export function SeriesMetadataDtoFromJSON(json: any): SeriesMetadataDto {
    return SeriesMetadataDtoFromJSONTyped(json, false);
}

export function SeriesMetadataDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeriesMetadataDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'statusLock': json['statusLock'],
        'title': json['title'],
        'titleLock': json['titleLock'],
        'titleSort': json['titleSort'],
        'titleSortLock': json['titleSortLock'],
        'summary': json['summary'],
        'summaryLock': json['summaryLock'],
        'readingDirection': json['readingDirection'],
        'readingDirectionLock': json['readingDirectionLock'],
        'publisher': json['publisher'],
        'publisherLock': json['publisherLock'],
        'ageRating': !exists(json, 'ageRating') ? undefined : json['ageRating'],
        'ageRatingLock': json['ageRatingLock'],
        'language': json['language'],
        'languageLock': json['languageLock'],
        'genres': json['genres'],
        'genresLock': json['genresLock'],
        'tags': json['tags'],
        'tagsLock': json['tagsLock'],
        'totalBookCount': !exists(json, 'totalBookCount') ? undefined : json['totalBookCount'],
        'totalBookCountLock': json['totalBookCountLock'],
        'sharingLabels': json['sharingLabels'],
        'sharingLabelsLock': json['sharingLabelsLock'],
        'links': ((json['links'] as Array<any>).map(WebLinkDtoFromJSON)),
        'linksLock': json['linksLock'],
        'alternateTitles': ((json['alternateTitles'] as Array<any>).map(AlternateTitleDtoFromJSON)),
        'alternateTitlesLock': json['alternateTitlesLock'],
        'created': (new Date(json['created'])),
        'lastModified': (new Date(json['lastModified'])),
    };
}

export function SeriesMetadataDtoToJSON(value?: SeriesMetadataDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'statusLock': value.statusLock,
        'title': value.title,
        'titleLock': value.titleLock,
        'titleSort': value.titleSort,
        'titleSortLock': value.titleSortLock,
        'summary': value.summary,
        'summaryLock': value.summaryLock,
        'readingDirection': value.readingDirection,
        'readingDirectionLock': value.readingDirectionLock,
        'publisher': value.publisher,
        'publisherLock': value.publisherLock,
        'ageRating': value.ageRating,
        'ageRatingLock': value.ageRatingLock,
        'language': value.language,
        'languageLock': value.languageLock,
        'genres': Array.from(value.genres as Set<any>),
        'genresLock': value.genresLock,
        'tags': Array.from(value.tags as Set<any>),
        'tagsLock': value.tagsLock,
        'totalBookCount': value.totalBookCount,
        'totalBookCountLock': value.totalBookCountLock,
        'sharingLabels': Array.from(value.sharingLabels as Set<any>),
        'sharingLabelsLock': value.sharingLabelsLock,
        'links': ((value.links as Array<any>).map(WebLinkDtoToJSON)),
        'linksLock': value.linksLock,
        'alternateTitles': ((value.alternateTitles as Array<any>).map(AlternateTitleDtoToJSON)),
        'alternateTitlesLock': value.alternateTitlesLock,
        'created': (value.created.toISOString()),
        'lastModified': (value.lastModified.toISOString()),
    };
}

