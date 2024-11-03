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
import type { OrderItem } from './order-item';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentDetails } from './payment-details';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'orderId'?: string;
    /**
     * 
     * @type {User}
     * @memberof Order
     */
    'user'?: User;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'sellerId'?: number;
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    'orderItems'?: Array<OrderItem>;
    /**
     * 
     * @type {Address}
     * @memberof Order
     */
    'shippingAddress'?: Address;
    /**
     * 
     * @type {PaymentDetails}
     * @memberof Order
     */
    'paymentDetails'?: PaymentDetails;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'totalMrpPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'totalSellingPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'discount'?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'orderStatus'?: OrderOrderStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'totalItem'?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'paymentStatus'?: OrderPaymentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'orderDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'deliverDate'?: string;
}

export const OrderOrderStatusEnum = {
    Pending: 'PENDING',
    Placed: 'PLACED',
    Confirmed: 'CONFIRMED',
    Shipped: 'SHIPPED',
    Delivered: 'DELIVERED',
    Cancelled: 'CANCELLED'
} as const;

export type OrderOrderStatusEnum = typeof OrderOrderStatusEnum[keyof typeof OrderOrderStatusEnum];
export const OrderPaymentStatusEnum = {
    Pending: 'PENDING',
    Processing: 'PROCESSING',
    Completed: 'COMPLETED',
    Failed: 'FAILED'
} as const;

export type OrderPaymentStatusEnum = typeof OrderPaymentStatusEnum[keyof typeof OrderPaymentStatusEnum];


