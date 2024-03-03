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
  CollectionCreationDto,
  CollectionDto,
  CollectionUpdateDto,
  PageCollectionDto,
  PageSeriesDto,
  ThumbnailSeriesCollectionDto,
  ValidationErrorResponse,
} from '../models/index';
import {
    CollectionCreationDtoFromJSON,
    CollectionCreationDtoToJSON,
    CollectionDtoFromJSON,
    CollectionDtoToJSON,
    CollectionUpdateDtoFromJSON,
    CollectionUpdateDtoToJSON,
    PageCollectionDtoFromJSON,
    PageCollectionDtoToJSON,
    PageSeriesDtoFromJSON,
    PageSeriesDtoToJSON,
    ThumbnailSeriesCollectionDtoFromJSON,
    ThumbnailSeriesCollectionDtoToJSON,
    ValidationErrorResponseFromJSON,
    ValidationErrorResponseToJSON,
} from '../models/index';

export interface AddOne3Request {
    collectionCreationDto: CollectionCreationDto;
}

export interface AddUserUploadedCollectionThumbnailRequest {
    id: string;
    file: Blob;
    selected?: boolean;
}

export interface DeleteOne2Request {
    id: string;
}

export interface DeleteUserUploadedCollectionThumbnailRequest {
    id: string;
    thumbnailId: string;
}

export interface GetAll4Request {
    search?: string;
    libraryId?: Array<string>;
    unpaged?: boolean;
    page?: number;
    size?: number;
}

export interface GetCollectionThumbnailRequest {
    id: string;
}

export interface GetCollectionThumbnailByIdRequest {
    id: string;
    thumbnailId: string;
}

export interface GetCollectionThumbnailsRequest {
    id: string;
}

export interface GetOne2Request {
    id: string;
}

export interface GetSeriesForCollectionRequest {
    id: string;
    libraryId?: Array<string>;
    status?: Array<GetSeriesForCollectionStatusEnum>;
    readStatus?: Array<GetSeriesForCollectionReadStatusEnum>;
    publisher?: Array<string>;
    language?: Array<string>;
    genre?: Array<string>;
    tag?: Array<string>;
    ageRating?: Array<string>;
    releaseYears?: Array<string>;
    deleted?: boolean;
    complete?: boolean;
    unpaged?: boolean;
    page?: number;
    size?: number;
    author?: Array<string>;
}

export interface MarkSelectedCollectionThumbnailRequest {
    id: string;
    thumbnailId: string;
}

export interface UpdateOne2Request {
    id: string;
    collectionUpdateDto: CollectionUpdateDto;
}

/**
 * 
 */
export class SeriesCollectionControllerApi extends runtime.BaseAPI {

    /**
     */
    async addOne3Raw(requestParameters: AddOne3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionDto>> {
        if (requestParameters.collectionCreationDto === null || requestParameters.collectionCreationDto === undefined) {
            throw new runtime.RequiredError('collectionCreationDto','Required parameter requestParameters.collectionCreationDto was null or undefined when calling addOne3.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/collections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionCreationDtoToJSON(requestParameters.collectionCreationDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionDtoFromJSON(jsonValue));
    }

    /**
     */
    async addOne3(requestParameters: AddOne3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionDto> {
        const response = await this.addOne3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async addUserUploadedCollectionThumbnailRaw(requestParameters: AddUserUploadedCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThumbnailSeriesCollectionDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addUserUploadedCollectionThumbnail.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling addUserUploadedCollectionThumbnail.');
        }

        const queryParameters: any = {};

        if (requestParameters.selected !== undefined) {
            queryParameters['selected'] = requestParameters.selected;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/api/v1/collections/{id}/thumbnails`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThumbnailSeriesCollectionDtoFromJSON(jsonValue));
    }

    /**
     */
    async addUserUploadedCollectionThumbnail(requestParameters: AddUserUploadedCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThumbnailSeriesCollectionDto> {
        const response = await this.addUserUploadedCollectionThumbnailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteOne2Raw(requestParameters: DeleteOne2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteOne2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteOne2(requestParameters: DeleteOne2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOne2Raw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteUserUploadedCollectionThumbnailRaw(requestParameters: DeleteUserUploadedCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUserUploadedCollectionThumbnail.');
        }

        if (requestParameters.thumbnailId === null || requestParameters.thumbnailId === undefined) {
            throw new runtime.RequiredError('thumbnailId','Required parameter requestParameters.thumbnailId was null or undefined when calling deleteUserUploadedCollectionThumbnail.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}/thumbnails/{thumbnailId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"thumbnailId"}}`, encodeURIComponent(String(requestParameters.thumbnailId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteUserUploadedCollectionThumbnail(requestParameters: DeleteUserUploadedCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserUploadedCollectionThumbnailRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAll4Raw(requestParameters: GetAll4Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageCollectionDto>> {
        const queryParameters: any = {};

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.libraryId) {
            queryParameters['library_id'] = requestParameters.libraryId;
        }

        if (requestParameters.unpaged !== undefined) {
            queryParameters['unpaged'] = requestParameters.unpaged;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageCollectionDtoFromJSON(jsonValue));
    }

    /**
     */
    async getAll4(requestParameters: GetAll4Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageCollectionDto> {
        const response = await this.getAll4Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCollectionThumbnailRaw(requestParameters: GetCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCollectionThumbnail.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}/thumbnail`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<Blob>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async getCollectionThumbnail(requestParameters: GetCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getCollectionThumbnailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCollectionThumbnailByIdRaw(requestParameters: GetCollectionThumbnailByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCollectionThumbnailById.');
        }

        if (requestParameters.thumbnailId === null || requestParameters.thumbnailId === undefined) {
            throw new runtime.RequiredError('thumbnailId','Required parameter requestParameters.thumbnailId was null or undefined when calling getCollectionThumbnailById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}/thumbnails/{thumbnailId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"thumbnailId"}}`, encodeURIComponent(String(requestParameters.thumbnailId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<Blob>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async getCollectionThumbnailById(requestParameters: GetCollectionThumbnailByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getCollectionThumbnailByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCollectionThumbnailsRaw(requestParameters: GetCollectionThumbnailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ThumbnailSeriesCollectionDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCollectionThumbnails.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}/thumbnails`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ThumbnailSeriesCollectionDtoFromJSON));
    }

    /**
     */
    async getCollectionThumbnails(requestParameters: GetCollectionThumbnailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ThumbnailSeriesCollectionDto>> {
        const response = await this.getCollectionThumbnailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getOne2Raw(requestParameters: GetOne2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getOne2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionDtoFromJSON(jsonValue));
    }

    /**
     */
    async getOne2(requestParameters: GetOne2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionDto> {
        const response = await this.getOne2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getSeriesForCollectionRaw(requestParameters: GetSeriesForCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageSeriesDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSeriesForCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.libraryId) {
            queryParameters['library_id'] = requestParameters.libraryId;
        }

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.readStatus) {
            queryParameters['read_status'] = requestParameters.readStatus;
        }

        if (requestParameters.publisher) {
            queryParameters['publisher'] = requestParameters.publisher;
        }

        if (requestParameters.language) {
            queryParameters['language'] = requestParameters.language;
        }

        if (requestParameters.genre) {
            queryParameters['genre'] = requestParameters.genre;
        }

        if (requestParameters.tag) {
            queryParameters['tag'] = requestParameters.tag;
        }

        if (requestParameters.ageRating) {
            queryParameters['age_rating'] = requestParameters.ageRating;
        }

        if (requestParameters.releaseYears) {
            queryParameters['release_years'] = requestParameters.releaseYears;
        }

        if (requestParameters.deleted !== undefined) {
            queryParameters['deleted'] = requestParameters.deleted;
        }

        if (requestParameters.complete !== undefined) {
            queryParameters['complete'] = requestParameters.complete;
        }

        if (requestParameters.unpaged !== undefined) {
            queryParameters['unpaged'] = requestParameters.unpaged;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.author) {
            queryParameters['author'] = requestParameters.author;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}/series`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageSeriesDtoFromJSON(jsonValue));
    }

    /**
     */
    async getSeriesForCollection(requestParameters: GetSeriesForCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageSeriesDto> {
        const response = await this.getSeriesForCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async markSelectedCollectionThumbnailRaw(requestParameters: MarkSelectedCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling markSelectedCollectionThumbnail.');
        }

        if (requestParameters.thumbnailId === null || requestParameters.thumbnailId === undefined) {
            throw new runtime.RequiredError('thumbnailId','Required parameter requestParameters.thumbnailId was null or undefined when calling markSelectedCollectionThumbnail.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/collections/{id}/thumbnails/{thumbnailId}/selected`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"thumbnailId"}}`, encodeURIComponent(String(requestParameters.thumbnailId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async markSelectedCollectionThumbnail(requestParameters: MarkSelectedCollectionThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.markSelectedCollectionThumbnailRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updateOne2Raw(requestParameters: UpdateOne2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateOne2.');
        }

        if (requestParameters.collectionUpdateDto === null || requestParameters.collectionUpdateDto === undefined) {
            throw new runtime.RequiredError('collectionUpdateDto','Required parameter requestParameters.collectionUpdateDto was null or undefined when calling updateOne2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/collections/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionUpdateDtoToJSON(requestParameters.collectionUpdateDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateOne2(requestParameters: UpdateOne2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateOne2Raw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetSeriesForCollectionStatusEnum = {
    Ended: 'ENDED',
    Ongoing: 'ONGOING',
    Abandoned: 'ABANDONED',
    Hiatus: 'HIATUS'
} as const;
export type GetSeriesForCollectionStatusEnum = typeof GetSeriesForCollectionStatusEnum[keyof typeof GetSeriesForCollectionStatusEnum];
/**
 * @export
 */
export const GetSeriesForCollectionReadStatusEnum = {
    Unread: 'UNREAD',
    Read: 'READ',
    InProgress: 'IN_PROGRESS'
} as const;
export type GetSeriesForCollectionReadStatusEnum = typeof GetSeriesForCollectionReadStatusEnum[keyof typeof GetSeriesForCollectionReadStatusEnum];
