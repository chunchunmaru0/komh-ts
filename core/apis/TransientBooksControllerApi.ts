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


import * as runtime from '../runtime';
import type {
  ScanRequestDto,
  TransientBookDto,
  ValidationErrorResponse,
} from '../models/index';
import {
    ScanRequestDtoFromJSON,
    ScanRequestDtoToJSON,
    TransientBookDtoFromJSON,
    TransientBookDtoToJSON,
    ValidationErrorResponseFromJSON,
    ValidationErrorResponseToJSON,
} from '../models/index';

export interface AnalyzeRequest {
    id: string;
}

export interface GetSourcePageRequest {
    id: string;
    pageNumber: number;
}

export interface ScanForTransientBooksRequest {
    scanRequestDto: ScanRequestDto;
}

/**
 * 
 */
export class TransientBooksControllerApi extends runtime.BaseAPI {

    /**
     */
    async analyzeRaw(requestParameters: AnalyzeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransientBookDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling analyze.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/transient-books/{id}/analyze`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransientBookDtoFromJSON(jsonValue));
    }

    /**
     */
    async analyze(requestParameters: AnalyzeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransientBookDto> {
        const response = await this.analyzeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getSourcePageRaw(requestParameters: GetSourcePageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSourcePage.');
        }

        if (requestParameters.pageNumber === null || requestParameters.pageNumber === undefined) {
            throw new runtime.RequiredError('pageNumber','Required parameter requestParameters.pageNumber was null or undefined when calling getSourcePage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/transient-books/{id}/pages/{pageNumber}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"pageNumber"}}`, encodeURIComponent(String(requestParameters.pageNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async getSourcePage(requestParameters: GetSourcePageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getSourcePageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scanForTransientBooksRaw(requestParameters: ScanForTransientBooksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransientBookDto>>> {
        if (requestParameters.scanRequestDto === null || requestParameters.scanRequestDto === undefined) {
            throw new runtime.RequiredError('scanRequestDto','Required parameter requestParameters.scanRequestDto was null or undefined when calling scanForTransientBooks.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/transient-books`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScanRequestDtoToJSON(requestParameters.scanRequestDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransientBookDtoFromJSON));
    }

    /**
     */
    async scanForTransientBooks(requestParameters: ScanForTransientBooksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransientBookDto>> {
        const response = await this.scanForTransientBooksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
