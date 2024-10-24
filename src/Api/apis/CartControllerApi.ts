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


import * as runtime from '../runtime';
import type {
  AddItemReq,
  CartItemQuantityUpdateReq,
  ResultCart,
  ResultCartItem,
  ResultVoid,
} from '../models/index';
import {
    AddItemReqFromJSON,
    AddItemReqToJSON,
    CartItemQuantityUpdateReqFromJSON,
    CartItemQuantityUpdateReqToJSON,
    ResultCartFromJSON,
    ResultCartToJSON,
    ResultCartItemFromJSON,
    ResultCartItemToJSON,
    ResultVoidFromJSON,
    ResultVoidToJSON,
} from '../models/index';

export interface AddItemToCartRequest {
    addItemReq: AddItemReq;
}

export interface DeleteCartItemRequest {
    cartItemId: number;
}

export interface UpdateCartItemHandlerRequest {
    cartItemQuantityUpdateReq: CartItemQuantityUpdateReq;
}

/**
 * 
 */
export class CartControllerApi extends runtime.BaseAPI {

    /**
     */
    async addItemToCartRaw(requestParameters: AddItemToCartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultCartItem>> {
        if (requestParameters['addItemReq'] == null) {
            throw new runtime.RequiredError(
                'addItemReq',
                'Required parameter "addItemReq" was null or undefined when calling addItemToCart().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cart/add`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AddItemReqToJSON(requestParameters['addItemReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultCartItemFromJSON(jsonValue));
    }

    /**
     */
    async addItemToCart(requestParameters: AddItemToCartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultCartItem> {
        const response = await this.addItemToCartRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteCartItemRaw(requestParameters: DeleteCartItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultVoid>> {
        if (requestParameters['cartItemId'] == null) {
            throw new runtime.RequiredError(
                'cartItemId',
                'Required parameter "cartItemId" was null or undefined when calling deleteCartItem().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cart/item/{cartItemId}`.replace(`{${"cartItemId"}}`, encodeURIComponent(String(requestParameters['cartItemId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultVoidFromJSON(jsonValue));
    }

    /**
     */
    async deleteCartItem(requestParameters: DeleteCartItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultVoid> {
        const response = await this.deleteCartItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findUserCartHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultCart>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cart`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultCartFromJSON(jsonValue));
    }

    /**
     */
    async findUserCartHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultCart> {
        const response = await this.findUserCartHandlerRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async updateCartItemHandlerRaw(requestParameters: UpdateCartItemHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultCartItem>> {
        if (requestParameters['cartItemQuantityUpdateReq'] == null) {
            throw new runtime.RequiredError(
                'cartItemQuantityUpdateReq',
                'Required parameter "cartItemQuantityUpdateReq" was null or undefined when calling updateCartItemHandler().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cart/item`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CartItemQuantityUpdateReqToJSON(requestParameters['cartItemQuantityUpdateReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultCartItemFromJSON(jsonValue));
    }

    /**
     */
    async updateCartItemHandler(requestParameters: UpdateCartItemHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultCartItem> {
        const response = await this.updateCartItemHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
