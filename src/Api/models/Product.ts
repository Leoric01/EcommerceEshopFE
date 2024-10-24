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
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';
import type { Review } from './Review';
import {
    ReviewFromJSON,
    ReviewFromJSONTyped,
    ReviewToJSON,
    ReviewToJSONTyped,
} from './Review';
import type { Seller } from './Seller';
import {
    SellerFromJSON,
    SellerFromJSONTyped,
    SellerToJSON,
    SellerToJSONTyped,
} from './Seller';

/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    mrpPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    sellingPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    discountPercentage?: number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    color?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Product
     */
    image?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    numRatings?: number;
    /**
     * 
     * @type {Category}
     * @memberof Product
     */
    category?: Category;
    /**
     * 
     * @type {Seller}
     * @memberof Product
     */
    seller?: Seller;
    /**
     * 
     * @type {Array<Review>}
     * @memberof Product
     */
    reviews?: Array<Review>;
    /**
     * 
     * @type {Date}
     * @memberof Product
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Product
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    sizes?: string;
}

/**
 * Check if a given object implements the Product interface.
 */
export function instanceOfProduct(value: object): value is Product {
    return true;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'mrpPrice': json['mrpPrice'] == null ? undefined : json['mrpPrice'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'sellingPrice': json['sellingPrice'] == null ? undefined : json['sellingPrice'],
        'discountPercentage': json['discountPercentage'] == null ? undefined : json['discountPercentage'],
        'color': json['color'] == null ? undefined : json['color'],
        'image': json['image'] == null ? undefined : json['image'],
        'numRatings': json['numRatings'] == null ? undefined : json['numRatings'],
        'category': json['category'] == null ? undefined : CategoryFromJSON(json['category']),
        'seller': json['seller'] == null ? undefined : SellerFromJSON(json['seller']),
        'reviews': json['reviews'] == null ? undefined : ((json['reviews'] as Array<any>).map(ReviewFromJSON)),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'sizes': json['sizes'] == null ? undefined : json['sizes'],
    };
}

  export function ProductToJSON(json: any): Product {
      return ProductToJSONTyped(json, false);
  }

  export function ProductToJSONTyped(value?: Product | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'mrpPrice': value['mrpPrice'],
        'quantity': value['quantity'],
        'sellingPrice': value['sellingPrice'],
        'discountPercentage': value['discountPercentage'],
        'color': value['color'],
        'image': value['image'],
        'numRatings': value['numRatings'],
        'category': CategoryToJSON(value['category']),
        'seller': SellerToJSON(value['seller']),
        'reviews': value['reviews'] == null ? undefined : ((value['reviews'] as Array<any>).map(ReviewToJSON)),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'sizes': value['sizes'],
    };
}
