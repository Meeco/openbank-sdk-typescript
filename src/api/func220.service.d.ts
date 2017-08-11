import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { BankJSONV220 } from '../model/bankJSONV220';
import { ConfigurationJSON } from '../model/configurationJSON';
import { ConnectorMetricsJson } from '../model/connectorMetricsJson';
import { CounterpartiesJsonV220 } from '../model/counterpartiesJsonV220';
import { CreateAccountJSONV220 } from '../model/createAccountJSONV220';
import { FXRateJsonV220 } from '../model/fXRateJsonV220';
import { MessageDocsJson } from '../model/messageDocsJson';
import { ProductJsonV220 } from '../model/productJsonV220';
import { Configuration } from '../configuration';
export declare class Func_2_2_0Service {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1, T2>(objA, objB);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes);
    /**
     * <p>Returns information about:</p><ul>  <li>Akka ports</li>  <li>Elastic search ports</li>  <li>Cached function</li></ul>
     * @summary The configuration of the API
     */
    func220Config(extraHttpRequestParams?: any): Observable<ConfigurationJSON>;
    /**
     * <p>Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.</p><p>The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.</p><p>If USER_ID is not specified the account will be owned by the logged in User.</p><p>Note: The Amount must be zero.</p>
     * @summary Create Account
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func220CreateAccount(body: CreateAccountJSONV220, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CreateAccountJSONV220>;
    /**
     * <p>Create a new bank (Authenticated access). Authentication is Mandatory</p>
     * @summary Create Bank
     * @param body BANK_BODY
     */
    func220CreateBank(body: BankJSONV220, extraHttpRequestParams?: any): Observable<BankJSONV220>;
    /**
     * <p>Create or Update Product for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank</p>
     * @summary Create Product
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func220CreateProduct(body: ProductJsonV220, BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductJsonV220>;
    /**
     * <p>Get the all metrics</p><p>require $CanGetConnectorMetrics role</p><p>Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics</p><p>Should be able to filter on the following metrics fields</p><p>eg: /management/connector/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1 start_date (defaults to one week before current date): eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date) eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 1000) eg:limit=2000</p><p>4 offset (for pagination: zero index, defaults to 0) eg: offset=10</p><p>eg: /management/connector/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=100&amp;offset=300</p><p>Other filters:</p><p>5 connector_name (if null ignore)</p><p>6 function_name (if null ignore)</p><p>7 correlation_id (if null ignore)</p>
     * @summary Get Connector Metrics
     */
    func220GetConnectorMetrics(extraHttpRequestParams?: any): Observable<ConnectorMetricsJson>;
    /**
     * <p>Get the counterparties for the account / view.</p><p>Authentication is Mandatory</p>
     * @summary Get Counterparties of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func220GetCounterpartiesForAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CounterpartiesJsonV220>;
    /**
     * <p>Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE </p>
     * @summary Get Current FxRate
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    func220GetCurrentFxRate(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<FXRateJsonV220>;
    /**
     * <p>These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor=kafka_vMar2017 in your Props</p>
     * @summary Get Message Docs
     */
    func220GetMessageDocs(extraHttpRequestParams?: any): Observable<MessageDocsJson>;
    /**
     * The configuration of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Akka ports&lt;/li&gt;  &lt;li&gt;Elastic search ports&lt;/li&gt;  &lt;li&gt;Cached function&lt;/li&gt;&lt;/ul&gt;
     */
    func220ConfigWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Account
     * &lt;p&gt;Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.&lt;/p&gt;&lt;p&gt;If USER_ID is not specified the account will be owned by the logged in User.&lt;/p&gt;&lt;p&gt;Note: The Amount must be zero.&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func220CreateAccountWithHttpInfo(body: CreateAccountJSONV220, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Bank
     * &lt;p&gt;Create a new bank (Authenticated access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    func220CreateBankWithHttpInfo(body: BankJSONV220, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Product
     * &lt;p&gt;Create or Update Product for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func220CreateProductWithHttpInfo(body: ProductJsonV220, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Connector Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require $CanGetConnectorMetrics role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics&lt;/p&gt;&lt;p&gt;Should be able to filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1 start_date (defaults to one week before current date): eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for pagination: defaults to 1000) eg:limit&#x3D;2000&lt;/p&gt;&lt;p&gt;4 offset (for pagination: zero index, defaults to 0) eg: offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;100&amp;amp;offset&#x3D;300&lt;/p&gt;&lt;p&gt;Other filters:&lt;/p&gt;&lt;p&gt;5 connector_name (if null ignore)&lt;/p&gt;&lt;p&gt;6 function_name (if null ignore)&lt;/p&gt;&lt;p&gt;7 correlation_id (if null ignore)&lt;/p&gt;
     */
    func220GetConnectorMetricsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Counterparties of one Account.
     * &lt;p&gt;Get the counterparties for the account / view.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func220GetCounterpartiesForAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Current FxRate
     * &lt;p&gt;Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE &lt;/p&gt;
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    func220GetCurrentFxRateWithHttpInfo(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Message Docs
     * &lt;p&gt;These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor&#x3D;kafka_vMar2017 in your Props&lt;/p&gt;
     */
    func220GetMessageDocsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
