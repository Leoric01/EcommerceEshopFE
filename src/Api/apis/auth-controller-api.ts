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
import type { ResultAuthenticationResponse } from '../models';
// @ts-ignore
import type { ResultListAccountDetailDto } from '../models';
// @ts-ignore
import type { ResultString } from '../models';
// @ts-ignore
import type { ResultVoid } from '../models';
// @ts-ignore
import type { SetupPwFromOtpReq } from '../models';
// @ts-ignore
import type { SignInRequest } from '../models';
// @ts-ignore
import type { SignupRequest } from '../models';
/**
 * AuthControllerApi - axios parameter creator
 * @export
 */
export const AuthControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allUsers: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth`;
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
         * @param {SignupRequest} signupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserHandler: async (signupRequest: SignupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signupRequest' is not null or undefined
            assertParamExists('createUserHandler', 'signupRequest', signupRequest)
            const localVarPath = `/auth/signup`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(signupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SignInRequest} signInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (signInRequest: SignInRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signInRequest' is not null or undefined
            assertParamExists('login', 'signInRequest', signInRequest)
            const localVarPath = `/auth/signin`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(signInRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SetupPwFromOtpReq} setupPwFromOtpReq 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUpPassword: async (setupPwFromOtpReq: SetupPwFromOtpReq, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'setupPwFromOtpReq' is not null or undefined
            assertParamExists('setUpPassword', 'setupPwFromOtpReq', setupPwFromOtpReq)
            const localVarPath = `/auth/set-pw`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setupPwFromOtpReq, localVarRequestOptions, configuration)

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
        signOut: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/signout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
 * AuthControllerApi - functional programming interface
 * @export
 */
export const AuthControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async allUsers(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultListAccountDetailDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.allUsers(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.allUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SignupRequest} signupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUserHandler(signupRequest: SignupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultString>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUserHandler(signupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.createUserHandler']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SignInRequest} signInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(signInRequest: SignInRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultAuthenticationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(signInRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.login']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SetupPwFromOtpReq} setupPwFromOtpReq 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setUpPassword(setupPwFromOtpReq: SetupPwFromOtpReq, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultAccountDetailDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setUpPassword(setupPwFromOtpReq, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.setUpPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signOut(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultVoid>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signOut(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.signOut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthControllerApi - factory interface
 * @export
 */
export const AuthControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allUsers(options?: RawAxiosRequestConfig): AxiosPromise<ResultListAccountDetailDto> {
            return localVarFp.allUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignupRequest} signupRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserHandler(signupRequest: SignupRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResultString> {
            return localVarFp.createUserHandler(signupRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignInRequest} signInRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(signInRequest: SignInRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResultAuthenticationResponse> {
            return localVarFp.login(signInRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SetupPwFromOtpReq} setupPwFromOtpReq 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUpPassword(setupPwFromOtpReq: SetupPwFromOtpReq, options?: RawAxiosRequestConfig): AxiosPromise<ResultAccountDetailDto> {
            return localVarFp.setUpPassword(setupPwFromOtpReq, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signOut(options?: RawAxiosRequestConfig): AxiosPromise<ResultVoid> {
            return localVarFp.signOut(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthControllerApi - interface
 * @export
 * @interface AuthControllerApi
 */
export interface AuthControllerApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApiInterface
     */
    allUsers(options?: RawAxiosRequestConfig): AxiosPromise<ResultListAccountDetailDto>;

    /**
     * 
     * @param {SignupRequest} signupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApiInterface
     */
    createUserHandler(signupRequest: SignupRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResultString>;

    /**
     * 
     * @param {SignInRequest} signInRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApiInterface
     */
    login(signInRequest: SignInRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResultAuthenticationResponse>;

    /**
     * 
     * @param {SetupPwFromOtpReq} setupPwFromOtpReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApiInterface
     */
    setUpPassword(setupPwFromOtpReq: SetupPwFromOtpReq, options?: RawAxiosRequestConfig): AxiosPromise<ResultAccountDetailDto>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApiInterface
     */
    signOut(options?: RawAxiosRequestConfig): AxiosPromise<ResultVoid>;

}

/**
 * AuthControllerApi - object-oriented interface
 * @export
 * @class AuthControllerApi
 * @extends {BaseAPI}
 */
export class AuthControllerApi extends BaseAPI implements AuthControllerApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public allUsers(options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).allUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SignupRequest} signupRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public createUserHandler(signupRequest: SignupRequest, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).createUserHandler(signupRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SignInRequest} signInRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public login(signInRequest: SignInRequest, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).login(signInRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SetupPwFromOtpReq} setupPwFromOtpReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public setUpPassword(setupPwFromOtpReq: SetupPwFromOtpReq, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).setUpPassword(setupPwFromOtpReq, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public signOut(options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).signOut(options).then((request) => request(this.axios, this.basePath));
    }
}

