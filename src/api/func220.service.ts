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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { BankJSONV220 } from '../model/bankJSONV220';
import { ConfigurationJSON } from '../model/configurationJSON';
import { ConnectorMetricsJson } from '../model/connectorMetricsJson';
import { CounterpartiesJsonV220 } from '../model/counterpartiesJsonV220';
import { CreateAccountJSONV220 } from '../model/createAccountJSONV220';
import { ErrorInvalidDateFormat } from '../model/errorInvalidDateFormat';
import { ErrorInvalidISOCurrencyCode } from '../model/errorInvalidISOCurrencyCode';
import { ErrorInvalidJsonFormat } from '../model/errorInvalidJsonFormat';
import { ErrorUnknownError } from '../model/errorUnknownError';
import { ErrorUserNotLoggedIn } from '../model/errorUserNotLoggedIn';
import { FXRateJsonV220 } from '../model/fXRateJsonV220';
import { MessageDocsJson } from '../model/messageDocsJson';
import { ProductJsonV220 } from '../model/productJsonV220';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class Func_2_2_0Service {

    protected basePath = 'https://apc.openbankproject.com/obp/v3.0.0';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * <p>Returns information about:</p><ul>  <li>Akka ports</li>  <li>Elastic search ports</li>  <li>Cached function</li></ul>
     * @summary The configuration of the API
     */
    public func220Config(extraHttpRequestParams?: any): Observable<ConfigurationJSON> {
        return this.func220ConfigWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.</p><p>The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.</p><p>If USER_ID is not specified the account will be owned by the logged in User.</p><p>Note: The Amount must be zero.</p>
     * @summary Create Account
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    public func220CreateAccount(body: CreateAccountJSONV220, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CreateAccountJSONV220> {
        return this.func220CreateAccountWithHttpInfo(body, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>Create a new bank (Authenticated access). Authentication is Mandatory</p>
     * @summary Create Bank
     * @param body BANK_BODY
     */
    public func220CreateBank(body: BankJSONV220, extraHttpRequestParams?: any): Observable<BankJSONV220> {
        return this.func220CreateBankWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>Create or Update Product for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank</p>
     * @summary Create Product
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    public func220CreateProduct(body: ProductJsonV220, BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductJsonV220> {
        return this.func220CreateProductWithHttpInfo(body, BANK_ID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>Get the all metrics</p><p>require $CanGetConnectorMetrics role</p><p>Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics</p><p>Should be able to filter on the following metrics fields</p><p>eg: /management/connector/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1 start_date (defaults to one week before current date): eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date) eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 1000) eg:limit=2000</p><p>4 offset (for pagination: zero index, defaults to 0) eg: offset=10</p><p>eg: /management/connector/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=100&amp;offset=300</p><p>Other filters:</p><p>5 connector_name (if null ignore)</p><p>6 function_name (if null ignore)</p><p>7 correlation_id (if null ignore)</p>
     * @summary Get Connector Metrics
     */
    public func220GetConnectorMetrics(extraHttpRequestParams?: any): Observable<ConnectorMetricsJson> {
        return this.func220GetConnectorMetricsWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>Get the counterparties for the account / view.</p><p>Authentication is Mandatory</p>
     * @summary Get Counterparties of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    public func220GetCounterpartiesForAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CounterpartiesJsonV220> {
        return this.func220GetCounterpartiesForAccountWithHttpInfo(VIEW_ID, ACCOUNT_ID, BANK_ID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE </p>
     * @summary Get Current FxRate
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    public func220GetCurrentFxRate(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<FXRateJsonV220> {
        return this.func220GetCurrentFxRateWithHttpInfo(TO_CURRENCY_CODE, FROM_CURRENCY_CODE, BANK_ID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <p>These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor=kafka_vMar2017 in your Props</p>
     * @summary Get Message Docs
     */
    public func220GetMessageDocs(extraHttpRequestParams?: any): Observable<MessageDocsJson> {
        return this.func220GetMessageDocsWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * The configuration of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Akka ports&lt;/li&gt;  &lt;li&gt;Elastic search ports&lt;/li&gt;  &lt;li&gt;Cached function&lt;/li&gt;&lt;/ul&gt;
     */
    public func220ConfigWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/config';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create Account
     * &lt;p&gt;Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.&lt;/p&gt;&lt;p&gt;If USER_ID is not specified the account will be owned by the logged in User.&lt;/p&gt;&lt;p&gt;Note: The Amount must be zero.&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    public func220CreateAccountWithHttpInfo(body: CreateAccountJSONV220, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}'
                    .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
                    .replace('${' + 'BANK_ID' + '}', String(BANK_ID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func220CreateAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func220CreateAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220CreateAccount.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create Bank
     * &lt;p&gt;Create a new bank (Authenticated access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    public func220CreateBankWithHttpInfo(body: BankJSONV220, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/banks';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func220CreateBank.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create Product
     * &lt;p&gt;Create or Update Product for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    public func220CreateProductWithHttpInfo(body: ProductJsonV220, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/banks/${BANK_ID}/products'
                    .replace('${' + 'BANK_ID' + '}', String(BANK_ID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling func220CreateProduct.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220CreateProduct.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get Connector Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require $CanGetConnectorMetrics role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics&lt;/p&gt;&lt;p&gt;Should be able to filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1 start_date (defaults to one week before current date): eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for pagination: defaults to 1000) eg:limit&#x3D;2000&lt;/p&gt;&lt;p&gt;4 offset (for pagination: zero index, defaults to 0) eg: offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;100&amp;amp;offset&#x3D;300&lt;/p&gt;&lt;p&gt;Other filters:&lt;/p&gt;&lt;p&gt;5 connector_name (if null ignore)&lt;/p&gt;&lt;p&gt;6 function_name (if null ignore)&lt;/p&gt;&lt;p&gt;7 correlation_id (if null ignore)&lt;/p&gt;
     */
    public func220GetConnectorMetricsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/management/connector/metrics';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get Counterparties of one Account.
     * &lt;p&gt;Get the counterparties for the account / view.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    public func220GetCounterpartiesForAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/banks/${BANK_ID}/accounts/${ACCOUNT_ID}/${VIEW_ID}/counterparties'
                    .replace('${' + 'VIEW_ID' + '}', String(VIEW_ID))
                    .replace('${' + 'ACCOUNT_ID' + '}', String(ACCOUNT_ID))
                    .replace('${' + 'BANK_ID' + '}', String(BANK_ID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'VIEW_ID' is not null or undefined
        if (VIEW_ID === null || VIEW_ID === undefined) {
            throw new Error('Required parameter VIEW_ID was null or undefined when calling func220GetCounterpartiesForAccount.');
        }
        // verify required parameter 'ACCOUNT_ID' is not null or undefined
        if (ACCOUNT_ID === null || ACCOUNT_ID === undefined) {
            throw new Error('Required parameter ACCOUNT_ID was null or undefined when calling func220GetCounterpartiesForAccount.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220GetCounterpartiesForAccount.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get Current FxRate
     * &lt;p&gt;Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE &lt;/p&gt;
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    public func220GetCurrentFxRateWithHttpInfo(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/banks/${BANK_ID}/fx/${FROM_CURRENCY_CODE}/${TO_CURRENCY_CODE}'
                    .replace('${' + 'TO_CURRENCY_CODE' + '}', String(TO_CURRENCY_CODE))
                    .replace('${' + 'FROM_CURRENCY_CODE' + '}', String(FROM_CURRENCY_CODE))
                    .replace('${' + 'BANK_ID' + '}', String(BANK_ID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'TO_CURRENCY_CODE' is not null or undefined
        if (TO_CURRENCY_CODE === null || TO_CURRENCY_CODE === undefined) {
            throw new Error('Required parameter TO_CURRENCY_CODE was null or undefined when calling func220GetCurrentFxRate.');
        }
        // verify required parameter 'FROM_CURRENCY_CODE' is not null or undefined
        if (FROM_CURRENCY_CODE === null || FROM_CURRENCY_CODE === undefined) {
            throw new Error('Required parameter FROM_CURRENCY_CODE was null or undefined when calling func220GetCurrentFxRate.');
        }
        // verify required parameter 'BANK_ID' is not null or undefined
        if (BANK_ID === null || BANK_ID === undefined) {
            throw new Error('Required parameter BANK_ID was null or undefined when calling func220GetCurrentFxRate.');
        }

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get Message Docs
     * &lt;p&gt;These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor&#x3D;kafka_vMar2017 in your Props&lt;/p&gt;
     */
    public func220GetMessageDocsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/message-docs/mar2017';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (directLogin) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
