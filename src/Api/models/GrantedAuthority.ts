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
 * @interface GrantedAuthority
 */
export interface GrantedAuthority {
    /**
     * 
     * @type {string}
     * @memberof GrantedAuthority
     */
    authority?: string;
}

/**
 * Check if a given object implements the GrantedAuthority interface.
 */
export function instanceOfGrantedAuthority(value: object): value is GrantedAuthority {
    return true;
}

export function GrantedAuthorityFromJSON(json: any): GrantedAuthority {
    return GrantedAuthorityFromJSONTyped(json, false);
}

export function GrantedAuthorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrantedAuthority {
    if (json == null) {
        return json;
    }
    return {
        
        'authority': json['authority'] == null ? undefined : json['authority'],
    };
}

  export function GrantedAuthorityToJSON(json: any): GrantedAuthority {
      return GrantedAuthorityToJSONTyped(json, false);
  }

  export function GrantedAuthorityToJSONTyped(value?: GrantedAuthority | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'authority': value['authority'],
    };
}
