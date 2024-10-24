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

import { mapValues } from '../runtime';
import type { Coupon } from './Coupon';
import {
    CouponFromJSON,
    CouponFromJSONTyped,
    CouponToJSON,
    CouponToJSONTyped,
} from './Coupon';

/**
 * 
 * @export
 * @interface ResultListCoupon
 */
export interface ResultListCoupon {
    /**
     * 
     * @type {boolean}
     * @memberof ResultListCoupon
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResultListCoupon
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultListCoupon
     */
    message?: string;
    /**
     * 
     * @type {Array<Coupon>}
     * @memberof ResultListCoupon
     */
    data?: Array<Coupon>;
}

/**
 * Check if a given object implements the ResultListCoupon interface.
 */
export function instanceOfResultListCoupon(value: object): value is ResultListCoupon {
    return true;
}

export function ResultListCouponFromJSON(json: any): ResultListCoupon {
    return ResultListCouponFromJSONTyped(json, false);
}

export function ResultListCouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultListCoupon {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(CouponFromJSON)),
    };
}

  export function ResultListCouponToJSON(json: any): ResultListCoupon {
      return ResultListCouponToJSONTyped(json, false);
  }

  export function ResultListCouponToJSONTyped(value?: ResultListCoupon | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'message': value['message'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(CouponToJSON)),
    };
}
