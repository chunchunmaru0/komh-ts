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
import type { ReadListRequestBookDto } from './ReadListRequestBookDto';
import {
    ReadListRequestBookDtoFromJSON,
    ReadListRequestBookDtoFromJSONTyped,
    ReadListRequestBookDtoToJSON,
} from './ReadListRequestBookDto';
import type { ReadListRequestBookMatchDto } from './ReadListRequestBookMatchDto';
import {
    ReadListRequestBookMatchDtoFromJSON,
    ReadListRequestBookMatchDtoFromJSONTyped,
    ReadListRequestBookMatchDtoToJSON,
} from './ReadListRequestBookMatchDto';

/**
 * 
 * @export
 * @interface ReadListRequestBookMatchesDto
 */
export interface ReadListRequestBookMatchesDto {
    /**
     * 
     * @type {ReadListRequestBookDto}
     * @memberof ReadListRequestBookMatchesDto
     */
    request: ReadListRequestBookDto;
    /**
     * 
     * @type {Array<ReadListRequestBookMatchDto>}
     * @memberof ReadListRequestBookMatchesDto
     */
    matches: Array<ReadListRequestBookMatchDto>;
}

/**
 * Check if a given object implements the ReadListRequestBookMatchesDto interface.
 */
export function instanceOfReadListRequestBookMatchesDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "request" in value;
    isInstance = isInstance && "matches" in value;

    return isInstance;
}

export function ReadListRequestBookMatchesDtoFromJSON(json: any): ReadListRequestBookMatchesDto {
    return ReadListRequestBookMatchesDtoFromJSONTyped(json, false);
}

export function ReadListRequestBookMatchesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadListRequestBookMatchesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'request': ReadListRequestBookDtoFromJSON(json['request']),
        'matches': ((json['matches'] as Array<any>).map(ReadListRequestBookMatchDtoFromJSON)),
    };
}

export function ReadListRequestBookMatchesDtoToJSON(value?: ReadListRequestBookMatchesDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'request': ReadListRequestBookDtoToJSON(value.request),
        'matches': ((value.matches as Array<any>).map(ReadListRequestBookMatchDtoToJSON)),
    };
}

