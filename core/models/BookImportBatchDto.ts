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
import type { BookImportDto } from './BookImportDto';
import {
    BookImportDtoFromJSON,
    BookImportDtoFromJSONTyped,
    BookImportDtoToJSON,
} from './BookImportDto';

/**
 * 
 * @export
 * @interface BookImportBatchDto
 */
export interface BookImportBatchDto {
    /**
     * 
     * @type {Array<BookImportDto>}
     * @memberof BookImportBatchDto
     */
    books: Array<BookImportDto>;
    /**
     * 
     * @type {string}
     * @memberof BookImportBatchDto
     */
    copyMode: BookImportBatchDtoCopyModeEnum;
}


/**
 * @export
 */
export const BookImportBatchDtoCopyModeEnum = {
    Move: 'MOVE',
    Copy: 'COPY',
    Hardlink: 'HARDLINK'
} as const;
export type BookImportBatchDtoCopyModeEnum = typeof BookImportBatchDtoCopyModeEnum[keyof typeof BookImportBatchDtoCopyModeEnum];


/**
 * Check if a given object implements the BookImportBatchDto interface.
 */
export function instanceOfBookImportBatchDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "books" in value;
    isInstance = isInstance && "copyMode" in value;

    return isInstance;
}

export function BookImportBatchDtoFromJSON(json: any): BookImportBatchDto {
    return BookImportBatchDtoFromJSONTyped(json, false);
}

export function BookImportBatchDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookImportBatchDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'books': ((json['books'] as Array<any>).map(BookImportDtoFromJSON)),
        'copyMode': json['copyMode'],
    };
}

export function BookImportBatchDtoToJSON(value?: BookImportBatchDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'books': ((value.books as Array<any>).map(BookImportDtoToJSON)),
        'copyMode': value.copyMode,
    };
}

