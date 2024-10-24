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
import type { Order } from './Order';
import {
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
    OrderToJSONTyped,
} from './Order';

/**
 * 
 * @export
 * @interface ResultListOrder
 */
export interface ResultListOrder {
    /**
     * 
     * @type {boolean}
     * @memberof ResultListOrder
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResultListOrder
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultListOrder
     */
    message?: string;
    /**
     * 
     * @type {Array<Order>}
     * @memberof ResultListOrder
     */
    data?: Array<Order>;
}

/**
 * Check if a given object implements the ResultListOrder interface.
 */
export function instanceOfResultListOrder(value: object): value is ResultListOrder {
    return true;
}

export function ResultListOrderFromJSON(json: any): ResultListOrder {
    return ResultListOrderFromJSONTyped(json, false);
}

export function ResultListOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultListOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(OrderFromJSON)),
    };
}

  export function ResultListOrderToJSON(json: any): ResultListOrder {
      return ResultListOrderToJSONTyped(json, false);
  }

  export function ResultListOrderToJSONTyped(value?: ResultListOrder | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'message': value['message'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(OrderToJSON)),
    };
}

