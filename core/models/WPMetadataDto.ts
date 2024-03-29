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
import type { WPBelongsToDto } from './WPBelongsToDto';
import {
    WPBelongsToDtoFromJSON,
    WPBelongsToDtoFromJSONTyped,
    WPBelongsToDtoToJSON,
} from './WPBelongsToDto';

/**
 * 
 * @export
 * @interface WPMetadataDto
 */
export interface WPMetadataDto {
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    conformsTo?: string;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    sortAs?: string;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    subtitle?: string;
    /**
     * 
     * @type {Date}
     * @memberof WPMetadataDto
     */
    modified?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WPMetadataDto
     */
    published?: Date;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    language?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    author: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    translator: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    editor: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    artist: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    illustrator: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    letterer: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    penciler: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    colorist: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    inker: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    contributor: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    publisher: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WPMetadataDto
     */
    subject: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    readingProgression?: WPMetadataDtoReadingProgressionEnum;
    /**
     * 
     * @type {string}
     * @memberof WPMetadataDto
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof WPMetadataDto
     */
    numberOfPages?: number;
    /**
     * 
     * @type {WPBelongsToDto}
     * @memberof WPMetadataDto
     */
    belongsTo?: WPBelongsToDto;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof WPMetadataDto
     */
    rendition: { [key: string]: object; };
}


/**
 * @export
 */
export const WPMetadataDtoReadingProgressionEnum = {
    Rtl: 'rtl',
    Ltr: 'ltr',
    Ttb: 'ttb',
    Btt: 'btt',
    Auto: 'auto'
} as const;
export type WPMetadataDtoReadingProgressionEnum = typeof WPMetadataDtoReadingProgressionEnum[keyof typeof WPMetadataDtoReadingProgressionEnum];


/**
 * Check if a given object implements the WPMetadataDto interface.
 */
export function instanceOfWPMetadataDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "translator" in value;
    isInstance = isInstance && "editor" in value;
    isInstance = isInstance && "artist" in value;
    isInstance = isInstance && "illustrator" in value;
    isInstance = isInstance && "letterer" in value;
    isInstance = isInstance && "penciler" in value;
    isInstance = isInstance && "colorist" in value;
    isInstance = isInstance && "inker" in value;
    isInstance = isInstance && "contributor" in value;
    isInstance = isInstance && "publisher" in value;
    isInstance = isInstance && "subject" in value;
    isInstance = isInstance && "rendition" in value;

    return isInstance;
}

export function WPMetadataDtoFromJSON(json: any): WPMetadataDto {
    return WPMetadataDtoFromJSONTyped(json, false);
}

export function WPMetadataDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WPMetadataDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'conformsTo': !exists(json, 'conformsTo') ? undefined : json['conformsTo'],
        'sortAs': !exists(json, 'sortAs') ? undefined : json['sortAs'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
        'modified': !exists(json, 'modified') ? undefined : (new Date(json['modified'])),
        'published': !exists(json, 'published') ? undefined : (new Date(json['published'])),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'author': json['author'],
        'translator': json['translator'],
        'editor': json['editor'],
        'artist': json['artist'],
        'illustrator': json['illustrator'],
        'letterer': json['letterer'],
        'penciler': json['penciler'],
        'colorist': json['colorist'],
        'inker': json['inker'],
        'contributor': json['contributor'],
        'publisher': json['publisher'],
        'subject': json['subject'],
        'readingProgression': !exists(json, 'readingProgression') ? undefined : json['readingProgression'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'numberOfPages': !exists(json, 'numberOfPages') ? undefined : json['numberOfPages'],
        'belongsTo': !exists(json, 'belongsTo') ? undefined : WPBelongsToDtoFromJSON(json['belongsTo']),
        'rendition': json['rendition'],
    };
}

export function WPMetadataDtoToJSON(value?: WPMetadataDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'identifier': value.identifier,
        'type': value.type,
        'conformsTo': value.conformsTo,
        'sortAs': value.sortAs,
        'subtitle': value.subtitle,
        'modified': value.modified === undefined ? undefined : (value.modified.toISOString()),
        'published': value.published === undefined ? undefined : (value.published.toISOString().substring(0,10)),
        'language': value.language,
        'author': value.author,
        'translator': value.translator,
        'editor': value.editor,
        'artist': value.artist,
        'illustrator': value.illustrator,
        'letterer': value.letterer,
        'penciler': value.penciler,
        'colorist': value.colorist,
        'inker': value.inker,
        'contributor': value.contributor,
        'publisher': value.publisher,
        'subject': value.subject,
        'readingProgression': value.readingProgression,
        'description': value.description,
        'numberOfPages': value.numberOfPages,
        'belongsTo': WPBelongsToDtoToJSON(value.belongsTo),
        'rendition': value.rendition,
    };
}

