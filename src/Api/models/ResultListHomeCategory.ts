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
import type { HomeCategory } from './HomeCategory';
import {
    HomeCategoryFromJSON,
    HomeCategoryFromJSONTyped,
    HomeCategoryToJSON,
    HomeCategoryToJSONTyped,
} from './HomeCategory';

/**
 * 
 * @export
 * @interface ResultListHomeCategory
 */
export interface ResultListHomeCategory {
    /**
     * 
     * @type {boolean}
     * @memberof ResultListHomeCategory
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResultListHomeCategory
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultListHomeCategory
     */
    message?: string;
    /**
     * 
     * @type {Array<HomeCategory>}
     * @memberof ResultListHomeCategory
     */
    data?: Array<HomeCategory>;
}

/**
 * Check if a given object implements the ResultListHomeCategory interface.
 */
export function instanceOfResultListHomeCategory(value: object): value is ResultListHomeCategory {
    return true;
}

export function ResultListHomeCategoryFromJSON(json: any): ResultListHomeCategory {
    return ResultListHomeCategoryFromJSONTyped(json, false);
}

export function ResultListHomeCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultListHomeCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(HomeCategoryFromJSON)),
    };
}

  export function ResultListHomeCategoryToJSON(json: any): ResultListHomeCategory {
      return ResultListHomeCategoryToJSONTyped(json, false);
  }

  export function ResultListHomeCategoryToJSONTyped(value?: ResultListHomeCategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'code': value['code'],
        'message': value['message'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(HomeCategoryToJSON)),
    };
}

