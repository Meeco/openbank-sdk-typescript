import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { AddCustomerMessageJson } from '../model/addCustomerMessageJson';
import { CrmEventsJson } from '../model/crmEventsJson';
import { CustomerMessagesJson } from '../model/customerMessagesJson';
import { SuccessMessage } from '../model/successMessage';
import { TransactionRequestTypesJsonV140 } from '../model/transactionRequestTypesJsonV140';
import { Configuration } from '../configuration';
export declare class Func_1_4_0Service {
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
     * <p>Add a message for the customer specified by CUSTOMER_ID</p>
     * @summary Add Customer Message.
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func140AddCustomerMessage(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     *
     * @summary Get CRM Events for the logged in user
     * @param BANK_ID The bank id
     */
    func140GetCrmEvents(BANK_ID: string, extraHttpRequestParams?: any): Observable<CrmEventsJson>;
    /**
     * <p>Get messages for the logged in customer Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p>
     * @summary Get Customer Messages (current)
     * @param BANK_ID The bank id
     */
    func140GetCustomerMessages(BANK_ID: string, extraHttpRequestParams?: any): Observable<CustomerMessagesJson>;
    /**
     * <p>Returns the Transation Request Types that the account specified by ACCOUNT_ID and view specified by VIEW_ID has access to.</p><p>These are the ways this API Server can create a Transaction via a Transaction Request (as opposed to Transaction Types which include external types too e.g. for Transactions created by core banking etc.)</p><p>A Transaction Request Type internally determines:</p><ul>  <li>the required Transaction Request 'body' i.e. fields that define the 'what' and 'to' of a Transaction Request,</li>  <li>the type of security challenge that may be be raised before the Transaction Request proceeds, and</li>  <li>the threshold of that challenge.</li></ul><p>For instance in a 'SANDBOX_TAN' Transaction Request, for amounts over 1000 currency units, the user must supply a positive integer to complete the Transaction Request and create a Transaction.</p><p>This approach aims to provide only one endpoint for initiating transactions, and one that handles challenges, whilst still allowing flexibility with the payload and internal logic.</p>
     * @summary Get Transaction Request Types for Account
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func140GetTransactionRequestTypes(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionRequestTypesJsonV140>;
    /**
     * Add Customer Message.
     * &lt;p&gt;Add a message for the customer specified by CUSTOMER_ID&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func140AddCustomerMessageWithHttpInfo(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get CRM Events for the logged in user
     *
     * @param BANK_ID The bank id
     */
    func140GetCrmEventsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Customer Messages (current)
     * &lt;p&gt;Get messages for the logged in customer Messages sent to the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func140GetCustomerMessagesWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction Request Types for Account
     * &lt;p&gt;Returns the Transation Request Types that the account specified by ACCOUNT_ID and view specified by VIEW_ID has access to.&lt;/p&gt;&lt;p&gt;These are the ways this API Server can create a Transaction via a Transaction Request (as opposed to Transaction Types which include external types too e.g. for Transactions created by core banking etc.)&lt;/p&gt;&lt;p&gt;A Transaction Request Type internally determines:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;the required Transaction Request &#39;body&#39; i.e. fields that define the &#39;what&#39; and &#39;to&#39; of a Transaction Request,&lt;/li&gt;  &lt;li&gt;the type of security challenge that may be be raised before the Transaction Request proceeds, and&lt;/li&gt;  &lt;li&gt;the threshold of that challenge.&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;For instance in a &#39;SANDBOX_TAN&#39; Transaction Request, for amounts over 1000 currency units, the user must supply a positive integer to complete the Transaction Request and create a Transaction.&lt;/p&gt;&lt;p&gt;This approach aims to provide only one endpoint for initiating transactions, and one that handles challenges, whilst still allowing flexibility with the payload and internal logic.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func140GetTransactionRequestTypesWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}
