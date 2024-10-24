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
  CreateProductReq,
  Product,
  ResultListProduct,
  ResultProduct,
  ResultVoid,
} from '../models/index';
import {
    CreateProductReqFromJSON,
    CreateProductReqToJSON,
    ProductFromJSON,
    ProductToJSON,
    ResultListProductFromJSON,
    ResultListProductToJSON,
    ResultProductFromJSON,
    ResultProductToJSON,
    ResultVoidFromJSON,
    ResultVoidToJSON,
} from '../models/index';

export interface CreateProductRequest {
    createProductReq: CreateProductReq;
}

export interface DeleteProductRequest {
    productId: number;
}

export interface UpdateProductRequest {
    productId: number;
    product: Product;
}

/**
 * 
 */
export class SellerProductControllerApi extends runtime.BaseAPI {

    /**
     */
    async createProductRaw(requestParameters: CreateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultProduct>> {
        if (requestParameters['createProductReq'] == null) {
            throw new runtime.RequiredError(
                'createProductReq',
                'Required parameter "createProductReq" was null or undefined when calling createProduct().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/seller/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProductReqToJSON(requestParameters['createProductReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultProductFromJSON(jsonValue));
    }

    /**
     */
    async createProduct(requestParameters: CreateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultProduct> {
        const response = await this.createProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteProductRaw(requestParameters: DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultVoid>> {
        if (requestParameters['productId'] == null) {
            throw new runtime.RequiredError(
                'productId',
                'Required parameter "productId" was null or undefined when calling deleteProduct().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/seller/products/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters['productId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultVoidFromJSON(jsonValue));
    }

    /**
     */
    async deleteProduct(requestParameters: DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultVoid> {
        const response = await this.deleteProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getProductsBySellerIdRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultListProduct>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/seller/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultListProductFromJSON(jsonValue));
    }

    /**
     */
    async getProductsBySellerId(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultListProduct> {
        const response = await this.getProductsBySellerIdRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async updateProductRaw(requestParameters: UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultProduct>> {
        if (requestParameters['productId'] == null) {
            throw new runtime.RequiredError(
                'productId',
                'Required parameter "productId" was null or undefined when calling updateProduct().'
            );
        }

        if (requestParameters['product'] == null) {
            throw new runtime.RequiredError(
                'product',
                'Required parameter "product" was null or undefined when calling updateProduct().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/seller/products/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters['productId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductToJSON(requestParameters['product']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultProductFromJSON(jsonValue));
    }

    /**
     */
    async updateProduct(requestParameters: UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultProduct> {
        const response = await this.updateProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
