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
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { Cart } from './cart';
// May contain unused imports in some cases
// @ts-ignore
import type { GrantedAuthority } from './granted-authority';
// May contain unused imports in some cases
// @ts-ignore
import type { Order } from './order';
// May contain unused imports in some cases
// @ts-ignore
import type { Review } from './review';
// May contain unused imports in some cases
// @ts-ignore
import type { Transaction } from './transaction';
// May contain unused imports in some cases
// @ts-ignore
import type { VerificationCode } from './verification-code';
// May contain unused imports in some cases
// @ts-ignore
import type { Wishlist } from './wishlist';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'mobile'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastName'?: string;
    /**
     * 
     * @type {VerificationCode}
     * @memberof User
     */
    'verificationCode'?: VerificationCode;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'role'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {Set<Address>}
     * @memberof User
     */
    'addresses'?: Set<Address>;
    /**
     * 
     * @type {Cart}
     * @memberof User
     */
    'cart'?: Cart;
    /**
     * 
     * @type {Array<Order>}
     * @memberof User
     */
    'orders'?: Array<Order>;
    /**
     * 
     * @type {Array<Review>}
     * @memberof User
     */
    'reviews'?: Array<Review>;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof User
     */
    'transactions'?: Array<Transaction>;
    /**
     * 
     * @type {Wishlist}
     * @memberof User
     */
    'wishlist'?: Wishlist;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastSignOut'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'username'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'signedOut'?: boolean;
    /**
     * 
     * @type {Array<GrantedAuthority>}
     * @memberof User
     */
    'authorities'?: Array<GrantedAuthority>;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'credentialsNonExpired'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'accountNonExpired'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'accountNonLocked'?: boolean;
}

