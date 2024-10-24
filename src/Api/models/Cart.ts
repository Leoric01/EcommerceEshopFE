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
import type { CartItem } from './CartItem';
import {
    CartItemFromJSON,
    CartItemFromJSONTyped,
    CartItemToJSON,
    CartItemToJSONTyped,
} from './CartItem';

/**
 * 
 * @export
 * @interface Cart
 */
export interface Cart {
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    id?: number;
    /**
     * 
     * @type {Set<CartItem>}
     * @memberof Cart
     */
    cartItems?: Set<CartItem>;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    preDiscountPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    totalSellingPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    totalItem?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    totalMrpPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    discount?: number;
    /**
     * 
     * @type {string}
     * @memberof Cart
     */
    couponCode?: string;
}

/**
 * Check if a given object implements the Cart interface.
 */
export function instanceOfCart(value: object): value is Cart {
    return true;
}

export function CartFromJSON(json: any): Cart {
    return CartFromJSONTyped(json, false);
}

export function CartFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cart {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'cartItems': json['cartItems'] == null ? undefined : (new Set((json['cartItems'] as Array<any>).map(CartItemFromJSON))),
        'preDiscountPrice': json['preDiscountPrice'] == null ? undefined : json['preDiscountPrice'],
        'totalSellingPrice': json['totalSellingPrice'] == null ? undefined : json['totalSellingPrice'],
        'totalItem': json['totalItem'] == null ? undefined : json['totalItem'],
        'totalMrpPrice': json['totalMrpPrice'] == null ? undefined : json['totalMrpPrice'],
        'discount': json['discount'] == null ? undefined : json['discount'],
        'couponCode': json['couponCode'] == null ? undefined : json['couponCode'],
    };
}

  export function CartToJSON(json: any): Cart {
      return CartToJSONTyped(json, false);
  }

  export function CartToJSONTyped(value?: Cart | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'cartItems': value['cartItems'] == null ? undefined : (Array.from(value['cartItems'] as Set<any>).map(CartItemToJSON)),
        'preDiscountPrice': value['preDiscountPrice'],
        'totalSellingPrice': value['totalSellingPrice'],
        'totalItem': value['totalItem'],
        'totalMrpPrice': value['totalMrpPrice'],
        'discount': value['discount'],
        'couponCode': value['couponCode'],
    };
}
