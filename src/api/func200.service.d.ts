import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { BasicAccountsJSON } from '../model/basicAccountsJSON';
import { CreateEntitlementJSON } from '../model/createEntitlementJSON';
import { CreateMeetingJson } from '../model/createMeetingJson';
import { CreateUserCustomerLinkJson } from '../model/createUserCustomerLinkJson';
import { CreateUserJson } from '../model/createUserJson';
import { EntitlementJSON } from '../model/entitlementJSON';
import { EntitlementJSONs } from '../model/entitlementJSONs';
import { KycCheckJSON } from '../model/kycCheckJSON';
import { KycChecksJSON } from '../model/kycChecksJSON';
import { KycDocumentJSON } from '../model/kycDocumentJSON';
import { KycDocumentsJSON } from '../model/kycDocumentsJSON';
import { KycMediaJSON } from '../model/kycMediaJSON';
import { KycMediasJSON } from '../model/kycMediasJSON';
import { KycStatusJSON } from '../model/kycStatusJSON';
import { KycStatusesJSON } from '../model/kycStatusesJSON';
import { MeetingJson } from '../model/meetingJson';
import { MeetingsJson } from '../model/meetingsJson';
import { PermissionsJSON } from '../model/permissionsJSON';
import { PostKycCheckJSON } from '../model/postKycCheckJSON';
import { PostKycDocumentJSON } from '../model/postKycDocumentJSON';
import { PostKycMediaJSON } from '../model/postKycMediaJSON';
import { PostKycStatusJSON } from '../model/postKycStatusJSON';
import { SocialMediaJSON } from '../model/socialMediaJSON';
import { SocialMediasJSON } from '../model/socialMediasJSON';
import { SuccessMessage } from '../model/successMessage';
import { TransactionTypesJsonV200 } from '../model/transactionTypesJsonV200';
import { UserCustomerLinkJson } from '../model/userCustomerLinkJson';
import { UserJSONV200 } from '../model/userJSONV200';
import { ViewsJSONV121 } from '../model/viewsJSONV121';
import { Configuration } from '../configuration';
export declare class Func_2_0_0Service {
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
     * <p>Create Entitlement. Grant Role to User.</p><p>Entitlements are used to grant System or Bank level roles to Users. (For Account level privileges, see Views)</p><p>For a System level Role (.e.g CanGetAnyUser), set bank_id to an empty string i.e. \"bank_id\":\"\"</p><p>For a Bank level Role (e.g. CanCreateAccount), set bank_id to a valid value e.g. \"bank_id\":\"my-bank-id\"</p><p>Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.</p>
     * @summary Add Entitlement for a User.
     * @param body BANK_BODY
     * @param USER_ID The user id
     */
    func200AddEntitlement(body: CreateEntitlementJSON, USER_ID: string, extraHttpRequestParams?: any): Observable<EntitlementJSON>;
    /**
     * <p>Add a KYC check for the customer specified by CUSTOMER_ID. KYC Checks store details of checks on a customer made by the KYC team, their comments and a satisfied status.</p>
     * @summary Add KYC Check
     * @param body BANK_BODY
     * @param KYC_CHECK_ID The kyc check id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycCheck(body: PostKycCheckJSON, KYC_CHECK_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycCheckJSON>;
    /**
     * <p>Add a KYC document for the customer specified by CUSTOMER_ID. KYC Documents contain the document type (e.g. passport), place of issue, expiry etc. </p>
     * @summary Add KYC Document.
     * @param body BANK_BODY
     * @param KYC_DOCUMENT_ID The kyc document id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycDocument(body: PostKycDocumentJSON, KYC_DOCUMENT_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycDocumentJSON>;
    /**
     * <p>Add some KYC media for the customer specified by CUSTOMER_ID. KYC Media resources relate to KYC Documents and KYC Checks and contain media urls for scans of passports, utility bills etc.</p>
     * @summary Add KYC Media.
     * @param body BANK_BODY
     * @param KYC_MEDIA_ID The kyc media id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycMedia(body: PostKycMediaJSON, KYC_MEDIA_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycMediaJSON>;
    /**
     * <p>Add a kyc_status for the customer specified by CUSTOMER_ID. KYC Status is a timeline of the KYC status of the customer</p>
     * @summary Add KYC Status
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycStatus(body: PostKycStatusJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycStatusJSON>;
    /**
     * <p>Add a social media handle for the customer specified by CUSTOMER_ID.</p>
     * @summary Add Social Media Handle
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddSocialMediaHandle(body: SocialMediaJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Get accounts at one bank that the user has access to (Authenticated + Anonymous access). Returns the list of accounts at BANK_ID that the user has access to. For each account the API returns the account ID and the available views.</p><p>If the user is not authenticated, the list will contain only the accounts providing public views. Authentication is Optional</p>
     * @summary Get Accounts at one Bank (Public and Private).
     * @param BANK_ID The bank id
     */
    func200AllAccountsAtOneBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Create Meeting: Initiate a video conference/call with the bank.</p><p>The Meetings resource contains meta data about video/other conference sessions, not the video/audio/chat itself.</p><p>The actual conferencing is handled by external providers. Currently OBP supports tokbox video conferences (WIP).</p><p>This is not a recomendation of tokbox per se.</p><p>provider_id determines the provider of the meeting / video chat service. MUST be url friendly (no spaces).</p><p>purpose_id explains the purpose of the chat. onboarding | mortgage | complaint etc. MUST be url friendly (no spaces).</p><p>Login is required.</p><p>This call is <strong>experimental</strong>. Currently staff_user_id is not set. Further calls will be needed to correctly set this.</p>
     * @summary Create Meeting (video conference/call)
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func200CreateMeeting(body: CreateMeetingJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<MeetingJson>;
    /**
     * <p>Creates OBP user.  No authorisation (currently) required.</p><p>Mimics current webform to Register.</p><p>Requires username(email) and password.</p><p>Returns 409 error if username not unique.</p><p>May require validation of email address.</p>
     * @summary Create User.
     * @param body BANK_BODY
     */
    func200CreateUser(body: CreateUserJson, extraHttpRequestParams?: any): Observable<UserJSONV200>;
    /**
     * <p>Link a User to a Customer</p><p>Authentication is Mandatory</p><p>CanCreateUserCustomerLink OR CanCreateUserCustomerLinkAtAnyBank entitlements are required.</p>
     * @summary Create User Customer Link.
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func200CreateUserCustomerLinks(body: CreateUserCustomerLinkJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<UserCustomerLinkJson>;
    /**
     * <p>Delete Entitlement specified by ENTITLEMENT_ID for an user specified by USER_ID</p><p>Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.</p>
     * @summary Delete Entitlement
     * @param ENTITLEMENT_ID The entitblement id
     * @param USER_ID The user id
     */
    func200DeleteEntitlement(ENTITLEMENT_ID: string, USER_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Login is required.</p>
     * @summary Get all Entitlements
     */
    func200GetAllEntitlements(extraHttpRequestParams?: any): Observable<EntitlementJSONs>;
    /**
     * <p>Get the logged in user</p><p>Login is required.</p>
     * @summary Get User (Current)
     */
    func200GetCurrentUser(extraHttpRequestParams?: any): Observable<UserJSONV200>;
    /**
     * <p>Login is required.</p>
     * @summary Get Entitlements specified by USER_ID
     * @param USER_ID The user id
     */
    func200GetEntitlements(USER_ID: string, extraHttpRequestParams?: any): Observable<EntitlementJSONs>;
    /**
     * <p>Get KYC checks for the logged in customer Messages sent to the currently authenticated user.</p><p>Authentication is Mandatory</p>
     * @summary Get KYC Checks for current Customer
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycChecks(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycChecksJSON>;
    /**
     * <p>Get KYC (know your customer) documents for a customer Get a list of documents that affirm the identity of the customer Passport, driving licence etc. Authentication is Optional</p>
     * @summary Get KYC Documents for Customer
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycDocuments(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycDocumentsJSON>;
    /**
     * <p>Get KYC media (scans, pictures, videos) that affirms the identity of the customer.</p><p>Authentication is Mandatory</p>
     * @summary Get KYC Media for a customer
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycMedia(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycMediasJSON>;
    /**
     * <p>Get the KYC statuses for a customer over time</p><p>Authentication is Mandatory</p>
     * @summary Get the KYC statuses for a customer
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycStatuses(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycStatusesJSON>;
    /**
     * <p>Get Meeting specified by BANK_ID / MEETING_ID Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.</p><p>The actual conference/chats are handled by external services.</p><p>Login is required.</p><p>This call is <strong>experimental</strong> and will require further authorisation in the future.</p>
     * @summary Get Meeting
     * @param BANK_ID The bank id
     */
    func200GetMeeting(BANK_ID: string, extraHttpRequestParams?: any): Observable<MeetingJson>;
    /**
     * <p>Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.</p><p>The actual conference/chats are handled by external services.</p><p>Login is required.</p><p>This call is <strong>experimental</strong> and will require further authorisation in the future.</p>
     * @summary Get Meetings
     * @param BANK_ID The bank id
     */
    func200GetMeetings(BANK_ID: string, extraHttpRequestParams?: any): Observable<MeetingsJson>;
    /**
     * <p>Returns the list of the views at BANK_ID for account ACCOUNT_ID that a USER_ID at their provider PROVIDER_ID has access to. All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get access for specific user.
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func200GetPermissionForUserForBankAccount(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewsJSONV121>;
    /**
     * <p>Returns the list of the permissions at BANK_ID for account ACCOUNT_ID, with each time a pair composed of the user and the views that he has access to.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get access.
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func200GetPermissionsForBankAccount(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<PermissionsJSON>;
    /**
     * <p>Get social media handles for a customer.</p><p>Authentication is Mandatory</p>
     * @summary Get social media handles for a customer
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200GetSocialMediaHandles(CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SocialMediasJSON>;
    /**
     * <p>Get Transaction Types for the bank specified by BANK_ID:</p><p>Lists the possible Transaction Types available at the bank (as opposed to Transaction Request Types which are the possible ways Transactions can be created by this API Server).</p><ul>  <li>id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.</li>  <li>bank_id : The bank that supports this TransactionType</li>  <li>short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here</li>  <li>summary : A succinct summary</li>  <li>description : A longer description</li>  <li>charge : The charge to the customer for each one of these</li></ul><p>Authentication is Optional</p>
     * @summary Get Transaction Types offered by the bank
     * @param BANK_ID The bank id
     */
    func200GetTransactionTypes(BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionTypesJsonV200>;
    /**
     * <p>Returns the list of private (non-public) accounts at BANK_ID that the user has access to. For each account the API returns the ID and the available views.</p><p>If you want to see more information on the Views, use the Account Detail call. If you want less information about the account, use the /my accounts call</p><p>Authentication is Mandatory</p>
     * @summary Get private accounts at one bank (Authenticated access).
     * @param BANK_ID The bank id
     */
    func200PrivateAccountsAtOneBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Get public accounts at all banks (Anonymous access). Returns accounts that contain at least one public view (a view where is_public is true) For each account the API returns the ID and the available views.</p><p>Authentication is Optional</p>
     * @summary Get Public Accounts at all Banks.
     */
    func200PublicAccountsAllBanks(extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Returns a list of the public accounts (Anonymous access) at BANK_ID. For each account the API returns the ID and the available views.</p><p>Authentication via OAuth is not required.</p>
     * @summary Get Accounts at Bank (Public)
     * @param BANK_ID The bank id
     */
    func200PublicAccountsAtOneBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * Add Entitlement for a User.
     * &lt;p&gt;Create Entitlement. Grant Role to User.&lt;/p&gt;&lt;p&gt;Entitlements are used to grant System or Bank level roles to Users. (For Account level privileges, see Views)&lt;/p&gt;&lt;p&gt;For a System level Role (.e.g CanGetAnyUser), set bank_id to an empty string i.e. \&quot;bank_id\&quot;:\&quot;\&quot;&lt;/p&gt;&lt;p&gt;For a Bank level Role (e.g. CanCreateAccount), set bank_id to a valid value e.g. \&quot;bank_id\&quot;:\&quot;my-bank-id\&quot;&lt;/p&gt;&lt;p&gt;Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.&lt;/p&gt;
     * @param body BANK_BODY
     * @param USER_ID The user id
     */
    func200AddEntitlementWithHttpInfo(body: CreateEntitlementJSON, USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Check
     * &lt;p&gt;Add a KYC check for the customer specified by CUSTOMER_ID. KYC Checks store details of checks on a customer made by the KYC team, their comments and a satisfied status.&lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_CHECK_ID The kyc check id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycCheckWithHttpInfo(body: PostKycCheckJSON, KYC_CHECK_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Document.
     * &lt;p&gt;Add a KYC document for the customer specified by CUSTOMER_ID. KYC Documents contain the document type (e.g. passport), place of issue, expiry etc. &lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_DOCUMENT_ID The kyc document id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycDocumentWithHttpInfo(body: PostKycDocumentJSON, KYC_DOCUMENT_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Media.
     * &lt;p&gt;Add some KYC media for the customer specified by CUSTOMER_ID. KYC Media resources relate to KYC Documents and KYC Checks and contain media urls for scans of passports, utility bills etc.&lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_MEDIA_ID The kyc media id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycMediaWithHttpInfo(body: PostKycMediaJSON, KYC_MEDIA_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Status
     * &lt;p&gt;Add a kyc_status for the customer specified by CUSTOMER_ID. KYC Status is a timeline of the KYC status of the customer&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddKycStatusWithHttpInfo(body: PostKycStatusJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Social Media Handle
     * &lt;p&gt;Add a social media handle for the customer specified by CUSTOMER_ID.&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200AddSocialMediaHandleWithHttpInfo(body: SocialMediaJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Accounts at one Bank (Public and Private).
     * &lt;p&gt;Get accounts at one bank that the user has access to (Authenticated + Anonymous access). Returns the list of accounts at BANK_ID that the user has access to. For each account the API returns the account ID and the available views.&lt;/p&gt;&lt;p&gt;If the user is not authenticated, the list will contain only the accounts providing public views. Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func200AllAccountsAtOneBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Meeting (video conference/call)
     * &lt;p&gt;Create Meeting: Initiate a video conference/call with the bank.&lt;/p&gt;&lt;p&gt;The Meetings resource contains meta data about video/other conference sessions, not the video/audio/chat itself.&lt;/p&gt;&lt;p&gt;The actual conferencing is handled by external providers. Currently OBP supports tokbox video conferences (WIP).&lt;/p&gt;&lt;p&gt;This is not a recomendation of tokbox per se.&lt;/p&gt;&lt;p&gt;provider_id determines the provider of the meeting / video chat service. MUST be url friendly (no spaces).&lt;/p&gt;&lt;p&gt;purpose_id explains the purpose of the chat. onboarding | mortgage | complaint etc. MUST be url friendly (no spaces).&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt;. Currently staff_user_id is not set. Further calls will be needed to correctly set this.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func200CreateMeetingWithHttpInfo(body: CreateMeetingJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create User.
     * &lt;p&gt;Creates OBP user.  No authorisation (currently) required.&lt;/p&gt;&lt;p&gt;Mimics current webform to Register.&lt;/p&gt;&lt;p&gt;Requires username(email) and password.&lt;/p&gt;&lt;p&gt;Returns 409 error if username not unique.&lt;/p&gt;&lt;p&gt;May require validation of email address.&lt;/p&gt;
     * @param body BANK_BODY
     */
    func200CreateUserWithHttpInfo(body: CreateUserJson, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create User Customer Link.
     * &lt;p&gt;Link a User to a Customer&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;CanCreateUserCustomerLink OR CanCreateUserCustomerLinkAtAnyBank entitlements are required.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func200CreateUserCustomerLinksWithHttpInfo(body: CreateUserCustomerLinkJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Entitlement
     * &lt;p&gt;Delete Entitlement specified by ENTITLEMENT_ID for an user specified by USER_ID&lt;/p&gt;&lt;p&gt;Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.&lt;/p&gt;
     * @param ENTITLEMENT_ID The entitblement id
     * @param USER_ID The user id
     */
    func200DeleteEntitlementWithHttpInfo(ENTITLEMENT_ID: string, USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get all Entitlements
     * &lt;p&gt;Login is required.&lt;/p&gt;
     */
    func200GetAllEntitlementsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get User (Current)
     * &lt;p&gt;Get the logged in user&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     */
    func200GetCurrentUserWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Entitlements specified by USER_ID
     * &lt;p&gt;Login is required.&lt;/p&gt;
     * @param USER_ID The user id
     */
    func200GetEntitlementsWithHttpInfo(USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get KYC Checks for current Customer
     * &lt;p&gt;Get KYC checks for the logged in customer Messages sent to the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycChecksWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get KYC Documents for Customer
     * &lt;p&gt;Get KYC (know your customer) documents for a customer Get a list of documents that affirm the identity of the customer Passport, driving licence etc. Authentication is Optional&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycDocumentsWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get KYC Media for a customer
     * &lt;p&gt;Get KYC media (scans, pictures, videos) that affirms the identity of the customer.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycMediaWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get the KYC statuses for a customer
     * &lt;p&gt;Get the KYC statuses for a customer over time&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    func200GetKycStatusesWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Meeting
     * &lt;p&gt;Get Meeting specified by BANK_ID / MEETING_ID Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.&lt;/p&gt;&lt;p&gt;The actual conference/chats are handled by external services.&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt; and will require further authorisation in the future.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func200GetMeetingWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Meetings
     * &lt;p&gt;Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.&lt;/p&gt;&lt;p&gt;The actual conference/chats are handled by external services.&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt; and will require further authorisation in the future.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func200GetMeetingsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get access for specific user.
     * &lt;p&gt;Returns the list of the views at BANK_ID for account ACCOUNT_ID that a USER_ID at their provider PROVIDER_ID has access to. All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func200GetPermissionForUserForBankAccountWithHttpInfo(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get access.
     * &lt;p&gt;Returns the list of the permissions at BANK_ID for account ACCOUNT_ID, with each time a pair composed of the user and the views that he has access to.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func200GetPermissionsForBankAccountWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get social media handles for a customer
     * &lt;p&gt;Get social media handles for a customer.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    func200GetSocialMediaHandlesWithHttpInfo(CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction Types offered by the bank
     * &lt;p&gt;Get Transaction Types for the bank specified by BANK_ID:&lt;/p&gt;&lt;p&gt;Lists the possible Transaction Types available at the bank (as opposed to Transaction Request Types which are the possible ways Transactions can be created by this API Server).&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.&lt;/li&gt;  &lt;li&gt;bank_id : The bank that supports this TransactionType&lt;/li&gt;  &lt;li&gt;short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here&lt;/li&gt;  &lt;li&gt;summary : A succinct summary&lt;/li&gt;  &lt;li&gt;description : A longer description&lt;/li&gt;  &lt;li&gt;charge : The charge to the customer for each one of these&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func200GetTransactionTypesWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get private accounts at one bank (Authenticated access).
     * &lt;p&gt;Returns the list of private (non-public) accounts at BANK_ID that the user has access to. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;If you want to see more information on the Views, use the Account Detail call. If you want less information about the account, use the /my accounts call&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func200PrivateAccountsAtOneBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Public Accounts at all Banks.
     * &lt;p&gt;Get public accounts at all banks (Anonymous access). Returns accounts that contain at least one public view (a view where is_public is true) For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     */
    func200PublicAccountsAllBanksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Accounts at Bank (Public)
     * &lt;p&gt;Returns a list of the public accounts (Anonymous access) at BANK_ID. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is not required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func200PublicAccountsAtOneBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}
