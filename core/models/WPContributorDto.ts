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
import type { WPLinkDto } from './WPLinkDto';
import {
    WPLinkDtoFromJSON,
    WPLinkDtoFromJSONTyped,
    WPLinkDtoToJSON,
} from './WPLinkDto';

/**
 * 
 * @export
 * @interface WPContributorDto
 */
export interface WPContributorDto {
    /**
     * 
     * @type {string}
     * @memberof WPContributorDto
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof WPContributorDto
     */
    position?: number;
    /**
     * 
     * @type {Array<WPLinkDto>}
     * @memberof WPContributorDto
     */
    links: Array<WPLinkDto>;
}

/**
 * Check if a given object implements the WPContributorDto interface.
 */
export function instanceOfWPContributorDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function WPContributorDtoFromJSON(json: any): WPContributorDto {
    return WPContributorDtoFromJSONTyped(json, false);
}

export function WPContributorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WPContributorDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'links': ((json['links'] as Array<any>).map(WPLinkDtoFromJSON)),
    };
}

export function WPContributorDtoToJSON(value?: WPContributorDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'position': value.position,
        'links': ((value.links as Array<any>).map(WPLinkDtoToJSON)),
    };
}
