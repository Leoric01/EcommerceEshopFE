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



/**
 * 
 * @export
 * @interface PaymentDetails
 */
export interface PaymentDetails {
    /**
     * 
     * @type {string}
     * @memberof PaymentDetails
     */
    'paymentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentDetails
     */
    'paymentLinkId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentDetails
     */
    'paymentLinkReferenceId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentDetails
     */
    'paymentLinkStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentDetails
     */
    'paymentIdZWSP'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentDetails
     */
    'status'?: PaymentDetailsStatusEnum;
}

export const PaymentDetailsStatusEnum = {
    Pending: 'PENDING',
    Processing: 'PROCESSING',
    Completed: 'COMPLETED',
    Failed: 'FAILED'
} as const;

export type PaymentDetailsStatusEnum = typeof PaymentDetailsStatusEnum[keyof typeof PaymentDetailsStatusEnum];


