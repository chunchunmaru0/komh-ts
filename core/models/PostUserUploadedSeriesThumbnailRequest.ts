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
 * @interface PostUserUploadedSeriesThumbnailRequest
 */
export interface PostUserUploadedSeriesThumbnailRequest {
    /**
     * 
     * @type {Blob}
     * @memberof PostUserUploadedSeriesThumbnailRequest
     */
    file: Blob;
}

/**
 * Check if a given object implements the PostUserUploadedSeriesThumbnailRequest interface.
 */
export function instanceOfPostUserUploadedSeriesThumbnailRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "file" in value;

    return isInstance;
}

export function PostUserUploadedSeriesThumbnailRequestFromJSON(json: any): PostUserUploadedSeriesThumbnailRequest {
    return PostUserUploadedSeriesThumbnailRequestFromJSONTyped(json, false);
}

export function PostUserUploadedSeriesThumbnailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUserUploadedSeriesThumbnailRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': json['file'],
    };
}

export function PostUserUploadedSeriesThumbnailRequestToJSON(value?: PostUserUploadedSeriesThumbnailRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': value.file,
    };
}

