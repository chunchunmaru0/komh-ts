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
import type { SettingMultiSourceInteger } from './SettingMultiSourceInteger';
import {
    SettingMultiSourceIntegerFromJSON,
    SettingMultiSourceIntegerFromJSONTyped,
    SettingMultiSourceIntegerToJSON,
} from './SettingMultiSourceInteger';
import type { SettingMultiSourceString } from './SettingMultiSourceString';
import {
    SettingMultiSourceStringFromJSON,
    SettingMultiSourceStringFromJSONTyped,
    SettingMultiSourceStringToJSON,
} from './SettingMultiSourceString';

/**
 * 
 * @export
 * @interface SettingsDto
 */
export interface SettingsDto {
    /**
     * 
     * @type {boolean}
     * @memberof SettingsDto
     */
    deleteEmptyCollections: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SettingsDto
     */
    deleteEmptyReadLists: boolean;
    /**
     * 
     * @type {number}
     * @memberof SettingsDto
     */
    rememberMeDurationDays: number;
    /**
     * 
     * @type {string}
     * @memberof SettingsDto
     */
    thumbnailSize: SettingsDtoThumbnailSizeEnum;
    /**
     * 
     * @type {number}
     * @memberof SettingsDto
     */
    taskPoolSize: number;
    /**
     * 
     * @type {SettingMultiSourceInteger}
     * @memberof SettingsDto
     */
    serverPort: SettingMultiSourceInteger;
    /**
     * 
     * @type {SettingMultiSourceString}
     * @memberof SettingsDto
     */
    serverContextPath: SettingMultiSourceString;
}


/**
 * @export
 */
export const SettingsDtoThumbnailSizeEnum = {
    Default: 'DEFAULT',
    Medium: 'MEDIUM',
    Large: 'LARGE',
    Xlarge: 'XLARGE'
} as const;
export type SettingsDtoThumbnailSizeEnum = typeof SettingsDtoThumbnailSizeEnum[keyof typeof SettingsDtoThumbnailSizeEnum];


/**
 * Check if a given object implements the SettingsDto interface.
 */
export function instanceOfSettingsDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deleteEmptyCollections" in value;
    isInstance = isInstance && "deleteEmptyReadLists" in value;
    isInstance = isInstance && "rememberMeDurationDays" in value;
    isInstance = isInstance && "thumbnailSize" in value;
    isInstance = isInstance && "taskPoolSize" in value;
    isInstance = isInstance && "serverPort" in value;
    isInstance = isInstance && "serverContextPath" in value;

    return isInstance;
}

export function SettingsDtoFromJSON(json: any): SettingsDto {
    return SettingsDtoFromJSONTyped(json, false);
}

export function SettingsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleteEmptyCollections': json['deleteEmptyCollections'],
        'deleteEmptyReadLists': json['deleteEmptyReadLists'],
        'rememberMeDurationDays': json['rememberMeDurationDays'],
        'thumbnailSize': json['thumbnailSize'],
        'taskPoolSize': json['taskPoolSize'],
        'serverPort': SettingMultiSourceIntegerFromJSON(json['serverPort']),
        'serverContextPath': SettingMultiSourceStringFromJSON(json['serverContextPath']),
    };
}

export function SettingsDtoToJSON(value?: SettingsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleteEmptyCollections': value.deleteEmptyCollections,
        'deleteEmptyReadLists': value.deleteEmptyReadLists,
        'rememberMeDurationDays': value.rememberMeDurationDays,
        'thumbnailSize': value.thumbnailSize,
        'taskPoolSize': value.taskPoolSize,
        'serverPort': SettingMultiSourceIntegerToJSON(value.serverPort),
        'serverContextPath': SettingMultiSourceStringToJSON(value.serverContextPath),
    };
}

