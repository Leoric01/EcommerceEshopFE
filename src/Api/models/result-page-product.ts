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
import type { PageProduct } from './page-product';

/**
 * 
 * @export
 * @interface ResultPageProduct
 */
export interface ResultPageProduct {
    /**
     * 
     * @type {boolean}
     * @memberof ResultPageProduct
     */
    'success'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResultPageProduct
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultPageProduct
     */
    'message'?: string;
    /**
     * 
     * @type {PageProduct}
     * @memberof ResultPageProduct
     */
    'data'?: PageProduct;
}
