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
/**
 * 
 * @export
 * @interface CreateProductReq
 */
export interface CreateProductReq {
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateProductReq
     */
    mrpPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateProductReq
     */
    sellingPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    color?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateProductReq
     */
    images?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    category2?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    category3?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProductReq
     */
    sizes?: string;
}

/**
 * Check if a given object implements the CreateProductReq interface.
 */
export function instanceOfCreateProductReq(value: object): value is CreateProductReq {
    return true;
}

export function CreateProductReqFromJSON(json: any): CreateProductReq {
    return CreateProductReqFromJSONTyped(json, false);
}

export function CreateProductReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProductReq {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'mrpPrice': json['mrpPrice'] == null ? undefined : json['mrpPrice'],
        'sellingPrice': json['sellingPrice'] == null ? undefined : json['sellingPrice'],
        'color': json['color'] == null ? undefined : json['color'],
        'images': json['images'] == null ? undefined : json['images'],
        'category': json['category'] == null ? undefined : json['category'],
        'category2': json['category2'] == null ? undefined : json['category2'],
        'category3': json['category3'] == null ? undefined : json['category3'],
        'sizes': json['sizes'] == null ? undefined : json['sizes'],
    };
}

  export function CreateProductReqToJSON(json: any): CreateProductReq {
      return CreateProductReqToJSONTyped(json, false);
  }

  export function CreateProductReqToJSONTyped(value?: CreateProductReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'description': value['description'],
        'mrpPrice': value['mrpPrice'],
        'sellingPrice': value['sellingPrice'],
        'color': value['color'],
        'images': value['images'],
        'category': value['category'],
        'category2': value['category2'],
        'category3': value['category3'],
        'sizes': value['sizes'],
    };
}

