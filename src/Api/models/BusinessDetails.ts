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
 * @interface BusinessDetails
 */
export interface BusinessDetails {
    /**
     * 
     * @type {string}
     * @memberof BusinessDetails
     */
    businessName?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetails
     */
    businessAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetails
     */
    businessEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetails
     */
    businessMobile?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetails
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetails
     */
    banner?: string;
}

/**
 * Check if a given object implements the BusinessDetails interface.
 */
export function instanceOfBusinessDetails(value: object): value is BusinessDetails {
    return true;
}

export function BusinessDetailsFromJSON(json: any): BusinessDetails {
    return BusinessDetailsFromJSONTyped(json, false);
}

export function BusinessDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'businessName': json['businessName'] == null ? undefined : json['businessName'],
        'businessAddress': json['businessAddress'] == null ? undefined : json['businessAddress'],
        'businessEmail': json['businessEmail'] == null ? undefined : json['businessEmail'],
        'businessMobile': json['businessMobile'] == null ? undefined : json['businessMobile'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'banner': json['banner'] == null ? undefined : json['banner'],
    };
}

  export function BusinessDetailsToJSON(json: any): BusinessDetails {
      return BusinessDetailsToJSONTyped(json, false);
  }

  export function BusinessDetailsToJSONTyped(value?: BusinessDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'businessName': value['businessName'],
        'businessAddress': value['businessAddress'],
        'businessEmail': value['businessEmail'],
        'businessMobile': value['businessMobile'],
        'logo': value['logo'],
        'banner': value['banner'],
    };
}
