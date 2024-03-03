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
 * @interface BookImportDto
 */
export interface BookImportDto {
    /**
     * 
     * @type {string}
     * @memberof BookImportDto
     */
    sourceFile: string;
    /**
     * 
     * @type {string}
     * @memberof BookImportDto
     */
    seriesId: string;
    /**
     * 
     * @type {string}
     * @memberof BookImportDto
     */
    upgradeBookId?: string;
    /**
     * 
     * @type {string}
     * @memberof BookImportDto
     */
    destinationName?: string;
}

/**
 * Check if a given object implements the BookImportDto interface.
 */
export function instanceOfBookImportDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sourceFile" in value;
    isInstance = isInstance && "seriesId" in value;

    return isInstance;
}

export function BookImportDtoFromJSON(json: any): BookImportDto {
    return BookImportDtoFromJSONTyped(json, false);
}

export function BookImportDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookImportDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceFile': json['sourceFile'],
        'seriesId': json['seriesId'],
        'upgradeBookId': !exists(json, 'upgradeBookId') ? undefined : json['upgradeBookId'],
        'destinationName': !exists(json, 'destinationName') ? undefined : json['destinationName'],
    };
}

export function BookImportDtoToJSON(value?: BookImportDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sourceFile': value.sourceFile,
        'seriesId': value.seriesId,
        'upgradeBookId': value.upgradeBookId,
        'destinationName': value.destinationName,
    };
}

