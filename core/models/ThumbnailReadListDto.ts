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
 * @interface ThumbnailReadListDto
 */
export interface ThumbnailReadListDto {
    /**
     * 
     * @type {string}
     * @memberof ThumbnailReadListDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ThumbnailReadListDto
     */
    readListId: string;
    /**
     * 
     * @type {string}
     * @memberof ThumbnailReadListDto
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof ThumbnailReadListDto
     */
    selected: boolean;
    /**
     * 
     * @type {string}
     * @memberof ThumbnailReadListDto
     */
    mediaType: string;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailReadListDto
     */
    fileSize: number;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailReadListDto
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailReadListDto
     */
    height: number;
}

/**
 * Check if a given object implements the ThumbnailReadListDto interface.
 */
export function instanceOfThumbnailReadListDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "readListId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "selected" in value;
    isInstance = isInstance && "mediaType" in value;
    isInstance = isInstance && "fileSize" in value;
    isInstance = isInstance && "width" in value;
    isInstance = isInstance && "height" in value;

    return isInstance;
}

export function ThumbnailReadListDtoFromJSON(json: any): ThumbnailReadListDto {
    return ThumbnailReadListDtoFromJSONTyped(json, false);
}

export function ThumbnailReadListDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThumbnailReadListDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'readListId': json['readListId'],
        'type': json['type'],
        'selected': json['selected'],
        'mediaType': json['mediaType'],
        'fileSize': json['fileSize'],
        'width': json['width'],
        'height': json['height'],
    };
}

export function ThumbnailReadListDtoToJSON(value?: ThumbnailReadListDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'readListId': value.readListId,
        'type': value.type,
        'selected': value.selected,
        'mediaType': value.mediaType,
        'fileSize': value.fileSize,
        'width': value.width,
        'height': value.height,
    };
}

