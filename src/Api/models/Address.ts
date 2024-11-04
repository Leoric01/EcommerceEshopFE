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
import type { Order } from './order';
// May contain unused imports in some cases
// @ts-ignore
import type { Seller } from './seller';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'street'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'locality'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'zip'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'mobile'?: string;
    /**
     * 
     * @type {User}
     * @memberof Address
     */
    'user'?: User;
    /**
     * 
     * @type {Seller}
     * @memberof Address
     */
    'seller'?: Seller;
    /**
     * 
     * @type {Order}
     * @memberof Address
     */
    'order'?: Order;
}

