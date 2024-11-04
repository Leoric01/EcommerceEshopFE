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
import type { ResultListProduct } from '../models';
// @ts-ignore
import type { ResultPageProduct } from '../models';
// @ts-ignore
import type { ResultProduct } from '../models';
/**
 * ProductControllerApi - axios parameter creator
 * @export
 */
export const ProductControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [category] 
         * @param {string} [brand] 
         * @param {string} [colors] 
         * @param {string} [sizes] 
         * @param {number} [minPrice] 
         * @param {number} [maxPrice] 
         * @param {number} [minDiscount] 
         * @param {string} [sort] 
         * @param {string} [stock] 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProducts: async (category?: string, brand?: string, colors?: string, sizes?: string, minPrice?: number, maxPrice?: number, minDiscount?: number, sort?: string, stock?: string, pageNumber?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (brand !== undefined) {
                localVarQueryParameter['brand'] = brand;
            }

            if (colors !== undefined) {
                localVarQueryParameter['colors'] = colors;
            }

            if (sizes !== undefined) {
                localVarQueryParameter['sizes'] = sizes;
            }

            if (minPrice !== undefined) {
                localVarQueryParameter['minPrice'] = minPrice;
            }

            if (maxPrice !== undefined) {
                localVarQueryParameter['maxPrice'] = maxPrice;
            }

            if (minDiscount !== undefined) {
                localVarQueryParameter['minDiscount'] = minDiscount;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (stock !== undefined) {
                localVarQueryParameter['stock'] = stock;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['pageNumber'] = pageNumber;
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
         * @param {number} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct: async (productId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('getProduct', 'productId', productId)
            const localVarPath = `/products/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
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
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchProduct: async (query?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }


    
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
 * ProductControllerApi - functional programming interface
 * @export
 */
export const ProductControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [category] 
         * @param {string} [brand] 
         * @param {string} [colors] 
         * @param {string} [sizes] 
         * @param {number} [minPrice] 
         * @param {number} [maxPrice] 
         * @param {number} [minDiscount] 
         * @param {string} [sort] 
         * @param {string} [stock] 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllProducts(category?: string, brand?: string, colors?: string, sizes?: string, minPrice?: number, maxPrice?: number, minDiscount?: number, sort?: string, stock?: string, pageNumber?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultPageProduct>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProducts(category, brand, colors, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductControllerApi.getAllProducts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProduct(productId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultProduct>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProduct(productId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductControllerApi.getProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchProduct(query?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultListProduct>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchProduct(query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductControllerApi.searchProduct']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProductControllerApi - factory interface
 * @export
 */
export const ProductControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [category] 
         * @param {string} [brand] 
         * @param {string} [colors] 
         * @param {string} [sizes] 
         * @param {number} [minPrice] 
         * @param {number} [maxPrice] 
         * @param {number} [minDiscount] 
         * @param {string} [sort] 
         * @param {string} [stock] 
         * @param {number} [pageNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProducts(category?: string, brand?: string, colors?: string, sizes?: string, minPrice?: number, maxPrice?: number, minDiscount?: number, sort?: string, stock?: string, pageNumber?: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultPageProduct> {
            return localVarFp.getAllProducts(category, brand, colors, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct(productId: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultProduct> {
            return localVarFp.getProduct(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchProduct(query?: string, options?: RawAxiosRequestConfig): AxiosPromise<ResultListProduct> {
            return localVarFp.searchProduct(query, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductControllerApi - interface
 * @export
 * @interface ProductControllerApi
 */
export interface ProductControllerApiInterface {
    /**
     * 
     * @param {string} [category] 
     * @param {string} [brand] 
     * @param {string} [colors] 
     * @param {string} [sizes] 
     * @param {number} [minPrice] 
     * @param {number} [maxPrice] 
     * @param {number} [minDiscount] 
     * @param {string} [sort] 
     * @param {string} [stock] 
     * @param {number} [pageNumber] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApiInterface
     */
    getAllProducts(category?: string, brand?: string, colors?: string, sizes?: string, minPrice?: number, maxPrice?: number, minDiscount?: number, sort?: string, stock?: string, pageNumber?: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultPageProduct>;

    /**
     * 
     * @param {number} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApiInterface
     */
    getProduct(productId: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultProduct>;

    /**
     * 
     * @param {string} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApiInterface
     */
    searchProduct(query?: string, options?: RawAxiosRequestConfig): AxiosPromise<ResultListProduct>;

}

/**
 * ProductControllerApi - object-oriented interface
 * @export
 * @class ProductControllerApi
 * @extends {BaseAPI}
 */
export class ProductControllerApi extends BaseAPI implements ProductControllerApiInterface {
    /**
     * 
     * @param {string} [category] 
     * @param {string} [brand] 
     * @param {string} [colors] 
     * @param {string} [sizes] 
     * @param {number} [minPrice] 
     * @param {number} [maxPrice] 
     * @param {number} [minDiscount] 
     * @param {string} [sort] 
     * @param {string} [stock] 
     * @param {number} [pageNumber] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApi
     */
    public getAllProducts(category?: string, brand?: string, colors?: string, sizes?: string, minPrice?: number, maxPrice?: number, minDiscount?: number, sort?: string, stock?: string, pageNumber?: number, options?: RawAxiosRequestConfig) {
        return ProductControllerApiFp(this.configuration).getAllProducts(category, brand, colors, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApi
     */
    public getProduct(productId: number, options?: RawAxiosRequestConfig) {
        return ProductControllerApiFp(this.configuration).getProduct(productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApi
     */
    public searchProduct(query?: string, options?: RawAxiosRequestConfig) {
        return ProductControllerApiFp(this.configuration).searchProduct(query, options).then((request) => request(this.axios, this.basePath));
    }
}

