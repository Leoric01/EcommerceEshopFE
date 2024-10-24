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


import * as runtime from '../runtime';
import type {
  HomeCategory,
  ResultHome,
  ResultHomeCategory,
  ResultListHomeCategory,
} from '../models/index';
import {
    HomeCategoryFromJSON,
    HomeCategoryToJSON,
    ResultHomeFromJSON,
    ResultHomeToJSON,
    ResultHomeCategoryFromJSON,
    ResultHomeCategoryToJSON,
    ResultListHomeCategoryFromJSON,
    ResultListHomeCategoryToJSON,
} from '../models/index';

export interface CreateHomeCategoriesRequest {
    homeCategory: Array<HomeCategory>;
}

export interface UpdateHomeCategoryRequest {
    id: number;
    homeCategory: HomeCategory;
}

/**
 * 
 */
export class HomeCategoryControllerApi extends runtime.BaseAPI {

    /**
     */
    async createHomeCategoriesRaw(requestParameters: CreateHomeCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultHome>> {
        if (requestParameters['homeCategory'] == null) {
            throw new runtime.RequiredError(
                'homeCategory',
                'Required parameter "homeCategory" was null or undefined when calling createHomeCategories().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/admin/home/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['homeCategory']!.map(HomeCategoryToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultHomeFromJSON(jsonValue));
    }

    /**
     */
    async createHomeCategories(requestParameters: CreateHomeCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultHome> {
        const response = await this.createHomeCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getHomeCategoryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultListHomeCategory>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/admin/home/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultListHomeCategoryFromJSON(jsonValue));
    }

    /**
     */
    async getHomeCategory(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultListHomeCategory> {
        const response = await this.getHomeCategoryRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async updateHomeCategoryRaw(requestParameters: UpdateHomeCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultHomeCategory>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateHomeCategory().'
            );
        }

        if (requestParameters['homeCategory'] == null) {
            throw new runtime.RequiredError(
                'homeCategory',
                'Required parameter "homeCategory" was null or undefined when calling updateHomeCategory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/admin/home/category/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: HomeCategoryToJSON(requestParameters['homeCategory']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultHomeCategoryFromJSON(jsonValue));
    }

    /**
     */
    async updateHomeCategory(requestParameters: UpdateHomeCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultHomeCategory> {
        const response = await this.updateHomeCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}