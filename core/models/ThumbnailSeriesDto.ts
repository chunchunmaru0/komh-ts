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
 * @interface ThumbnailSeriesDto
 */
export interface ThumbnailSeriesDto {
    /**
     * 
     * @type {string}
     * @memberof ThumbnailSeriesDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ThumbnailSeriesDto
     */
    seriesId: string;
    /**
     * 
     * @type {string}
     * @memberof ThumbnailSeriesDto
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof ThumbnailSeriesDto
     */
    selected: boolean;
    /**
     * 
     * @type {string}
     * @memberof ThumbnailSeriesDto
     */
    mediaType: string;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailSeriesDto
     */
    fileSize: number;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailSeriesDto
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailSeriesDto
     */
    height: number;
}

/**
 * Check if a given object implements the ThumbnailSeriesDto interface.
 */
export function instanceOfThumbnailSeriesDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "seriesId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "selected" in value;
    isInstance = isInstance && "mediaType" in value;
    isInstance = isInstance && "fileSize" in value;
    isInstance = isInstance && "width" in value;
    isInstance = isInstance && "height" in value;

    return isInstance;
}

export function ThumbnailSeriesDtoFromJSON(json: any): ThumbnailSeriesDto {
    return ThumbnailSeriesDtoFromJSONTyped(json, false);
}

export function ThumbnailSeriesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThumbnailSeriesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'seriesId': json['seriesId'],
        'type': json['type'],
        'selected': json['selected'],
        'mediaType': json['mediaType'],
        'fileSize': json['fileSize'],
        'width': json['width'],
        'height': json['height'],
    };
}

export function ThumbnailSeriesDtoToJSON(value?: ThumbnailSeriesDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'seriesId': value.seriesId,
        'type': value.type,
        'selected': value.selected,
        'mediaType': value.mediaType,
        'fileSize': value.fileSize,
        'width': value.width,
        'height': value.height,
    };
}

