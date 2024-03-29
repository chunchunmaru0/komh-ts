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
import type { WPContributorDto } from './WPContributorDto';
import {
    WPContributorDtoFromJSON,
    WPContributorDtoFromJSONTyped,
    WPContributorDtoToJSON,
} from './WPContributorDto';

/**
 * 
 * @export
 * @interface WPBelongsToDto
 */
export interface WPBelongsToDto {
    /**
     * 
     * @type {Array<WPContributorDto>}
     * @memberof WPBelongsToDto
     */
    series: Array<WPContributorDto>;
    /**
     * 
     * @type {Array<WPContributorDto>}
     * @memberof WPBelongsToDto
     */
    collection: Array<WPContributorDto>;
}

/**
 * Check if a given object implements the WPBelongsToDto interface.
 */
export function instanceOfWPBelongsToDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "series" in value;
    isInstance = isInstance && "collection" in value;

    return isInstance;
}

export function WPBelongsToDtoFromJSON(json: any): WPBelongsToDto {
    return WPBelongsToDtoFromJSONTyped(json, false);
}

export function WPBelongsToDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WPBelongsToDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'series': ((json['series'] as Array<any>).map(WPContributorDtoFromJSON)),
        'collection': ((json['collection'] as Array<any>).map(WPContributorDtoFromJSON)),
    };
}

export function WPBelongsToDtoToJSON(value?: WPBelongsToDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'series': ((value.series as Array<any>).map(WPContributorDtoToJSON)),
        'collection': ((value.collection as Array<any>).map(WPContributorDtoToJSON)),
    };
}

