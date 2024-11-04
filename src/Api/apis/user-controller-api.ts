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
import type { ResultAccountDetailDto } from '../models';
// @ts-ignore
import type { ResultUser } from '../models';
// @ts-ignore
import type { UserUpdateReqDto } from '../models';
/**
 * UserControllerApi - axios parameter creator
 * @export
 */
export const UserControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProfile: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users/profile`;
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
         * @param {UserUpdateReqDto} userUpdateReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSeller: async (userUpdateReqDto: UserUpdateReqDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdateReqDto' is not null or undefined
            assertParamExists('updateSeller', 'userUpdateReqDto', userUpdateReqDto)
            const localVarPath = `/users/profile`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdateReqDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserControllerApi - functional programming interface
 * @export
 */
export const UserControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserProfile(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultAccountDetailDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserProfile(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserControllerApi.getUserProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {UserUpdateReqDto} userUpdateReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSeller(userUpdateReqDto: UserUpdateReqDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSeller(userUpdateReqDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserControllerApi.updateSeller']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserControllerApi - factory interface
 * @export
 */
export const UserControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProfile(options?: RawAxiosRequestConfig): AxiosPromise<ResultAccountDetailDto> {
            return localVarFp.getUserProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UserUpdateReqDto} userUpdateReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSeller(userUpdateReqDto: UserUpdateReqDto, options?: RawAxiosRequestConfig): AxiosPromise<ResultUser> {
            return localVarFp.updateSeller(userUpdateReqDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserControllerApi - interface
 * @export
 * @interface UserControllerApi
 */
export interface UserControllerApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApiInterface
     */
    getUserProfile(options?: RawAxiosRequestConfig): AxiosPromise<ResultAccountDetailDto>;

    /**
     * 
     * @param {UserUpdateReqDto} userUpdateReqDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApiInterface
     */
    updateSeller(userUpdateReqDto: UserUpdateReqDto, options?: RawAxiosRequestConfig): AxiosPromise<ResultUser>;

}

/**
 * UserControllerApi - object-oriented interface
 * @export
 * @class UserControllerApi
 * @extends {BaseAPI}
 */
export class UserControllerApi extends BaseAPI implements UserControllerApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public getUserProfile(options?: RawAxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).getUserProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UserUpdateReqDto} userUpdateReqDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public updateSeller(userUpdateReqDto: UserUpdateReqDto, options?: RawAxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).updateSeller(userUpdateReqDto, options).then((request) => request(this.axios, this.basePath));
    }
}

