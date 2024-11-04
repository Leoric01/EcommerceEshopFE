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
import type { ResultListSeller } from '../models';
// @ts-ignore
import type { ResultSeller } from '../models';
// @ts-ignore
import type { ResultSellerReport } from '../models';
// @ts-ignore
import type { ResultString } from '../models';
// @ts-ignore
import type { Seller } from '../models';
/**
 * SellerControllerApi - axios parameter creator
 * @export
 */
export const SellerControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSeller: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSeller', 'id', id)
            const localVarPath = `/seller/{id}`
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
        /**
         * 
         * @param {GetAllSellersStatusEnum} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSellers: async (status?: GetAllSellersStatusEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/seller/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

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
        getSellerById: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSellerById', 'id', id)
            const localVarPath = `/seller/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSellerByReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/seller/report`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
        /**
         * 
         * @param {Seller} seller 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSeller1: async (seller: Seller, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seller' is not null or undefined
            assertParamExists('updateSeller1', 'seller', seller)
            const localVarPath = `/seller`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(seller, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {Seller} seller 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSellerById: async (id: number, seller: Seller, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateSellerById', 'id', id)
            // verify required parameter 'seller' is not null or undefined
            assertParamExists('updateSellerById', 'seller', seller)
            const localVarPath = `/seller/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(seller, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SellerControllerApi - functional programming interface
 * @export
 */
export const SellerControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SellerControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSeller(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultString>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSeller(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SellerControllerApi.deleteSeller']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {GetAllSellersStatusEnum} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllSellers(status?: GetAllSellersStatusEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultListSeller>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllSellers(status, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SellerControllerApi.getAllSellers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSellerById(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultSeller>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSellerById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SellerControllerApi.getSellerById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSellerByReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultSellerReport>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSellerByReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SellerControllerApi.getSellerByReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {Seller} seller 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSeller1(seller: Seller, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultSeller>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSeller1(seller, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SellerControllerApi.updateSeller1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {Seller} seller 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSellerById(id: number, seller: Seller, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultSeller>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSellerById(id, seller, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SellerControllerApi.updateSellerById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SellerControllerApi - factory interface
 * @export
 */
export const SellerControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SellerControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSeller(id: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultString> {
            return localVarFp.deleteSeller(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {GetAllSellersStatusEnum} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSellers(status?: GetAllSellersStatusEnum, options?: RawAxiosRequestConfig): AxiosPromise<ResultListSeller> {
            return localVarFp.getAllSellers(status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSellerById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller> {
            return localVarFp.getSellerById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSellerByReport(options?: RawAxiosRequestConfig): AxiosPromise<ResultSellerReport> {
            return localVarFp.getSellerByReport(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Seller} seller 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSeller1(seller: Seller, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller> {
            return localVarFp.updateSeller1(seller, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {Seller} seller 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSellerById(id: number, seller: Seller, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller> {
            return localVarFp.updateSellerById(id, seller, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SellerControllerApi - interface
 * @export
 * @interface SellerControllerApi
 */
export interface SellerControllerApiInterface {
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApiInterface
     */
    deleteSeller(id: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultString>;

    /**
     * 
     * @param {GetAllSellersStatusEnum} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApiInterface
     */
    getAllSellers(status?: GetAllSellersStatusEnum, options?: RawAxiosRequestConfig): AxiosPromise<ResultListSeller>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApiInterface
     */
    getSellerById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApiInterface
     */
    getSellerByReport(options?: RawAxiosRequestConfig): AxiosPromise<ResultSellerReport>;

    /**
     * 
     * @param {Seller} seller 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApiInterface
     */
    updateSeller1(seller: Seller, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller>;

    /**
     * 
     * @param {number} id 
     * @param {Seller} seller 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApiInterface
     */
    updateSellerById(id: number, seller: Seller, options?: RawAxiosRequestConfig): AxiosPromise<ResultSeller>;

}

/**
 * SellerControllerApi - object-oriented interface
 * @export
 * @class SellerControllerApi
 * @extends {BaseAPI}
 */
export class SellerControllerApi extends BaseAPI implements SellerControllerApiInterface {
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApi
     */
    public deleteSeller(id: number, options?: RawAxiosRequestConfig) {
        return SellerControllerApiFp(this.configuration).deleteSeller(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {GetAllSellersStatusEnum} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApi
     */
    public getAllSellers(status?: GetAllSellersStatusEnum, options?: RawAxiosRequestConfig) {
        return SellerControllerApiFp(this.configuration).getAllSellers(status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApi
     */
    public getSellerById(id: number, options?: RawAxiosRequestConfig) {
        return SellerControllerApiFp(this.configuration).getSellerById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApi
     */
    public getSellerByReport(options?: RawAxiosRequestConfig) {
        return SellerControllerApiFp(this.configuration).getSellerByReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {Seller} seller 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApi
     */
    public updateSeller1(seller: Seller, options?: RawAxiosRequestConfig) {
        return SellerControllerApiFp(this.configuration).updateSeller1(seller, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {Seller} seller 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellerControllerApi
     */
    public updateSellerById(id: number, seller: Seller, options?: RawAxiosRequestConfig) {
        return SellerControllerApiFp(this.configuration).updateSellerById(id, seller, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetAllSellersStatusEnum = {
    PendingVerification: 'PENDING_VERIFICATION',
    Active: 'ACTIVE',
    Suspended: 'SUSPENDED',
    Deactivated: 'DEACTIVATED',
    Banned: 'BANNED',
    Closed: 'CLOSED'
} as const;
export type GetAllSellersStatusEnum = typeof GetAllSellersStatusEnum[keyof typeof GetAllSellersStatusEnum];
