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
 * @interface SetupPwFromOtpReq
 */
export interface SetupPwFromOtpReq {
    /**
     * 
     * @type {string}
     * @memberof SetupPwFromOtpReq
     */
    otp?: string;
    /**
     * 
     * @type {string}
     * @memberof SetupPwFromOtpReq
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof SetupPwFromOtpReq
     */
    password?: string;
}

/**
 * Check if a given object implements the SetupPwFromOtpReq interface.
 */
export function instanceOfSetupPwFromOtpReq(value: object): value is SetupPwFromOtpReq {
    return true;
}

export function SetupPwFromOtpReqFromJSON(json: any): SetupPwFromOtpReq {
    return SetupPwFromOtpReqFromJSONTyped(json, false);
}

export function SetupPwFromOtpReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetupPwFromOtpReq {
    if (json == null) {
        return json;
    }
    return {
        
        'otp': json['otp'] == null ? undefined : json['otp'],
        'email': json['email'] == null ? undefined : json['email'],
        'password': json['password'] == null ? undefined : json['password'],
    };
}

  export function SetupPwFromOtpReqToJSON(json: any): SetupPwFromOtpReq {
      return SetupPwFromOtpReqToJSONTyped(json, false);
  }

  export function SetupPwFromOtpReqToJSONTyped(value?: SetupPwFromOtpReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'otp': value['otp'],
        'email': value['email'],
        'password': value['password'],
    };
}
