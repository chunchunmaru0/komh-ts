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
/**
 * 
 * @export
 * @interface PageHashMatchDto
 */
export interface PageHashMatchDto {
    /**
     * 
     * @type {string}
     * @memberof PageHashMatchDto
     */
    bookId: string;
    /**
     * 
     * @type {string}
     * @memberof PageHashMatchDto
     */
    url: string;
    /**
     * 
     * @type {number}
     * @memberof PageHashMatchDto
     */
    pageNumber: number;
    /**
     * 
     * @type {string}
     * @memberof PageHashMatchDto
     */
    fileName: string;
    /**
     * 
     * @type {number}
     * @memberof PageHashMatchDto
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof PageHashMatchDto
     */
    mediaType: string;
}

/**
 * Check if a given object implements the PageHashMatchDto interface.
 */
export function instanceOfPageHashMatchDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bookId" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "pageNumber" in value;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "fileSize" in value;
    isInstance = isInstance && "mediaType" in value;

    return isInstance;
}

export function PageHashMatchDtoFromJSON(json: any): PageHashMatchDto {
    return PageHashMatchDtoFromJSONTyped(json, false);
}

export function PageHashMatchDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageHashMatchDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookId': json['bookId'],
        'url': json['url'],
        'pageNumber': json['pageNumber'],
        'fileName': json['fileName'],
        'fileSize': json['fileSize'],
        'mediaType': json['mediaType'],
    };
}

export function PageHashMatchDtoToJSON(value?: PageHashMatchDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookId': value.bookId,
        'url': value.url,
        'pageNumber': value.pageNumber,
        'fileName': value.fileName,
        'fileSize': value.fileSize,
        'mediaType': value.mediaType,
    };
}
