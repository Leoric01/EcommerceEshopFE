/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ResultSeller } from '../models';
/**
 * AdminControllerApi - axios parameter creator
 * @export
 */
export const AdminControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {UpdateStatusStatusEnum} status 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStatus: async (id: number, status: UpdateStatusStatusEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateStatus', 'id', id)
            // verify required parameter 'status' is not null or undefined
            assertParamExists('updateStatus', 'status', status)
            const localVarPath = `/admin/seller/{id}/status/{status}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"status"}}`, encodeURIComponent(String(status)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminControllerApi - functional programming interface
 * @export
 */
export const AdminControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {UpdateStatusStatusEnum} status 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStatus(id: number, status: UpdateStatusStatusEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultSeller>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStatus(id, status, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AdminControllerApi.updateStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AdminControllerApi - factory interface
 * @export
 */
export const AdminControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {UpdateStatusStatusEnum} status 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStatus(id: number, status: UpdateStatusStatusEnum, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller> {
            return localVarFp.updateStatus(id, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminControllerApi - interface
 * @export
 * @interface AdminControllerApi
 */
export interface AdminControllerApiInterface {
    /**
     * 
     * @param {number} id 
     * @param {UpdateStatusStatusEnum} status 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminControllerApiInterface
     */
    updateStatus(id: number, status: UpdateStatusStatusEnum, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller>;

}

/**
 * AdminControllerApi - object-oriented interface
 * @export
 * @class AdminControllerApi
 * @extends {BaseAPI}
 */
export class AdminControllerApi extends BaseAPI implements AdminControllerApiInterface {
    /**
     * 
     * @param {number} id 
     * @param {UpdateStatusStatusEnum} status 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminControllerApi
     */
    public updateStatus(id: number, status: UpdateStatusStatusEnum, options?: RawAxiosRequestConfig) {
        return AdminControllerApiFp(this.configuration).updateStatus(id, status, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const UpdateStatusStatusEnum = {
    PendingVerification: 'PENDING_VERIFICATION',
    Active: 'ACTIVE',
    Suspended: 'SUSPENDED',
    Deactivated: 'DEACTIVATED',
    Banned: 'BANNED',
    Closed: 'CLOSED'
} as const;
export type UpdateStatusStatusEnum = typeof UpdateStatusStatusEnum[keyof typeof UpdateStatusStatusEnum];
