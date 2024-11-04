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
import type { AddAddressRequestDTO } from '../models';
// @ts-ignore
import type { AddressDtoResponse } from '../models';
// @ts-ignore
import type { ResultAddress } from '../models';
// @ts-ignore
import type { ResultVoid } from '../models';
/**
 * AddressControllerApi - axios parameter creator
 * @export
 */
export const AddressControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddAddressRequestDTO} addAddressRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSellerAddress: async (addAddressRequestDTO: AddAddressRequestDTO, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addAddressRequestDTO' is not null or undefined
            assertParamExists('addSellerAddress', 'addAddressRequestDTO', addAddressRequestDTO)
            const localVarPath = `/address/seller`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(addAddressRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {AddAddressRequestDTO} addAddressRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserAddress: async (addAddressRequestDTO: AddAddressRequestDTO, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addAddressRequestDTO' is not null or undefined
            assertParamExists('addUserAddress', 'addAddressRequestDTO', addAddressRequestDTO)
            const localVarPath = `/address/user`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(addAddressRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} addressId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddress: async (addressId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addressId' is not null or undefined
            assertParamExists('deleteAddress', 'addressId', addressId)
            const localVarPath = `/address/{addressId}`
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/address`;
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
    }
};

/**
 * AddressControllerApi - functional programming interface
 * @export
 */
export const AddressControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AddressControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {AddAddressRequestDTO} addAddressRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addSellerAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultAddress>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addSellerAddress(addAddressRequestDTO, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AddressControllerApi.addSellerAddress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {AddAddressRequestDTO} addAddressRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUserAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultAddress>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addUserAddress(addAddressRequestDTO, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AddressControllerApi.addUserAddress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} addressId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAddress(addressId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultVoid>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAddress(addressId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AddressControllerApi.deleteAddress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Set<AddressDtoResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AddressControllerApi.getAll']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AddressControllerApi - factory interface
 * @export
 */
export const AddressControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AddressControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {AddAddressRequestDTO} addAddressRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSellerAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig): AxiosPromise<ResultAddress> {
            return localVarFp.addSellerAddress(addAddressRequestDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AddAddressRequestDTO} addAddressRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig): AxiosPromise<ResultAddress> {
            return localVarFp.addUserAddress(addAddressRequestDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} addressId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddress(addressId: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultVoid> {
            return localVarFp.deleteAddress(addressId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(options?: RawAxiosRequestConfig): AxiosPromise<Set<AddressDtoResponse>> {
            return localVarFp.getAll(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AddressControllerApi - interface
 * @export
 * @interface AddressControllerApi
 */
export interface AddressControllerApiInterface {
    /**
     * 
     * @param {AddAddressRequestDTO} addAddressRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApiInterface
     */
    addSellerAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig): AxiosPromise<ResultAddress>;

    /**
     * 
     * @param {AddAddressRequestDTO} addAddressRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApiInterface
     */
    addUserAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig): AxiosPromise<ResultAddress>;

    /**
     * 
     * @param {number} addressId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApiInterface
     */
    deleteAddress(addressId: number, options?: RawAxiosRequestConfig): AxiosPromise<ResultVoid>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApiInterface
     */
    getAll(options?: RawAxiosRequestConfig): AxiosPromise<Set<AddressDtoResponse>>;

}

/**
 * AddressControllerApi - object-oriented interface
 * @export
 * @class AddressControllerApi
 * @extends {BaseAPI}
 */
export class AddressControllerApi extends BaseAPI implements AddressControllerApiInterface {
    /**
     * 
     * @param {AddAddressRequestDTO} addAddressRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApi
     */
    public addSellerAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig) {
        return AddressControllerApiFp(this.configuration).addSellerAddress(addAddressRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AddAddressRequestDTO} addAddressRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApi
     */
    public addUserAddress(addAddressRequestDTO: AddAddressRequestDTO, options?: RawAxiosRequestConfig) {
        return AddressControllerApiFp(this.configuration).addUserAddress(addAddressRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} addressId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApi
     */
    public deleteAddress(addressId: number, options?: RawAxiosRequestConfig) {
        return AddressControllerApiFp(this.configuration).deleteAddress(addressId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressControllerApi
     */
    public getAll(options?: RawAxiosRequestConfig) {
        return AddressControllerApiFp(this.configuration).getAll(options).then((request) => request(this.axios, this.basePath));
    }
}

