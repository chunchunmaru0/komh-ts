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
 * @interface Text
 */
export interface Text {
    /**
     * 
     * @type {string}
     * @memberof Text
     */
    after?: string;
    /**
     * 
     * @type {string}
     * @memberof Text
     */
    before?: string;
    /**
     * 
     * @type {string}
     * @memberof Text
     */
    highlight?: string;
}

/**
 * Check if a given object implements the Text interface.
 */
export function instanceOfText(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TextFromJSON(json: any): Text {
    return TextFromJSONTyped(json, false);
}

export function TextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Text {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'after': !exists(json, 'after') ? undefined : json['after'],
        'before': !exists(json, 'before') ? undefined : json['before'],
        'highlight': !exists(json, 'highlight') ? undefined : json['highlight'],
    };
}

export function TextToJSON(value?: Text | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'after': value.after,
        'before': value.before,
        'highlight': value.highlight,
    };
}

