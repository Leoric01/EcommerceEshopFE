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
import type { BankDetails } from './bank-details';
// May contain unused imports in some cases
// @ts-ignore
import type { BusinessDetails } from './business-details';
// May contain unused imports in some cases
// @ts-ignore
import type { GrantedAuthority } from './granted-authority';

/**
 * 
 * @export
 * @interface Seller
 */
export interface Seller {
    /**
     * 
     * @type {number}
     * @memberof Seller
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'mobile'?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'sellerName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'password'?: string;
    /**
     * 
     * @type {BusinessDetails}
     * @memberof Seller
     */
    'businessDetails'?: BusinessDetails;
    /**
     * 
     * @type {BankDetails}
     * @memberof Seller
     */
    'bankDetails'?: BankDetails;
    /**
     * 
     * @type {Address}
     * @memberof Seller
     */
    'pickupAddress'?: Address;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'role'?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'accountStatus'?: SellerAccountStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'lastSignOut'?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'username'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    'signedOut'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    'vat'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    'emailVerified'?: boolean;
    /**
     * 
     * @type {Array<GrantedAuthority>}
     * @memberof Seller
     */
    'authorities'?: Array<GrantedAuthority>;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    'accountNonExpired'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    'credentialsNonExpired'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    'accountNonLocked'?: boolean;
}

export const SellerAccountStatusEnum = {
    PendingVerification: 'PENDING_VERIFICATION',
    Active: 'ACTIVE',
    Suspended: 'SUSPENDED',
    Deactivated: 'DEACTIVATED',
    Banned: 'BANNED',
    Closed: 'CLOSED'
} as const;

export type SellerAccountStatusEnum = typeof SellerAccountStatusEnum[keyof typeof SellerAccountStatusEnum];


