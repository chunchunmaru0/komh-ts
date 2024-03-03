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
  OAuth2ClientDto,
  ValidationErrorResponse,
} from '../models/index';
import {
    OAuth2ClientDtoFromJSON,
    OAuth2ClientDtoToJSON,
    ValidationErrorResponseFromJSON,
    ValidationErrorResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class OAuth2ControllerApi extends runtime.BaseAPI {

    /**
     */
    async getProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProvidersRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getProviders1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProviders1Raw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getProviders2Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders2(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProviders2Raw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getProviders3Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders3(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProviders3Raw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getProviders4Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders4(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProviders4Raw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getProviders5Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders5(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProviders5Raw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getProviders6Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OAuth2ClientDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/oauth2/providers`,
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OAuth2ClientDtoFromJSON));
    }

    /**
     */
    async getProviders6(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OAuth2ClientDto>> {
        const response = await this.getProviders6Raw(initOverrides);
        return await response.value();
    }

}