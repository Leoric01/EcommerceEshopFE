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
import type { Deal } from '../models';
// @ts-ignore
import type { ResultDeal } from '../models';
// @ts-ignore
import type { ResultVoid } from '../models';
/**
 * DealControllerApi - axios parameter creator
 * @export
 */
export const DealControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Deal} deal 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeal: async (deal: Deal, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deal' is not null or undefined
            assertParamExists('createDeal', 'deal', deal)
            const localVarPath = `/admin/deals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deal, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {Deal} deal 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeal1: async (id: number, deal: Deal, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createDeal1', 'id', id)
            // verify required parameter 'deal' is not null or undefined
            assertParamExists('createDeal1', 'deal', deal)
            const localVarPath = `/admin/deals/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deal, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDeal: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteDeal', 'id', id)
            const localVarPath = `/admin/deals/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
 * DealControllerApi - functional programming interface
 * @export
 */
export const DealControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DealControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Deal} deal 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDeal(deal: Deal, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultDeal>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDeal(deal, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DealControllerApi.createDeal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {Deal} deal 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDeal1(id: number, deal: Deal, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultDeal>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDeal1(id, deal, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DealControllerApi.createDeal1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDeal(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultVoid>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDeal(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DealControllerApi.deleteDeal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DealControllerApi - factory interface
 * @export
 */
export const DealControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DealControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {Deal} deal 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeal(deal: Deal, options?: RawAxiosRequestConfig): AxiosPromise<ResultDeal> {
            return localVarFp.createDeal(deal, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {Deal} deal 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeal1(id: number, deal: Deal, options?: RawAxiosRequestConfig): AxiosPromise<ResultDeal> {
            return localVarFp.createDeal1(id, deal, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDeal(id: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultVoid> {
            return localVarFp.deleteDeal(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DealControllerApi - object-oriented interface
 * @export
 * @class DealControllerApi
 * @extends {BaseAPI}
 */
export class DealControllerApi extends BaseAPI {
    /**
     * 
     * @param {Deal} deal 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DealControllerApi
     */
    public createDeal(deal: Deal, options?: RawAxiosRequestConfig) {
        return DealControllerApiFp(this.configuration).createDeal(deal, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {Deal} deal 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DealControllerApi
     */
    public createDeal1(id: number, deal: Deal, options?: RawAxiosRequestConfig) {
        return DealControllerApiFp(this.configuration).createDeal1(id, deal, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DealControllerApi
     */
    public deleteDeal(id: number, options?: RawAxiosRequestConfig) {
        return DealControllerApiFp(this.configuration).deleteDeal(id, options).then((request) => request(this.axios, this.basePath));
    }
}
