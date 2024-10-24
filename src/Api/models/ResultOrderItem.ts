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
import type { OrderItem } from './OrderItem';
import {
    OrderItemFromJSON,
    OrderItemFromJSONTyped,
    OrderItemToJSON,
    OrderItemToJSONTyped,
} from './OrderItem';

/**
 * 
 * @export
 * @interface ResultOrderItem
 */
export interface ResultOrderItem {
    /**
     * 
     * @type {boolean}
     * @memberof ResultOrderItem
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResultOrderItem
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultOrderItem
     */
    message?: string;
    /**
     * 
     * @type {OrderItem}
     * @memberof ResultOrderItem
     */
    data?: OrderItem;
}

/**
 * Check if a given object implements the ResultOrderItem interface.
 */
export function instanceOfResultOrderItem(value: object): value is ResultOrderItem {
    return true;
}

export function ResultOrderItemFromJSON(json: any): ResultOrderItem {
    return ResultOrderItemFromJSONTyped(json, false);
}

export function ResultOrderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultOrderItem {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : OrderItemFromJSON(json['data']),
    };
}

  export function ResultOrderItemToJSON(json: any): ResultOrderItem {
      return ResultOrderItemToJSONTyped(json, false);
  }

  export function ResultOrderItemToJSONTyped(value?: ResultOrderItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'message': value['message'],
        'data': OrderItemToJSON(value['data']),
    };
}
