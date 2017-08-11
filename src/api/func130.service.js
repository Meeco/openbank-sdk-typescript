/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions } from '@angular/http';
import '../rxjs-operators';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
var Func_1_3_0Service = (function () {
    function Func_1_3_0Service(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
        this.defaultHeaders = new Headers();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    Func_1_3_0Service.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    Func_1_3_0Service.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * <p>Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.</p>
     * @summary Get cards for the current user
     */
    Func_1_3_0Service.prototype.func130GetCards = function (extraHttpRequestParams) {
        return this.func130GetCardsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get cards for the specified bank
     * @param BANK_ID The bank id
     */
    Func_1_3_0Service.prototype.func130GetCardsForBank = function (BANK_ID, extraHttpRequestParams) {
        return this.func130GetCardsForBankWithHttpInfo(BANK_ID, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get cards for the current user
     * &lt;p&gt;Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.&lt;/p&gt;
     */
    Func_1_3_0Service.prototype.func130GetCardsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/cards';
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get cards for the specified bank
     *
     * @param BANK_ID The bank id
     */
    Func_1_3_0Service.prototype.func130GetCardsForBankWithHttpInfo = function (BANK_ID, extraHttpRequestParams) {
        var path = this.basePath + '/banks/${BANK_ID}/cards'
            .replace('${' + 'BANK_ID' + '}', String(BANK_ID));
        var queryParameters = new URLSearchParams();
        var headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func130GetCardsForBank.');
        }
        // to determine the Accept header
        var produces = [];
        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        var requestOptions = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return Func_1_3_0Service;
}());
export { Func_1_3_0Service };
Func_1_3_0Service.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Func_1_3_0Service.ctorParameters = function () { return [
    { type: Http, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] },] },
    { type: Configuration, decorators: [{ type: Optional },] },
]; };
//# sourceMappingURL=func130.service.js.map