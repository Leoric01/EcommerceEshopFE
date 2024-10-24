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
 * @interface VerificationCodeReq
 */
export interface VerificationCodeReq {
    /**
     * 
     * @type {string}
     * @memberof VerificationCodeReq
     */
    email: string;
}

/**
 * Check if a given object implements the VerificationCodeReq interface.
 */
export function instanceOfVerificationCodeReq(value: object): value is VerificationCodeReq {
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function VerificationCodeReqFromJSON(json: any): VerificationCodeReq {
    return VerificationCodeReqFromJSONTyped(json, false);
}

export function VerificationCodeReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationCodeReq {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

  export function VerificationCodeReqToJSON(json: any): VerificationCodeReq {
      return VerificationCodeReqToJSONTyped(json, false);
  }

  export function VerificationCodeReqToJSONTyped(value?: VerificationCodeReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
    };
}
