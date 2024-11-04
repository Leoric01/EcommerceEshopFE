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
import type { PageableObject } from './pageable-object';
// May contain unused imports in some cases
// @ts-ignore
import type { Product } from './product';
// May contain unused imports in some cases
// @ts-ignore
import type { SortObject } from './sort-object';

/**
 * 
 * @export
 * @interface PageProduct
 */
export interface PageProduct {
    /**
     * 
     * @type {number}
     * @memberof PageProduct
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageProduct
     */
    'totalElements'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageProduct
     */
    'size'?: number;
    /**
     * 
     * @type {Array<Product>}
     * @memberof PageProduct
     */
    'content'?: Array<Product>;
    /**
     * 
     * @type {number}
     * @memberof PageProduct
     */
    'number'?: number;
    /**
     * 
     * @type {Array<SortObject>}
     * @memberof PageProduct
     */
    'sort'?: Array<SortObject>;
    /**
     * 
     * @type {boolean}
     * @memberof PageProduct
     */
    'first'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageProduct
     */
    'last'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageProduct
     */
    'numberOfElements'?: number;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageProduct
     */
    'pageable'?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageProduct
     */
    'empty'?: boolean;
}

