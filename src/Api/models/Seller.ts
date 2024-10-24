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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';
import type { BankDetails } from './BankDetails';
import {
    BankDetailsFromJSON,
    BankDetailsFromJSONTyped,
    BankDetailsToJSON,
    BankDetailsToJSONTyped,
} from './BankDetails';
import type { GrantedAuthority } from './GrantedAuthority';
import {
    GrantedAuthorityFromJSON,
    GrantedAuthorityFromJSONTyped,
    GrantedAuthorityToJSON,
    GrantedAuthorityToJSONTyped,
} from './GrantedAuthority';
import type { BusinessDetails } from './BusinessDetails';
import {
    BusinessDetailsFromJSON,
    BusinessDetailsFromJSONTyped,
    BusinessDetailsToJSON,
    BusinessDetailsToJSONTyped,
} from './BusinessDetails';

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
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    sellerName?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    password?: string;
    /**
     * 
     * @type {BusinessDetails}
     * @memberof Seller
     */
    businessDetails?: BusinessDetails;
    /**
     * 
     * @type {BankDetails}
     * @memberof Seller
     */
    bankDetails?: BankDetails;
    /**
     * 
     * @type {Address}
     * @memberof Seller
     */
    pickupAddress?: Address;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    accountStatus?: SellerAccountStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof Seller
     */
    lastSignOut?: Date;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    username?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    signedOut?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    vat?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {Array<GrantedAuthority>}
     * @memberof Seller
     */
    authorities?: Array<GrantedAuthority>;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    accountNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    credentialsNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Seller
     */
    accountNonLocked?: boolean;
}


/**
 * @export
 */
export const SellerAccountStatusEnum = {
    PendingVerification: 'PENDING_VERIFICATION',
    Active: 'ACTIVE',
    Suspended: 'SUSPENDED',
    Deactivated: 'DEACTIVATED',
    Banned: 'BANNED',
    Closed: 'CLOSED'
} as const;
export type SellerAccountStatusEnum = typeof SellerAccountStatusEnum[keyof typeof SellerAccountStatusEnum];


/**
 * Check if a given object implements the Seller interface.
 */
export function instanceOfSeller(value: object): value is Seller {
    return true;
}

export function SellerFromJSON(json: any): Seller {
    return SellerFromJSONTyped(json, false);
}

export function SellerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Seller {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'email': json['email'] == null ? undefined : json['email'],
        'mobile': json['mobile'] == null ? undefined : json['mobile'],
        'sellerName': json['sellerName'] == null ? undefined : json['sellerName'],
        'password': json['password'] == null ? undefined : json['password'],
        'businessDetails': json['businessDetails'] == null ? undefined : BusinessDetailsFromJSON(json['businessDetails']),
        'bankDetails': json['bankDetails'] == null ? undefined : BankDetailsFromJSON(json['bankDetails']),
        'pickupAddress': json['pickupAddress'] == null ? undefined : AddressFromJSON(json['pickupAddress']),
        'role': json['role'] == null ? undefined : json['role'],
        'accountStatus': json['accountStatus'] == null ? undefined : json['accountStatus'],
        'lastSignOut': json['lastSignOut'] == null ? undefined : (new Date(json['lastSignOut'])),
        'name': json['name'] == null ? undefined : json['name'],
        'username': json['username'] == null ? undefined : json['username'],
        'signedOut': json['signedOut'] == null ? undefined : json['signedOut'],
        'vat': json['vat'] == null ? undefined : json['vat'],
        'emailVerified': json['emailVerified'] == null ? undefined : json['emailVerified'],
        'authorities': json['authorities'] == null ? undefined : ((json['authorities'] as Array<any>).map(GrantedAuthorityFromJSON)),
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'accountNonExpired': json['accountNonExpired'] == null ? undefined : json['accountNonExpired'],
        'credentialsNonExpired': json['credentialsNonExpired'] == null ? undefined : json['credentialsNonExpired'],
        'accountNonLocked': json['accountNonLocked'] == null ? undefined : json['accountNonLocked'],
    };
}

  export function SellerToJSON(json: any): Seller {
      return SellerToJSONTyped(json, false);
  }

  export function SellerToJSONTyped(value?: Seller | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'email': value['email'],
        'mobile': value['mobile'],
        'sellerName': value['sellerName'],
        'password': value['password'],
        'businessDetails': BusinessDetailsToJSON(value['businessDetails']),
        'bankDetails': BankDetailsToJSON(value['bankDetails']),
        'pickupAddress': AddressToJSON(value['pickupAddress']),
        'role': value['role'],
        'accountStatus': value['accountStatus'],
        'lastSignOut': value['lastSignOut'] == null ? undefined : ((value['lastSignOut']).toISOString()),
        'name': value['name'],
        'username': value['username'],
        'signedOut': value['signedOut'],
        'vat': value['vat'],
        'emailVerified': value['emailVerified'],
        'authorities': value['authorities'] == null ? undefined : ((value['authorities'] as Array<any>).map(GrantedAuthorityToJSON)),
        'enabled': value['enabled'],
        'accountNonExpired': value['accountNonExpired'],
        'credentialsNonExpired': value['credentialsNonExpired'],
        'accountNonLocked': value['accountNonLocked'],
    };
}
