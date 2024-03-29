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
import type { R2Device } from './R2Device';
import {
    R2DeviceFromJSON,
    R2DeviceFromJSONTyped,
    R2DeviceToJSON,
} from './R2Device';
import type { R2Locator } from './R2Locator';
import {
    R2LocatorFromJSON,
    R2LocatorFromJSONTyped,
    R2LocatorToJSON,
} from './R2Locator';

/**
 * 
 * @export
 * @interface R2Progression
 */
export interface R2Progression {
    /**
     * 
     * @type {Date}
     * @memberof R2Progression
     */
    modified: Date;
    /**
     * 
     * @type {R2Device}
     * @memberof R2Progression
     */
    device: R2Device;
    /**
     * 
     * @type {R2Locator}
     * @memberof R2Progression
     */
    locator: R2Locator;
}

/**
 * Check if a given object implements the R2Progression interface.
 */
export function instanceOfR2Progression(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "modified" in value;
    isInstance = isInstance && "device" in value;
    isInstance = isInstance && "locator" in value;

    return isInstance;
}

export function R2ProgressionFromJSON(json: any): R2Progression {
    return R2ProgressionFromJSONTyped(json, false);
}

export function R2ProgressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): R2Progression {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'modified': (new Date(json['modified'])),
        'device': R2DeviceFromJSON(json['device']),
        'locator': R2LocatorFromJSON(json['locator']),
    };
}

export function R2ProgressionToJSON(value?: R2Progression | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'modified': (value.modified.toISOString()),
        'device': R2DeviceToJSON(value.device),
        'locator': R2LocatorToJSON(value.locator),
    };
}

