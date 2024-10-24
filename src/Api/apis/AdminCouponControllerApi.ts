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
  Coupon,
  ResultCart,
  ResultCoupon,
  ResultListCoupon,
  ResultVoid,
} from '../models/index';
import {
    CouponFromJSON,
    CouponToJSON,
    ResultCartFromJSON,
    ResultCartToJSON,
    ResultCouponFromJSON,
    ResultCouponToJSON,
    ResultListCouponFromJSON,
    ResultListCouponToJSON,
    ResultVoidFromJSON,
    ResultVoidToJSON,
} from '../models/index';

export interface ApplyCouponRequest {
    apply: string;
    code: string;
    orderValue: number;
}

export interface CreateCouponRequest {
    coupon: Coupon;
}

export interface DeleteCouponRequest {
    couponId: number;
}

/**
 * 
 */
export class AdminCouponControllerApi extends runtime.BaseAPI {

    /**
     */
    async applyCouponRaw(requestParameters: ApplyCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultCart>> {
        if (requestParameters['apply'] == null) {
            throw new runtime.RequiredError(
                'apply',
                'Required parameter "apply" was null or undefined when calling applyCoupon().'
            );
        }

        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling applyCoupon().'
            );
        }

        if (requestParameters['orderValue'] == null) {
            throw new runtime.RequiredError(
                'orderValue',
                'Required parameter "orderValue" was null or undefined when calling applyCoupon().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apply'] != null) {
            queryParameters['apply'] = requestParameters['apply'];
        }

        if (requestParameters['code'] != null) {
            queryParameters['code'] = requestParameters['code'];
        }

        if (requestParameters['orderValue'] != null) {
            queryParameters['orderValue'] = requestParameters['orderValue'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coupon/apply`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultCartFromJSON(jsonValue));
    }

    /**
     */
    async applyCoupon(requestParameters: ApplyCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultCart> {
        const response = await this.applyCouponRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createCouponRaw(requestParameters: CreateCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultCoupon>> {
        if (requestParameters['coupon'] == null) {
            throw new runtime.RequiredError(
                'coupon',
                'Required parameter "coupon" was null or undefined when calling createCoupon().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/coupon/admin/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CouponToJSON(requestParameters['coupon']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultCouponFromJSON(jsonValue));
    }

    /**
     */
    async createCoupon(requestParameters: CreateCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultCoupon> {
        const response = await this.createCouponRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteCouponRaw(requestParameters: DeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultVoid>> {
        if (requestParameters['couponId'] == null) {
            throw new runtime.RequiredError(
                'couponId',
                'Required parameter "couponId" was null or undefined when calling deleteCoupon().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coupon/admin/delete/{couponId}`.replace(`{${"couponId"}}`, encodeURIComponent(String(requestParameters['couponId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultVoidFromJSON(jsonValue));
    }

    /**
     */
    async deleteCoupon(requestParameters: DeleteCouponRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultVoid> {
        const response = await this.deleteCouponRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getAllCouponsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultListCoupon>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coupon/admin/all`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultListCouponFromJSON(jsonValue));
    }

    /**
     */
    async getAllCoupons(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultListCoupon> {
        const response = await this.getAllCouponsRaw(initOverrides);
        return await response.value();
    }

}