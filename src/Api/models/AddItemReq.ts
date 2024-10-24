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
 * @interface AddItemReq
 */
export interface AddItemReq {
    /**
     * 
     * @type {string}
     * @memberof AddItemReq
     */
    size?: string;
    /**
     * 
     * @type {number}
     * @memberof AddItemReq
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof AddItemReq
     */
    productId?: number;
}

/**
 * Check if a given object implements the AddItemReq interface.
 */
export function instanceOfAddItemReq(value: object): value is AddItemReq {
    return true;
}

export function AddItemReqFromJSON(json: any): AddItemReq {
    return AddItemReqFromJSONTyped(json, false);
}

export function AddItemReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddItemReq {
    if (json == null) {
        return json;
    }
    return {
        
        'size': json['size'] == null ? undefined : json['size'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'productId': json['productId'] == null ? undefined : json['productId'],
    };
}

  export function AddItemReqToJSON(json: any): AddItemReq {
      return AddItemReqToJSONTyped(json, false);
  }

  export function AddItemReqToJSONTyped(value?: AddItemReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'size': value['size'],
        'quantity': value['quantity'],
        'productId': value['productId'],
    };
}
