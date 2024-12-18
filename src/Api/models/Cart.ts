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


// May contain unused imports in some cases
// @ts-ignore
import type { CartItem } from './cart-item';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

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
    'id'?: number;
    /**
     * 
     * @type {User}
     * @memberof Cart
     */
    'user'?: User;
    /**
     * 
     * @type {Set<CartItem>}
     * @memberof Cart
     */
    'cartItems'?: Set<CartItem>;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    'preDiscountPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    'totalSellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    'totalItem'?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    'totalMaxPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof Cart
     */
    'discount'?: number;
    /**
     * 
     * @type {string}
     * @memberof Cart
     */
    'couponCode'?: string;
}

