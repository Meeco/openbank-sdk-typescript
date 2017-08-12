import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { APIInfoJSON } from '../model/aPIInfoJSON';
import { AddCustomerMessageJson } from '../model/addCustomerMessageJson';
import { AliasJSON } from '../model/aliasJSON';
import { AtmJsonV300 } from '../model/atmJsonV300';
import { AvailableRolesJSON } from '../model/availableRolesJSON';
import { BankJSON } from '../model/bankJSON';
import { BankJSONV220 } from '../model/bankJSONV220';
import { BanksJSON } from '../model/banksJSON';
import { BasicAccountsJSON } from '../model/basicAccountsJSON';
import { BranchJson } from '../model/branchJson';
import { BranchJsonPutV210 } from '../model/branchJsonPutV210';
import { BranchJsonV300 } from '../model/branchJsonV300';
import { BranchesJsonV300 } from '../model/branchesJsonV300';
import { ConfigurationJSON } from '../model/configurationJSON';
import { ConnectorMetricsJson } from '../model/connectorMetricsJson';
import { ConsumerJSON } from '../model/consumerJSON';
import { ConsumerRedirectUrlJSON } from '../model/consumerRedirectUrlJSON';
import { ConsumersJson } from '../model/consumersJson';
import { CoreAccountsJsonV300 } from '../model/coreAccountsJsonV300';
import { CorporateLocationJSON } from '../model/corporateLocationJSON';
import { CounterpartiesJsonV220 } from '../model/counterpartiesJsonV220';
import { CounterpartyJsonV220 } from '../model/counterpartyJsonV220';
import { CreateAccountJSONV220 } from '../model/createAccountJSONV220';
import { CreateEntitlementJSON } from '../model/createEntitlementJSON';
import { CreateMeetingJson } from '../model/createMeetingJson';
import { CreateUserCustomerLinkJson } from '../model/createUserCustomerLinkJson';
import { CreateUserJson } from '../model/createUserJson';
import { CreateViewJson } from '../model/createViewJson';
import { CrmEventsJson } from '../model/crmEventsJson';
import { CustomerJsonV210 } from '../model/customerJsonV210';
import { CustomerMessagesJson } from '../model/customerMessagesJson';
import { EntitlementJSON } from '../model/entitlementJSON';
import { EntitlementJSONs } from '../model/entitlementJSONs';
import { FXRateJsonV220 } from '../model/fXRateJsonV220';
import { ImageUrlJSON } from '../model/imageUrlJSON';
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
import { MessageDocsJson } from '../model/messageDocsJson';
import { MetricsJson } from '../model/metricsJson';
import { ModeratedAccountJSON } from '../model/moderatedAccountJSON';
import { ModeratedCoreAccountJSON } from '../model/moderatedCoreAccountJSON';
import { MoreInfoJSON } from '../model/moreInfoJSON';
import { OpenCorporateUrlJSON } from '../model/openCorporateUrlJSON';
import { OtherAccountJSON } from '../model/otherAccountJSON';
import { OtherAccountMetadataJSON } from '../model/otherAccountMetadataJSON';
import { OtherAccountsJSON } from '../model/otherAccountsJSON';
import { PermissionsJSON } from '../model/permissionsJSON';
import { PhysicalCardJSON } from '../model/physicalCardJSON';
import { PhysicalCardsJSON } from '../model/physicalCardsJSON';
import { PhysicalLocationJSON } from '../model/physicalLocationJSON';
import { PostCounterpartyJSON } from '../model/postCounterpartyJSON';
import { PostCustomerJsonV210 } from '../model/postCustomerJsonV210';
import { PostKycCheckJSON } from '../model/postKycCheckJSON';
import { PostKycDocumentJSON } from '../model/postKycDocumentJSON';
import { PostKycMediaJSON } from '../model/postKycMediaJSON';
import { PostKycStatusJSON } from '../model/postKycStatusJSON';
import { PostPhysicalCardJSON } from '../model/postPhysicalCardJSON';
import { PostTransactionCommentJSON } from '../model/postTransactionCommentJSON';
import { PostTransactionImageJSON } from '../model/postTransactionImageJSON';
import { PostTransactionTagJSON } from '../model/postTransactionTagJSON';
import { PostTransactionWhereJSON } from '../model/postTransactionWhereJSON';
import { ProductJsonV210 } from '../model/productJsonV210';
import { ProductJsonV220 } from '../model/productJsonV220';
import { ProductsJsonV210 } from '../model/productsJsonV210';
import { PutEnabledJSON } from '../model/putEnabledJSON';
import { SocialMediaJSON } from '../model/socialMediaJSON';
import { SocialMediasJSON } from '../model/socialMediasJSON';
import { SuccessMessage } from '../model/successMessage';
import { TransactionCommentJSON } from '../model/transactionCommentJSON';
import { TransactionCommentsJSON } from '../model/transactionCommentsJSON';
import { TransactionImageJSON } from '../model/transactionImageJSON';
import { TransactionImagesJSON } from '../model/transactionImagesJSON';
import { TransactionJSON } from '../model/transactionJSON';
import { TransactionNarrativeJSON } from '../model/transactionNarrativeJSON';
import { TransactionRequestTypesJSON } from '../model/transactionRequestTypesJSON';
import { TransactionRequestTypesJsonV140 } from '../model/transactionRequestTypesJsonV140';
import { TransactionRequestWithChargeJSONs210 } from '../model/transactionRequestWithChargeJSONs210';
import { TransactionTagJSON } from '../model/transactionTagJSON';
import { TransactionType } from '../model/transactionType';
import { TransactionTypeJsonV200 } from '../model/transactionTypeJsonV200';
import { TransactionTypesJsonV200 } from '../model/transactionTypesJsonV200';
import { TransactionWhereJSON } from '../model/transactionWhereJSON';
import { TransactionsJSON } from '../model/transactionsJSON';
import { UpdateAccountJSON } from '../model/updateAccountJSON';
import { UpdateViewJSON } from '../model/updateViewJSON';
import { UrlJSON } from '../model/urlJSON';
import { UserCustomerLinkJson } from '../model/userCustomerLinkJson';
import { UserJSONV200 } from '../model/userJSONV200';
import { UsersJSONV200 } from '../model/usersJSONV200';
import { ViewIdsJson } from '../model/viewIdsJson';
import { ViewJSONV121 } from '../model/viewJSONV121';
import { ViewJsonV300 } from '../model/viewJsonV300';
import { ViewsJSONV121 } from '../model/viewsJSONV121';
import { ViewsJsonV300 } from '../model/viewsJsonV300';
import { Configuration } from '../configuration';
export declare class DefaultService {
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
     * <p>Information returned about an account specified by ACCOUNT_ID as moderated by the view (VIEW_ID):</p><ul>  <li>Number</li>  <li>Owners</li>  <li>Type</li>  <li>Balance</li>  <li>IBAN</li>  <li>Available views (sorted by short_name)</li></ul><p>More details about the data moderation by the view <a href=\"#1_2_1-getViewsForBankAccount\">here</a>.</p><p>PSD2 Context: PSD2 requires customers to have access to their account information via third party applications. This call provides balance and other account information via delegated authenticaiton using OAuth.</p><p>OAuth authentication is required if the 'is_public' field in view (VIEW_ID) is not set to <code>true</code>.</p>
     * @summary Get Account by Id (Full)
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    accountById(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ModeratedAccountJSON>;
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This is can be used to create cards which are stored in the local RDBMS. Authentication is Mandatory</p>
     * @summary Add cards for a bank
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    addCardsForBank(body: PostPhysicalCardJSON, BANK_ID: string, extraHttpRequestParams?: any): Observable<PhysicalCardJSON>;
    /**
     * <p>Posts a comment about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>${authenticationRequiredMessage(false)}</p><p>Authentication is required since the comment is linked with the user.</p>
     * @summary Add comment.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCommentForViewOnTransaction(body: PostTransactionCommentJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionCommentJSON>;
    /**
     * <p>Add the geolocation of the counterparty's registered address</p>
     * @summary Add Corporate Location to Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyCorporateLocation(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add a url that points to the logo of the counterparty</p>
     * @summary Add image url to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyImageUrl(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add a description of the counter party from the perpestive of the account e.g. My dentist.</p>
     * @summary Add Counterparty More Info
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyMoreInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add open corporates url to other bank account.</p>
     * @summary Add Open Corporates URL to Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyOpenCorporatesUrl(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add geocoordinates of the counterparty's main location</p>
     * @summary Add physical location to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyPhysicalLocation(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Creates the public alias for the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p><p>Note: Public aliases are automatically generated for new 'other accounts / counterparties', so this call should only be used if the public alias was deleted.</p><p>The VIEW_ID parameter should be a view the caller is permitted to access to and that has permission to create public aliases.</p>
     * @summary Add public alias to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyPublicAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>A url which represents the counterparty (home page url etc.)</p>
     * @summary Add url to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyUrl(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add a message for the customer specified by CUSTOMER_ID</p>
     * @summary Add Customer Message.
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addCustomerMessage(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Create Entitlement. Grant Role to User.</p><p>Entitlements are used to grant System or Bank level roles to Users. (For Account level privileges, see Views)</p><p>For a System level Role (.e.g CanGetAnyUser), set bank_id to an empty string i.e. \"bank_id\":\"\"</p><p>For a Bank level Role (e.g. CanCreateAccount), set bank_id to a valid value e.g. \"bank_id\":\"my-bank-id\"</p><p>Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.</p>
     * @summary Add Entitlement for a User.
     * @param body BANK_BODY
     * @param USER_ID The user id
     */
    addEntitlement(body: CreateEntitlementJSON, USER_ID: string, extraHttpRequestParams?: any): Observable<EntitlementJSON>;
    /**
     * <p>Posts an image about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>Authentication is Mandatory</p><p>The image is linked with the user.</p>
     * @summary Add an image.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addImageForViewOnTransaction(body: PostTransactionImageJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionImageJSON>;
    /**
     * <p>Add a KYC check for the customer specified by CUSTOMER_ID. KYC Checks store details of checks on a customer made by the KYC team, their comments and a satisfied status.</p>
     * @summary Add KYC Check
     * @param body BANK_BODY
     * @param KYC_CHECK_ID The kyc check id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycCheck(body: PostKycCheckJSON, KYC_CHECK_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycCheckJSON>;
    /**
     * <p>Add a KYC document for the customer specified by CUSTOMER_ID. KYC Documents contain the document type (e.g. passport), place of issue, expiry etc. </p>
     * @summary Add KYC Document.
     * @param body BANK_BODY
     * @param KYC_DOCUMENT_ID The kyc document id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycDocument(body: PostKycDocumentJSON, KYC_DOCUMENT_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycDocumentJSON>;
    /**
     * <p>Add some KYC media for the customer specified by CUSTOMER_ID. KYC Media resources relate to KYC Documents and KYC Checks and contain media urls for scans of passports, utility bills etc.</p>
     * @summary Add KYC Media.
     * @param body BANK_BODY
     * @param KYC_MEDIA_ID The kyc media id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycMedia(body: PostKycMediaJSON, KYC_MEDIA_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycMediaJSON>;
    /**
     * <p>Add a kyc_status for the customer specified by CUSTOMER_ID. KYC Status is a timeline of the KYC status of the customer</p>
     * @summary Add KYC Status
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycStatus(body: PostKycStatusJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<KycStatusJSON>;
    /**
     * <p>Creates a private alias for the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Create Other Account Private Alias
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addOtherAccountPrivateAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Grants the user USER_ID at their provider PROVIDER_ID access to a list of views at BANK_ID for account ACCOUNT_ID.</p><p>All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Grant User access to a list of views.
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addPermissionForUserForBankAccountForMultipleViews(body: ViewIdsJson, PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewsJSONV121>;
    /**
     * <p>Grants the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID. All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p><p>Granting access to a public view will return an error message, as the user already has access.</p>
     * @summary Grant User access to View.
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addPermissionForUserForBankAccountForOneView(body: any, PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewJSONV121>;
    /**
     * <p>Add a social media handle for the customer specified by CUSTOMER_ID.</p>
     * @summary Add Social Media Handle
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addSocialMediaHandle(body: SocialMediaJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Posts a tag about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>Authentication is Mandatory</p><p>Authentication is required as the tag is linked with the user.</p>
     * @summary Add a tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addTagForViewOnTransaction(body: PostTransactionTagJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionTagJSON>;
    /**
     * <p>Creates a description of the transaction TRANSACTION_ID.</p><p>Note: Unlike other items of metadata, there is only one \"narrative\" per transaction accross all views. If you set narrative via a view e.g. view-x it will be seen via view-y (as long as view-y has permission to see the narrative).</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Add narrative.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addTransactionNarrative(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Creates a \"where\" Geo tag on a transaction TRANSACTION_ID in a <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The geo tag is linked with the user.</p>
     * @summary Add where tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addWhereTagForViewOnTransaction(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Get accounts at one bank that the user has access to (Authenticated + Anonymous access). Returns the list of accounts at BANK_ID that the user has access to. For each account the API returns the account ID and the available views.</p><p>If the user is not authenticated, the list will contain only the accounts providing public views. Authentication is Optional</p>
     * @summary Get Accounts at one Bank (Public and Private).
     * @param BANK_ID The bank id
     */
    allAccountsAtOneBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Get the bank specified by BANK_ID Returns information about a single bank specified by BANK_ID including:</p><ul>  <li>Short and full name of bank</li>  <li>Logo URL</li>  <li>Website</li></ul>
     * @summary Get Bank
     * @param BANK_ID The bank id
     */
    bankById(BANK_ID: string, extraHttpRequestParams?: any): Observable<BankJSON>;
    /**
     * <p>Returns information about:</p><ul>  <li>Akka ports</li>  <li>Elastic search ports</li>  <li>Cached function</li></ul>
     * @summary The configuration of the API
     */
    config(extraHttpRequestParams?: any): Observable<ConfigurationJSON>;
    /**
     * <p>Get private accounts at all banks (Authenticated access) Returns the list of accounts containing private views for the user at all banks. For each account the API returns the ID and the available views.</p><p>Authentication is Mandatory</p>
     * @summary Get Accounts at all Banks (Private)
     */
    corePrivateAccountsAllBanks(extraHttpRequestParams?: any): Observable<CoreAccountsJsonV300>;
    /**
     * <p>Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.</p><p>The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.</p><p>If USER_ID is not specified the account will be owned by the logged in User.</p><p>Note: The Amount must be zero.</p>
     * @summary Create Account
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    createAccount(body: CreateAccountJSONV220, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CreateAccountJSONV220>;
    /**
     * <p>Create ATM for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateAtm OR CanCreateAtmAtAnyBank</p>
     * @summary Create ATM
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createAtm(body: AtmJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<AtmJsonV300>;
    /**
     * <p>Create a new bank (Authenticated access). Authentication is Mandatory</p>
     * @summary Create Bank
     * @param body BANK_BODY
     */
    createBank(body: BankJSONV220, extraHttpRequestParams?: any): Observable<BankJSONV220>;
    /**
     * <p>Create Branch for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateBranch entitlements are required OR CanCreateBranchAtAnyBank</p>
     * @summary Create Branch
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createBranch(body: BranchJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchJsonV300>;
    /**
     * <p>Create counterparty.</p><p>Counterparties are created for the account / view They are how the user of the view (e.g. account owner) refers to the other side of the transaction</p><p>name is the human readable name (e.g. Piano teacher, Miss Nipa)</p><p>other_bank_id is an (internal) ID for the bank of the bank of the counterparty (if known)</p><p>other_account_id is an (internal) ID for the bank account of the counterparty (if known)</p><p>other_account_provider is a code that tells the system where that bank is hosted. Will be OBP if its known to the API. Usage of this flag (in API / connectors) is work in progress.</p><p>account_routing_scheme is a code that dictates the nature of the account_routing_address e.g. IBAN</p><p>account_routing_address is an instance of account_routing_scheme that can be used to route payments to external systems. e.g. an IBAN number</p><p>bank_routing_scheme is a code that dictates the nature of the bank_routing_address e.g. \"BIC\",</p><p>bank_routing_address is an instance of bank_routing_scheme</p><p>is_beneficiary must be set to true in order to send payments to this counterparty</p><p>The view specified by VIEW_ID must have the canAddCounterparty permission</p><p>Authentication is Mandatory</p>
     * @summary Create counterparty for an account
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    createCounterparty(body: PostCounterpartyJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CounterpartyJsonV220>;
    /**
     * <p>Add a customer linked to the user specified by user_id The Customer resource stores the customer number, legal name, email, phone number, their date of birth, relationship status, education attained, a url for a profile image, KYC status etc. Dates need to be in the format 2013-01-21T23:08:00Z</p><p>Authentication is Mandatory</p><p>CanCreateCustomer and CanCreateUserCustomerLink OR CanCreateCustomerAtAnyBank and CanCreateUserCustomerLinkAtAnyBank entitlements required.</p>
     * @summary Create Customer.
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createCustomer(body: PostCustomerJsonV210, BANK_ID: string, extraHttpRequestParams?: any): Observable<CustomerJsonV210>;
    /**
     * <p>Create Meeting: Initiate a video conference/call with the bank.</p><p>The Meetings resource contains meta data about video/other conference sessions, not the video/audio/chat itself.</p><p>The actual conferencing is handled by external providers. Currently OBP supports tokbox video conferences (WIP).</p><p>This is not a recomendation of tokbox per se.</p><p>provider_id determines the provider of the meeting / video chat service. MUST be url friendly (no spaces).</p><p>purpose_id explains the purpose of the chat. onboarding | mortgage | complaint etc. MUST be url friendly (no spaces).</p><p>Login is required.</p><p>This call is <strong>experimental</strong>. Currently staff_user_id is not set. Further calls will be needed to correctly set this.</p>
     * @summary Create Meeting (video conference/call)
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createMeeting(body: CreateMeetingJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<MeetingJson>;
    /**
     * <p>Create or Update Product for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank</p>
     * @summary Create Product
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createProduct(body: ProductJsonV220, BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductJsonV220>;
    /**
     * <p>Create Transaction Types for the bank specified by BANK_ID:</p><ul>  <li>id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.</li>  <li>bank_id : The bank that supports this TransactionType</li>  <li>short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here</li>  <li>summary : A succinct summary</li>  <li>description : A longer description</li>  <li>charge : The charge to the customer for each one of these</li></ul><p>Authentication is Mandatory</p>
     * @summary Create Transaction Type offered by the bank
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createTransactionType(body: TransactionTypeJsonV200, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionType>;
    /**
     * <p>Creates OBP user.  No authorisation (currently) required.</p><p>Mimics current webform to Register.</p><p>Requires username(email) and password.</p><p>Returns 409 error if username not unique.</p><p>May require validation of email address.</p>
     * @summary Create User.
     * @param body BANK_BODY
     */
    createUser(body: CreateUserJson, extraHttpRequestParams?: any): Observable<UserJSONV200>;
    /**
     * <p>Link a User to a Customer</p><p>Authentication is Mandatory</p><p>CanCreateUserCustomerLink OR CanCreateUserCustomerLinkAtAnyBank entitlements are required.</p>
     * @summary Create User Customer Link.
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createUserCustomerLinks(body: CreateUserCustomerLinkJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<UserCustomerLinkJson>;
    /**
     * <p>Create a view on bank account</p><p>OAuth authentication is required and the user needs to have access to the owner view.  The 'alias' field in the JSON can take one of three values:</p><ul>  <li><em>public</em>: to use the public alias if there is one specified for the other account.</li>  <li><em>private</em>: to use the public alias if there is one specified for the other account.</li>  <li>  <p><em>''(empty string)</em>: to use no alias; the view shows the real name of the other account.</p></li></ul><p>The 'hide_metadata_if_alias_used' field in the JSON can take boolean values. If it is set to <code>true</code> and there is an alias on the other account then the other accounts' metadata (like more_info, url, image_url, open_corporates_url, etc.) will be hidden. Otherwise the metadata will be shown.</p><p>The 'allowed_actions' field is a list containing the name of the actions allowed on this view, all the actions contained will be set to <code>true</code> on the view creation, the rest will be set to <code>false</code>.</p><p>You should use a leading _ (underscore) for the view name because other view names may become reserved by OBP internally</p>
     * @summary Create View.
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    createViewForBankAccount(body: CreateViewJson, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewJsonV300>;
    /**
     * <p>Delete the comment COMMENT_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the comment.</p>
     * @summary Delete comment.
     * @param COMMENT_ID The comment id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCommentForViewOnTransaction(COMMENT_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete corporate location of other bank account. Delete the geolocation of the counterparty's registered address</p>
     * @summary Delete Counterparty Corporate Location.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyCorporateLocation(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete image url of other bank account.</p>
     * @summary Delete Counterparty Image URL
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyImageUrl(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     * @summary Delete more info of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyMoreInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete open corporate url of other bank account.</p>
     * @summary Delete Counterparty Open Corporates URL
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyOpenCorporatesUrl(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete physical location of other bank account.</p>
     * @summary Delete Counterparty Physical Location.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyPhysicalLocation(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the private alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Delete Counterparty Private Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyPrivateAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the public alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Delete Counterparty Public Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyPublicAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     * @summary Delete url of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyUrl(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete Entitlement specified by ENTITLEMENT_ID for an user specified by USER_ID</p><p>Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.</p>
     * @summary Delete Entitlement
     * @param ENTITLEMENT_ID The entitblement id
     * @param USER_ID The user id
     */
    deleteEntitlement(ENTITLEMENT_ID: string, USER_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the image IMAGE_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the image.</p>
     * @summary Delete an image
     * @param IMAGE_ID The image id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteImageForViewOnTransaction(IMAGE_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the tag TAG_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the tag.</p>
     * @summary Delete a tag.
     * @param TAG_ID The tag id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteTagForViewOnTransaction(TAG_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the description of the transaction TRANSACTION_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Delete narrative.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteTransactionNarrative(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the view specified by VIEW_ID on the bank account specified by ACCOUNT_ID at bank BANK_ID.</p>
     * @summary Delete View
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteViewForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the where tag of the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The user must either have owner privileges for this account, or must be the user that posted the geo tag.</p>
     * @summary Delete where tag.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteWhereTagForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Enable/Disable a Consumer specified by CONSUMER_ID.</p>
     * @summary Enable or Disable Consumers
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    enableDisableConsumers(body: PutEnabledJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<PutEnabledJSON>;
    /**
     * <p>Get a basic Adapter info</p><p>Login is required.</p>
     * @summary Get Info Of Adapter
     * @param BANK_ID The bank id
     */
    getAdapter(BANK_ID: string, extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Login is required.</p>
     * @summary Get all Entitlements
     */
    getAllEntitlements(extraHttpRequestParams?: any): Observable<EntitlementJSONs>;
    /**
     * <p>Returns information about ATM for a single bank specified by BANK_ID and ATM_ID including:</p><ul>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank ATM
     * @param BANK_ID The bank id
     */
    getAtm(BANK_ID: string, extraHttpRequestParams?: any): Observable<AtmJsonV300>;
    /**
     * <p>Returns information about ATMs for a single bank specified by BANK_ID including:</p><ul>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank ATMS
     * @param BANK_ID The bank id
     */
    getAtms(BANK_ID: string, extraHttpRequestParams?: any): Observable<AtmJsonV300>;
    /**
     * <p>Get banks on this API instance Returns a list of banks supported on this server:</p><ul>  <li>ID used as parameter in URLs</li>  <li>Short and full name of bank</li>  <li>Logo URL</li>  <li>Website</li></ul>
     * @summary Get Banks
     */
    getBanks(extraHttpRequestParams?: any): Observable<BanksJSON>;
    /**
     * <p>Returns information about branches for a single bank specified by BANK_ID and BRANCH_ID including:  meta.license.id and eta.license.name fields must not be empty.</p><ul>  <li>Name</li>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank Branch
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    getBranch(BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchJsonV300>;
    /**
     * <p>Returns information about branches for a single bank specified by BANK_ID including:</p><ul>  <li>Name</li>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li>  <li>Structured opening hours</li>  <li>Accessible flag</li>  <li>Branch Type</li>  <li>More Info</li></ul><p>Authentication is Optional</p>
     * @summary Get Branches for a Bank
     * @param BANK_ID The bank id
     */
    getBranches(BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchesJsonV300>;
    /**
     * <p>Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.</p>
     * @summary Get cards for the current user
     */
    getCards(extraHttpRequestParams?: any): Observable<PhysicalCardsJSON>;
    /**
     *
     * @summary Get cards for the specified bank
     * @param BANK_ID The bank id
     */
    getCardsForBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<PhysicalCardsJSON>;
    /**
     * <p>Returns the transaction TRANSACTION_ID comments made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get comments.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCommentsForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionCommentsJSON>;
    /**
     * <p>Get the all metrics</p><p>require $CanGetConnectorMetrics role</p><p>Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics</p><p>Should be able to filter on the following metrics fields</p><p>eg: /management/connector/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1 start_date (defaults to one week before current date): eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date) eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 1000) eg:limit=2000</p><p>4 offset (for pagination: zero index, defaults to 0) eg: offset=10</p><p>eg: /management/connector/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=100&amp;offset=300</p><p>Other filters:</p><p>5 connector_name (if null ignore)</p><p>6 function_name (if null ignore)</p><p>7 correlation_id (if null ignore)</p>
     * @summary Get Connector Metrics
     */
    getConnectorMetrics(extraHttpRequestParams?: any): Observable<ConnectorMetricsJson>;
    /**
     * <p>Get the Consumer specified by CONSUMER_ID.</p>
     * @summary Get Consumer
     * @param CONSUMER_ID new consumer id
     */
    getConsumer(CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<ConsumerJSON>;
    /**
     * <p>Get the all Consumers.</p>
     * @summary Get Consumers
     */
    getConsumers(extraHttpRequestParams?: any): Observable<ConsumersJson>;
    /**
     * <p>Information returned about the account specified by ACCOUNT_ID:</p><ul>  <li>Number</li>  <li>Owners</li>  <li>Type</li>  <li>Balance</li>  <li>IBAN</li></ul><p>This call returns the owner view and requires access to that view.</p><p>OAuth authentication is required</p>
     * @summary Get Account by Id (Core)
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCoreAccountById(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ModeratedCoreAccountJSON>;
    /**
     * <p>Returns transactions list (Core info) of the account specified by ACCOUNT_ID.</p><p>Authentication is required.</p><p>Possible custom headers for pagination:</p><ul>  <li>obp_sort_by=CRITERIA ==&gt; default value: \"completed\" field</li>  <li>obp_sort_direction=ASC/DESC ==&gt; default value: DESC</li>  <li>obp_limit=NUMBER ==&gt; default value: 50</li>  <li>obp_offset=NUMBER ==&gt; default value: 0</li>  <li>obp_from_date=DATE =&gt; default value: date of the oldest transaction registered (format below)</li>  <li>obp_to_date=DATE =&gt; default value: date of the newest transaction registered (format below)</li></ul><p><strong>Date format parameter</strong>: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\" (2014-07-01T00:00:00.000Z) ==&gt; time zone is UTC.</p>
     * @summary Get Transactions for Account (Core)
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCoreTransactionsForBankAccount(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ModeratedCoreAccountJSON>;
    /**
     * <p>Get the counterparties for the account / view.</p><p>Authentication is Mandatory</p>
     * @summary Get Counterparties of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCounterpartiesForAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CounterpartiesJsonV220>;
    /**
     * <p>Returns the public alias of the other account OTHER_ACCOUNT_ID. Authentication is Optional OAuth authentication is required if the view is not public.</p>
     * @summary Get public alias of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCounterpartyPublicAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<AliasJSON>;
    /**
     *
     * @summary Get CRM Events for the logged in user
     * @param BANK_ID The bank id
     */
    getCrmEvents(BANK_ID: string, extraHttpRequestParams?: any): Observable<CrmEventsJson>;
    /**
     * <p>Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE </p>
     * @summary Get Current FxRate
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    getCurrentFxRate(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<FXRateJsonV220>;
    /**
     * <p>Get the logged in user</p><p>Login is required.</p>
     * @summary Get User (Current)
     */
    getCurrentUser(extraHttpRequestParams?: any): Observable<UserJSONV200>;
    /**
     * <p>Information about the currently authenticated user.</p><p>Authentication via OAuth is required.</p>
     * @summary Get customer for logged in user
     * @param BANK_ID The bank id
     */
    getCustomer(BANK_ID: string, extraHttpRequestParams?: any): Observable<CustomerJsonV210>;
    /**
     * <p>Get messages for the logged in customer Messages sent to the currently authenticated user.</p><p>Authentication via OAuth is required.</p>
     * @summary Get Customer Messages (current)
     * @param BANK_ID The bank id
     */
    getCustomerMessages(BANK_ID: string, extraHttpRequestParams?: any): Observable<CustomerMessagesJson>;
    /**
     * <p>Information about the currently authenticated user.</p><p>Authentication via OAuth is required.</p>
     * @summary Get all customers for logged in user
     */
    getCustomers(extraHttpRequestParams?: any): Observable<MetricsJson>;
    /**
     * <p>Login is required.</p>
     * @summary Get Entitlements specified by USER_ID
     * @param USER_ID The user id
     */
    getEntitlements(USER_ID: string, extraHttpRequestParams?: any): Observable<EntitlementJSONs>;
    /**
     * <p>Login is required.</p>
     * @summary Get Entitlements specified by BANK_ID and USER_ID
     * @param USER_ID The user id
     * @param BANK_ID The bank id
     */
    getEntitlementsByBankAndUser(USER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<EntitlementJSONs>;
    /**
     * <p>Returns the transaction TRANSACTION_ID images made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get images.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getImagesForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionImagesJSON>;
    /**
     * <p>Get KYC checks for the logged in customer Messages sent to the currently authenticated user.</p><p>Authentication is Mandatory</p>
     * @summary Get KYC Checks for current Customer
     * @param CUSTOMER_ID The customer id
     */
    getKycChecks(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycChecksJSON>;
    /**
     * <p>Get KYC (know your customer) documents for a customer Get a list of documents that affirm the identity of the customer Passport, driving licence etc. Authentication is Optional</p>
     * @summary Get KYC Documents for Customer
     * @param CUSTOMER_ID The customer id
     */
    getKycDocuments(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycDocumentsJSON>;
    /**
     * <p>Get KYC media (scans, pictures, videos) that affirms the identity of the customer.</p><p>Authentication is Mandatory</p>
     * @summary Get KYC Media for a customer
     * @param CUSTOMER_ID The customer id
     */
    getKycMedia(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycMediasJSON>;
    /**
     * <p>Get the KYC statuses for a customer over time</p><p>Authentication is Mandatory</p>
     * @summary Get the KYC statuses for a customer
     * @param CUSTOMER_ID The customer id
     */
    getKycStatuses(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<KycStatusesJSON>;
    /**
     * <p>Get Meeting specified by BANK_ID / MEETING_ID Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.</p><p>The actual conference/chats are handled by external services.</p><p>Login is required.</p><p>This call is <strong>experimental</strong> and will require further authorisation in the future.</p>
     * @summary Get Meeting
     * @param BANK_ID The bank id
     */
    getMeeting(BANK_ID: string, extraHttpRequestParams?: any): Observable<MeetingJson>;
    /**
     * <p>Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.</p><p>The actual conference/chats are handled by external services.</p><p>Login is required.</p><p>This call is <strong>experimental</strong> and will require further authorisation in the future.</p>
     * @summary Get Meetings
     * @param BANK_ID The bank id
     */
    getMeetings(BANK_ID: string, extraHttpRequestParams?: any): Observable<MeetingsJson>;
    /**
     * <p>These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor=kafka_vMar2017 in your Props</p>
     * @summary Get Message Docs
     */
    getMessageDocs(extraHttpRequestParams?: any): Observable<MessageDocsJson>;
    /**
     * <p>Get the all metrics</p><p>require CanReadMetrics role</p><p>Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/metrics</p><p>Should be able to filter on the following metrics fields</p><p>eg: /management/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1 start_date (defaults to one week before current date): eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date) eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 200) eg:limit=200</p><p>4 offset (for pagination: zero index, defaults to 0) eg: offset=10</p><p>eg: /management/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=10000&amp;offset=0&amp;anon=false&amp;app_name=hognwei&amp;implemented_in_version=v2.1.0&amp;verb=POST&amp;user_id=c7b6cb47-cb96-4441-8801-35b57456753a&amp;user_name=susan.uk.29@example.com&amp;consumer_id=78</p><p>Other filters:</p><p>5 consumer_id (if null ignore)</p><p>6 user_id (if null ignore)</p><p>7 anon (if null ignore) only support two value : true (return where user_id is null.) or false (return where user_id is not null.)</p><p>8 url (if null ignore), note: can not contain '&amp;'. </p><p>9 app_name (if null ignore)</p><p>10 implemented_by_partial_function (if null ignore),</p><p>11 implemented_in_version (if null ignore)</p><p>12 verb (if null ignore)</p>
     * @summary Get Metrics
     */
    getMetrics(extraHttpRequestParams?: any): Observable<MetricsJson>;
    /**
     * <p>Returns data about the Other Account that has shared at least one transaction with ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Other Account by Id.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountByIdForBankAccount(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountJSON>;
    /**
     * <p>Get other account of a transaction. Returns details of the other party involved in the transaction, moderated by the <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get Other Account of Transaction
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountForTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountJSON>;
    /**
     * <p>Get metadata of one other account. Returns only the metadata about one other bank account (OTHER_ACCOUNT_ID) that had shared at least one transaction with ACCOUNT_ID at BANK_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get Other Account Metadata.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountMetadata(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountMetadataJSON>;
    /**
     * <p>Returns the private alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Other Account Private Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountPrivateAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<AliasJSON>;
    /**
     * <p>Returns data about all the other accounts that have shared at least one transaction with the ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view VIEW_ID is not public.</p>
     * @summary Get Other Accounts of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountsJSON>;
    /**
     * <p>Returns the list of the views at BANK_ID for account ACCOUNT_ID that a USER_ID at their provider PROVIDER_ID has access to. All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get access for specific user.
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getPermissionForUserForBankAccount(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewsJSONV121>;
    /**
     * <p>Returns the list of the permissions at BANK_ID for account ACCOUNT_ID, with each time a pair composed of the user and the views that he has access to.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get access.
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getPermissionsForBankAccount(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<PermissionsJSON>;
    /**
     * <p>Returns information about the financial products offered by a bank specified by BANK_ID and PRODUCT_CODE including:</p><ul>  <li>Name</li>  <li>Code</li>  <li>Category</li>  <li>Family</li>  <li>Super Family</li>  <li>More info URL</li>  <li>Description</li>  <li>Terms and Conditions</li>  <li>License the data under this endpoint is released under Authentication is Optional</li></ul>
     * @summary Get Bank Product
     * @param BANK_ID The bank id
     */
    getProduct(BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductJsonV210>;
    /**
     * <p>Returns information about the financial products offered by a bank specified by BANK_ID including:</p><ul>  <li>Name</li>  <li>Code</li>  <li>Category</li>  <li>Family</li>  <li>Super Family</li>  <li>More info URL</li>  <li>Description</li>  <li>Terms and Conditions</li>  <li>License the data under this endpoint is released under Authentication is Optional</li></ul>
     * @summary Get Bank Products
     * @param BANK_ID The bank id
     */
    getProducts(BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductsJsonV210>;
    /**
     * <p>Returns all available roles</p><p>Login is required.</p>
     * @summary Get Roles
     */
    getRoles(extraHttpRequestParams?: any): Observable<AvailableRolesJSON>;
    /**
     * <p>Get social media handles for a customer.</p><p>Authentication is Mandatory</p>
     * @summary Get social media handles for a customer
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    getSocialMediaHandles(CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SocialMediasJSON>;
    /**
     * <p>Returns the transaction TRANSACTION_ID tags made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get tags.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTagsForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionTagJSON>;
    /**
     * <p>Returns one transaction specified by TRANSACTION_ID of the account ACCOUNT_ID and <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view (VIEW_ID).</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Transaction by Id.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionByIdForBankAccount(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionJSON>;
    /**
     * <p>Returns the account owner description of the transaction <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get narrative.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionNarrative(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionNarrativeJSON>;
    /**
     * <p>Returns the Transation Request Types that the account specified by ACCOUNT_ID and view specified by VIEW_ID has access to.</p><p>These are the ways this API Server can create a Transaction via a Transaction Request (as opposed to Transaction Types which include external types too e.g. for Transactions created by core banking etc.)</p><p>A Transaction Request Type internally determines:</p><ul>  <li>the required Transaction Request 'body' i.e. fields that define the 'what' and 'to' of a Transaction Request,</li>  <li>the type of security challenge that may be be raised before the Transaction Request proceeds, and</li>  <li>the threshold of that challenge.</li></ul><p>For instance in a 'SANDBOX_TAN' Transaction Request, for amounts over 1000 currency units, the user must supply a positive integer to complete the Transaction Request and create a Transaction.</p><p>This approach aims to provide only one endpoint for initiating transactions, and one that handles challenges, whilst still allowing flexibility with the payload and internal logic.</p>
     * @summary Get Transaction Request Types for Account
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionRequestTypes(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionRequestTypesJsonV140>;
    /**
     * <p>Get the list of the Transaction Request Types supported by the bank.</p><p>Authentication is Optional</p>
     * @summary Get the Transaction Request Types supported by the bank
     * @param BANK_ID The bank id
     */
    getTransactionRequestTypesSupportedByBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionRequestTypesJSON>;
    /**
     * <p>Returns transaction requests for account specified by ACCOUNT_ID at bank specified by BANK_ID.</p><p>The VIEW_ID specified must be 'owner' and the user must have access to this view.</p><p>Version 2.0.0 now returns charge information.</p><p>Transaction Requests serve to initiate transactions that may or may not proceed. They contain information including:</p><ul>  <li>Transaction Request Id</li>  <li>Type</li>  <li>Status (INITIATED, COMPLETED)</li>  <li>Challenge (in order to confirm the request)</li>  <li>From Bank / Account</li>  <li>Details including Currency, Value, Description and other initiation information specific to each type. (Could potentialy include a list of future transactions.)</li>  <li>Related Transactions</li></ul><p>PSD2 Context: PSD2 requires transparency of charges to the customer. This endpoint provides the charge that would be applied if the Transaction Request proceeds - and a record of that charge there after. The customer can proceed with the Transaction by answering the security challenge.</p>
     * @summary Get Transaction Requests.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionRequests(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionRequestWithChargeJSONs210>;
    /**
     * <p>Get Transaction Types for the bank specified by BANK_ID:</p><p>Lists the possible Transaction Types available at the bank (as opposed to Transaction Request Types which are the possible ways Transactions can be created by this API Server).</p><ul>  <li>id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.</li>  <li>bank_id : The bank that supports this TransactionType</li>  <li>short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here</li>  <li>summary : A succinct summary</li>  <li>description : A longer description</li>  <li>charge : The charge to the customer for each one of these</li></ul><p>Authentication is Optional</p>
     * @summary Get Transaction Types offered by the bank
     * @param BANK_ID The bank id
     */
    getTransactionTypes(BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionTypesJsonV200>;
    /**
     * <p>Returns transactions list of the account specified by ACCOUNT_ID and <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view (VIEW_ID).</p><p>Authentication via OAuth is required if the view is not public.</p><p>Possible custom headers for pagination:</p><ul>  <li>obp_sort_by=CRITERIA ==&gt; default value: \"completed\" field</li>  <li>obp_sort_direction=ASC/DESC ==&gt; default value: DESC</li>  <li>obp_limit=NUMBER ==&gt; default value: 50</li>  <li>obp_offset=NUMBER ==&gt; default value: 0</li>  <li>obp_from_date=DATE =&gt; default value: date of the oldest transaction registered (format below)</li>  <li>obp_to_date=DATE =&gt; default value: date of the newest transaction registered (format below)</li></ul><p><strong>Date format parameter</strong>: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\" (2014-07-01T00:00:00.000Z) ==&gt; time zone is UTC.</p>
     * @summary Get Transactions for Account (Full)
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionsJSON>;
    /**
     * <p>Get users by email address</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get Users by Email Address
     */
    getUser(extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Get user by USER_ID</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get User by USER_ID
     * @param USER_ID The user id
     */
    getUserByUserId(USER_ID: string, extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Get user by USERNAME</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get User by USERNAME
     */
    getUserByUsername(extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Get all users</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get all Users
     */
    getUsers(extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <h1>Views</h1><p>Views in Open Bank Project provide a mechanism for fine grained access control and delegation to Accounts and Transactions. Account holders use the 'owner' view by default. Delegated access is made through other views for example 'accountants', 'share-holders' or 'tagging-application'. Views can be created via the API and each view has a list of entitlements.</p><p>Views on accounts and transactions filter the underlying data to redact certain fields for certain users. For instance the balance on an account may be hidden from the public. The way to know what is possible on a view is determined in the following JSON.</p><p><strong>Data:</strong> When a view moderates a set of data, some fields my contain the value <code>null</code> rather than the original value. This indicates either that the user is not allowed to see the original data or the field is empty.</p><p>There is currently one exception to this rule; the 'holder' field in the JSON contains always a value which is either an alias or the real name - indicated by the 'is_alias' field.</p><p><strong>Action:</strong> When a user performs an action like trying to post a comment (with POST API call), if he is not allowed, the body response will contain an error message.</p><p><strong>Metadata:</strong> Transaction metadata (like images, tags, comments, etc.) will appears <em>ONLY</em> on the view where they have been created e.g. comments posted to the public view only appear on the public view.</p><p>The other account metadata fields (like image_URL, more_info, etc.) are unique through all the views. Example, if a user edits the 'more_info' field in the 'team' view, then the view 'authorities' will show the new value (if it is allowed to do it).</p><h1>All</h1><p><em>Optional</em></p><p>Returns the list of the views created for account ACCOUNT_ID at BANK_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get Views for Account.
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getViewsForBankAccount(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewsJsonV300>;
    /**
     * <p>Returns the \"where\" Geo tag added to the transaction TRANSACTION_ID made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID). It represents the location where the transaction has been initiated.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get where tag.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getWhereTagForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionWhereJSON>;
    /**
     * <p>Returns the list of private (non-public) accounts at BANK_ID that the user has access to. For each account the API returns the ID and the available views.</p><p>If you want to see more information on the Views, use the Account Detail call. If you want less information about the account, use the /my accounts call</p><p>Authentication is Mandatory</p>
     * @summary Get private accounts at one bank (Authenticated access).
     * @param BANK_ID The bank id
     */
    privateAccountsAtOneBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Get public accounts at all banks (Anonymous access). Returns accounts that contain at least one public view (a view where is_public is true) For each account the API returns the ID and the available views.</p><p>Authentication is Optional</p>
     * @summary Get Public Accounts at all Banks.
     */
    publicAccountsAllBanks(extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Returns a list of the public accounts (Anonymous access) at BANK_ID. For each account the API returns the ID and the available views.</p><p>Authentication via OAuth is not required.</p>
     * @summary Get Accounts at Bank (Public)
     * @param BANK_ID The bank id
     */
    publicAccountsAtOneBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<BasicAccountsJSON>;
    /**
     * <p>Revokes the user USER_ID at their provider PROVIDER_ID access to all the views at BANK_ID for account ACCOUNT_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Revoke access to all Views on Account
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    removePermissionForUserForBankAccountForAllViews(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Revokes the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID.</p><p>Revoking a user access to a public view will return an error message.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Revoke access to one View.
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    removePermissionForUserForBankAccountForOneView(PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Returns information about:</p><ul>  <li>API version</li>  <li>Hosted by information</li>  <li>Git Commit</li></ul>
     * @summary The root of the API
     */
    root(extraHttpRequestParams?: any): Observable<APIInfoJSON>;
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This call can be used to create banks, users, accounts and transactions which are stored in the local RDBMS.</p><p>The user needs to have CanCreateSandbox entitlement.</p><p>An example of an import set of data (json) can be found <a href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a> Authentication is Mandatory</p>
     * @summary Create sandbox
     * @param body BANK_BODY
     */
    sandboxDataImport(body: any, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update the label for the account. The label is how the account is known to the account owner e.g. 'My savings account' </p>
     * @summary Update Account Label.
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateAccountLabel(body: UpdateAccountJSON, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update an existing branch for a bank account (Authenticated access). Authentication is Mandatory</p>
     * @summary Update Branch
     * @param body BANK_BODY
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    updateBranch(body: BranchJsonPutV210, BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchJson>;
    /**
     * <p>Update an existing redirectUrl for a Consumer specified by CONSUMER_ID.</p><p>CONSUMER_ID can be obtained after you register the application. </p><p>Or use the endpoint 'Get Consumers' to get it </p>
     * @summary Update Consumer RedirectUrl
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    updateConsumerRedirectUrl(body: ConsumerRedirectUrlJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<ConsumerJSON>;
    /**
     * <p>Update the geolocation of the counterparty's registered address</p>
     * @summary Update Counterparty Corporate Location
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyCorporateLocation(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update the url that points to the logo of the counterparty</p>
     * @summary Update Counterparty Image Url
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyImageUrl(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update the more info description of the counter party from the perpestive of the account e.g. My dentist.</p>
     * @summary Update Counterparty More Info
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyMoreInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update open corporate url of other bank account.</p>
     * @summary Update Open Corporates Url of Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyOpenCorporatesUrl(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update geocoordinates of the counterparty's main location</p>
     * @summary Update Counterparty Physical Location
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyPhysicalLocation(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the private alias of the counterparty (AKA other account) OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Update Counterparty Private Alias
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyPrivateAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the public alias of the other account / counterparty OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Update public alias of other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyPublicAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>A url which represents the counterparty (home page url etc.)</p>
     * @summary Update url of other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyUrl(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the description of the transaction TRANSACTION_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Update narrative.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateTransactionNarrative(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update an existing view on a bank account</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p><p>The json sent is the same as during view creation (above), with one difference: the 'name' field of a view is not editable (it is only set when a view is created)</p>
     * @summary Update View.
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateViewForBankAccount(body: UpdateViewJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewJsonV300>;
    /**
     * <p>Updates the \"where\" Geo tag on a transaction TRANSACTION_ID in a <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The geo tag is linked with the user.</p>
     * @summary Update where tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateWhereTagForViewOnTransaction(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * Get Account by Id (Full)
     * &lt;p&gt;Information returned about an account specified by ACCOUNT_ID as moderated by the view (VIEW_ID):&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Number&lt;/li&gt;  &lt;li&gt;Owners&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Balance&lt;/li&gt;  &lt;li&gt;IBAN&lt;/li&gt;  &lt;li&gt;Available views (sorted by short_name)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;More details about the data moderation by the view &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;here&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;PSD2 Context: PSD2 requires customers to have access to their account information via third party applications. This call provides balance and other account information via delegated authenticaiton using OAuth.&lt;/p&gt;&lt;p&gt;OAuth authentication is required if the &#39;is_public&#39; field in view (VIEW_ID) is not set to &lt;code&gt;true&lt;/code&gt;.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    accountByIdWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add cards for a bank
     * &lt;p&gt;Import bulk data into the sandbox (Authenticated access).&lt;/p&gt;&lt;p&gt;This is can be used to create cards which are stored in the local RDBMS. Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    addCardsForBankWithHttpInfo(body: PostPhysicalCardJSON, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add comment.
     * &lt;p&gt;Posts a comment about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;${authenticationRequiredMessage(false)}&lt;/p&gt;&lt;p&gt;Authentication is required since the comment is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCommentForViewOnTransactionWithHttpInfo(body: PostTransactionCommentJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Corporate Location to Counterparty
     * &lt;p&gt;Add the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyCorporateLocationWithHttpInfo(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add image url to other bank account.
     * &lt;p&gt;Add a url that points to the logo of the counterparty&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyImageUrlWithHttpInfo(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Counterparty More Info
     * &lt;p&gt;Add a description of the counter party from the perpestive of the account e.g. My dentist.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyMoreInfoWithHttpInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Open Corporates URL to Counterparty
     * &lt;p&gt;Add open corporates url to other bank account.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyOpenCorporatesUrlWithHttpInfo(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add physical location to other bank account.
     * &lt;p&gt;Add geocoordinates of the counterparty&#39;s main location&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyPhysicalLocationWithHttpInfo(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add public alias to other bank account.
     * &lt;p&gt;Creates the public alias for the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;&lt;p&gt;Note: Public aliases are automatically generated for new &#39;other accounts / counterparties&#39;, so this call should only be used if the public alias was deleted.&lt;/p&gt;&lt;p&gt;The VIEW_ID parameter should be a view the caller is permitted to access to and that has permission to create public aliases.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyPublicAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add url to other bank account.
     * &lt;p&gt;A url which represents the counterparty (home page url etc.)&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addCounterpartyUrlWithHttpInfo(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Customer Message.
     * &lt;p&gt;Add a message for the customer specified by CUSTOMER_ID&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addCustomerMessageWithHttpInfo(body: AddCustomerMessageJson, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Entitlement for a User.
     * &lt;p&gt;Create Entitlement. Grant Role to User.&lt;/p&gt;&lt;p&gt;Entitlements are used to grant System or Bank level roles to Users. (For Account level privileges, see Views)&lt;/p&gt;&lt;p&gt;For a System level Role (.e.g CanGetAnyUser), set bank_id to an empty string i.e. \&quot;bank_id\&quot;:\&quot;\&quot;&lt;/p&gt;&lt;p&gt;For a Bank level Role (e.g. CanCreateAccount), set bank_id to a valid value e.g. \&quot;bank_id\&quot;:\&quot;my-bank-id\&quot;&lt;/p&gt;&lt;p&gt;Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.&lt;/p&gt;
     * @param body BANK_BODY
     * @param USER_ID The user id
     */
    addEntitlementWithHttpInfo(body: CreateEntitlementJSON, USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add an image.
     * &lt;p&gt;Posts an image about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The image is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addImageForViewOnTransactionWithHttpInfo(body: PostTransactionImageJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Check
     * &lt;p&gt;Add a KYC check for the customer specified by CUSTOMER_ID. KYC Checks store details of checks on a customer made by the KYC team, their comments and a satisfied status.&lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_CHECK_ID The kyc check id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycCheckWithHttpInfo(body: PostKycCheckJSON, KYC_CHECK_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Document.
     * &lt;p&gt;Add a KYC document for the customer specified by CUSTOMER_ID. KYC Documents contain the document type (e.g. passport), place of issue, expiry etc. &lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_DOCUMENT_ID The kyc document id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycDocumentWithHttpInfo(body: PostKycDocumentJSON, KYC_DOCUMENT_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Media.
     * &lt;p&gt;Add some KYC media for the customer specified by CUSTOMER_ID. KYC Media resources relate to KYC Documents and KYC Checks and contain media urls for scans of passports, utility bills etc.&lt;/p&gt;
     * @param body BANK_BODY
     * @param KYC_MEDIA_ID The kyc media id
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycMediaWithHttpInfo(body: PostKycMediaJSON, KYC_MEDIA_ID: string, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add KYC Status
     * &lt;p&gt;Add a kyc_status for the customer specified by CUSTOMER_ID. KYC Status is a timeline of the KYC status of the customer&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addKycStatusWithHttpInfo(body: PostKycStatusJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Other Account Private Alias
     * &lt;p&gt;Creates a private alias for the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addOtherAccountPrivateAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Grant User access to a list of views.
     * &lt;p&gt;Grants the user USER_ID at their provider PROVIDER_ID access to a list of views at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addPermissionForUserForBankAccountForMultipleViewsWithHttpInfo(body: ViewIdsJson, PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Grant User access to View.
     * &lt;p&gt;Grants the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID. All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;&lt;p&gt;Granting access to a public view will return an error message, as the user already has access.&lt;/p&gt;
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addPermissionForUserForBankAccountForOneViewWithHttpInfo(body: any, PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Social Media Handle
     * &lt;p&gt;Add a social media handle for the customer specified by CUSTOMER_ID.&lt;/p&gt;
     * @param body BANK_BODY
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    addSocialMediaHandleWithHttpInfo(body: SocialMediaJSON, CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add a tag.
     * &lt;p&gt;Posts a tag about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;Authentication is required as the tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addTagForViewOnTransactionWithHttpInfo(body: PostTransactionTagJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add narrative.
     * &lt;p&gt;Creates a description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Note: Unlike other items of metadata, there is only one \&quot;narrative\&quot; per transaction accross all views. If you set narrative via a view e.g. view-x it will be seen via view-y (as long as view-y has permission to see the narrative).&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addTransactionNarrativeWithHttpInfo(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add where tag.
     * &lt;p&gt;Creates a \&quot;where\&quot; Geo tag on a transaction TRANSACTION_ID in a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The geo tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    addWhereTagForViewOnTransactionWithHttpInfo(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Accounts at one Bank (Public and Private).
     * &lt;p&gt;Get accounts at one bank that the user has access to (Authenticated + Anonymous access). Returns the list of accounts at BANK_ID that the user has access to. For each account the API returns the account ID and the available views.&lt;/p&gt;&lt;p&gt;If the user is not authenticated, the list will contain only the accounts providing public views. Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    allAccountsAtOneBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank
     * &lt;p&gt;Get the bank specified by BANK_ID Returns information about a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Short and full name of bank&lt;/li&gt;  &lt;li&gt;Logo URL&lt;/li&gt;  &lt;li&gt;Website&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    bankByIdWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * The configuration of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Akka ports&lt;/li&gt;  &lt;li&gt;Elastic search ports&lt;/li&gt;  &lt;li&gt;Cached function&lt;/li&gt;&lt;/ul&gt;
     */
    configWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Accounts at all Banks (Private)
     * &lt;p&gt;Get private accounts at all banks (Authenticated access) Returns the list of accounts containing private views for the user at all banks. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     */
    corePrivateAccountsAllBanksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Account
     * &lt;p&gt;Create Account at bank specified by BANK_ID with Id specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;The User can create an Account for themself or an Account for another User if they have CanCreateAccount role.&lt;/p&gt;&lt;p&gt;If USER_ID is not specified the account will be owned by the logged in User.&lt;/p&gt;&lt;p&gt;Note: The Amount must be zero.&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    createAccountWithHttpInfo(body: CreateAccountJSONV220, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create ATM
     * &lt;p&gt;Create ATM for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateAtm OR CanCreateAtmAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createAtmWithHttpInfo(body: AtmJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Bank
     * &lt;p&gt;Create a new bank (Authenticated access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    createBankWithHttpInfo(body: BankJSONV220, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Branch
     * &lt;p&gt;Create Branch for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateBranch entitlements are required OR CanCreateBranchAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createBranchWithHttpInfo(body: BranchJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create counterparty for an account
     * &lt;p&gt;Create counterparty.&lt;/p&gt;&lt;p&gt;Counterparties are created for the account / view They are how the user of the view (e.g. account owner) refers to the other side of the transaction&lt;/p&gt;&lt;p&gt;name is the human readable name (e.g. Piano teacher, Miss Nipa)&lt;/p&gt;&lt;p&gt;other_bank_id is an (internal) ID for the bank of the bank of the counterparty (if known)&lt;/p&gt;&lt;p&gt;other_account_id is an (internal) ID for the bank account of the counterparty (if known)&lt;/p&gt;&lt;p&gt;other_account_provider is a code that tells the system where that bank is hosted. Will be OBP if its known to the API. Usage of this flag (in API / connectors) is work in progress.&lt;/p&gt;&lt;p&gt;account_routing_scheme is a code that dictates the nature of the account_routing_address e.g. IBAN&lt;/p&gt;&lt;p&gt;account_routing_address is an instance of account_routing_scheme that can be used to route payments to external systems. e.g. an IBAN number&lt;/p&gt;&lt;p&gt;bank_routing_scheme is a code that dictates the nature of the bank_routing_address e.g. \&quot;BIC\&quot;,&lt;/p&gt;&lt;p&gt;bank_routing_address is an instance of bank_routing_scheme&lt;/p&gt;&lt;p&gt;is_beneficiary must be set to true in order to send payments to this counterparty&lt;/p&gt;&lt;p&gt;The view specified by VIEW_ID must have the canAddCounterparty permission&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    createCounterpartyWithHttpInfo(body: PostCounterpartyJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Customer.
     * &lt;p&gt;Add a customer linked to the user specified by user_id The Customer resource stores the customer number, legal name, email, phone number, their date of birth, relationship status, education attained, a url for a profile image, KYC status etc. Dates need to be in the format 2013-01-21T23:08:00Z&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;CanCreateCustomer and CanCreateUserCustomerLink OR CanCreateCustomerAtAnyBank and CanCreateUserCustomerLinkAtAnyBank entitlements required.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createCustomerWithHttpInfo(body: PostCustomerJsonV210, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Meeting (video conference/call)
     * &lt;p&gt;Create Meeting: Initiate a video conference/call with the bank.&lt;/p&gt;&lt;p&gt;The Meetings resource contains meta data about video/other conference sessions, not the video/audio/chat itself.&lt;/p&gt;&lt;p&gt;The actual conferencing is handled by external providers. Currently OBP supports tokbox video conferences (WIP).&lt;/p&gt;&lt;p&gt;This is not a recomendation of tokbox per se.&lt;/p&gt;&lt;p&gt;provider_id determines the provider of the meeting / video chat service. MUST be url friendly (no spaces).&lt;/p&gt;&lt;p&gt;purpose_id explains the purpose of the chat. onboarding | mortgage | complaint etc. MUST be url friendly (no spaces).&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt;. Currently staff_user_id is not set. Further calls will be needed to correctly set this.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createMeetingWithHttpInfo(body: CreateMeetingJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Product
     * &lt;p&gt;Create or Update Product for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateProduct OR CanCreateProductAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createProductWithHttpInfo(body: ProductJsonV220, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Transaction Type offered by the bank
     * &lt;p&gt;Create Transaction Types for the bank specified by BANK_ID:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.&lt;/li&gt;  &lt;li&gt;bank_id : The bank that supports this TransactionType&lt;/li&gt;  &lt;li&gt;short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here&lt;/li&gt;  &lt;li&gt;summary : A succinct summary&lt;/li&gt;  &lt;li&gt;description : A longer description&lt;/li&gt;  &lt;li&gt;charge : The charge to the customer for each one of these&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createTransactionTypeWithHttpInfo(body: TransactionTypeJsonV200, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create User.
     * &lt;p&gt;Creates OBP user.  No authorisation (currently) required.&lt;/p&gt;&lt;p&gt;Mimics current webform to Register.&lt;/p&gt;&lt;p&gt;Requires username(email) and password.&lt;/p&gt;&lt;p&gt;Returns 409 error if username not unique.&lt;/p&gt;&lt;p&gt;May require validation of email address.&lt;/p&gt;
     * @param body BANK_BODY
     */
    createUserWithHttpInfo(body: CreateUserJson, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create User Customer Link.
     * &lt;p&gt;Link a User to a Customer&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;CanCreateUserCustomerLink OR CanCreateUserCustomerLinkAtAnyBank entitlements are required.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    createUserCustomerLinksWithHttpInfo(body: CreateUserCustomerLinkJson, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create View.
     * &lt;p&gt;Create a view on bank account&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.  The &#39;alias&#39; field in the JSON can take one of three values:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;&lt;em&gt;public&lt;/em&gt;: to use the public alias if there is one specified for the other account.&lt;/li&gt;  &lt;li&gt;&lt;em&gt;private&lt;/em&gt;: to use the public alias if there is one specified for the other account.&lt;/li&gt;  &lt;li&gt;  &lt;p&gt;&lt;em&gt;&#39;&#39;(empty string)&lt;/em&gt;: to use no alias; the view shows the real name of the other account.&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The &#39;hide_metadata_if_alias_used&#39; field in the JSON can take boolean values. If it is set to &lt;code&gt;true&lt;/code&gt; and there is an alias on the other account then the other accounts&#39; metadata (like more_info, url, image_url, open_corporates_url, etc.) will be hidden. Otherwise the metadata will be shown.&lt;/p&gt;&lt;p&gt;The &#39;allowed_actions&#39; field is a list containing the name of the actions allowed on this view, all the actions contained will be set to &lt;code&gt;true&lt;/code&gt; on the view creation, the rest will be set to &lt;code&gt;false&lt;/code&gt;.&lt;/p&gt;&lt;p&gt;You should use a leading _ (underscore) for the view name because other view names may become reserved by OBP internally&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    createViewForBankAccountWithHttpInfo(body: CreateViewJson, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete comment.
     * &lt;p&gt;Delete the comment COMMENT_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the comment.&lt;/p&gt;
     * @param COMMENT_ID The comment id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCommentForViewOnTransactionWithHttpInfo(COMMENT_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Corporate Location.
     * &lt;p&gt;Delete corporate location of other bank account. Delete the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyCorporateLocationWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Image URL
     * &lt;p&gt;Delete image url of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyImageUrlWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete more info of other bank account.
     *
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyMoreInfoWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Open Corporates URL
     * &lt;p&gt;Delete open corporate url of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyOpenCorporatesUrlWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Physical Location.
     * &lt;p&gt;Delete physical location of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyPhysicalLocationWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Private Alias
     * &lt;p&gt;Deletes the private alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyPrivateAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Public Alias
     * &lt;p&gt;Deletes the public alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyPublicAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete url of other bank account.
     *
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteCounterpartyUrlWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Entitlement
     * &lt;p&gt;Delete Entitlement specified by ENTITLEMENT_ID for an user specified by USER_ID&lt;/p&gt;&lt;p&gt;Authentication is required and the user needs to be a Super Admin. Super Admins are listed in the Props file.&lt;/p&gt;
     * @param ENTITLEMENT_ID The entitblement id
     * @param USER_ID The user id
     */
    deleteEntitlementWithHttpInfo(ENTITLEMENT_ID: string, USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete an image
     * &lt;p&gt;Deletes the image IMAGE_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the image.&lt;/p&gt;
     * @param IMAGE_ID The image id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteImageForViewOnTransactionWithHttpInfo(IMAGE_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete a tag.
     * &lt;p&gt;Deletes the tag TAG_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the tag.&lt;/p&gt;
     * @param TAG_ID The tag id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteTagForViewOnTransactionWithHttpInfo(TAG_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete narrative.
     * &lt;p&gt;Deletes the description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteTransactionNarrativeWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete View
     * &lt;p&gt;Deletes the view specified by VIEW_ID on the bank account specified by ACCOUNT_ID at bank BANK_ID.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteViewForBankAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete where tag.
     * &lt;p&gt;Deletes the where tag of the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The user must either have owner privileges for this account, or must be the user that posted the geo tag.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    deleteWhereTagForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Enable or Disable Consumers
     * &lt;p&gt;Enable/Disable a Consumer specified by CONSUMER_ID.&lt;/p&gt;
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    enableDisableConsumersWithHttpInfo(body: PutEnabledJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Info Of Adapter
     * &lt;p&gt;Get a basic Adapter info&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getAdapterWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get all Entitlements
     * &lt;p&gt;Login is required.&lt;/p&gt;
     */
    getAllEntitlementsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank ATM
     * &lt;p&gt;Returns information about ATM for a single bank specified by BANK_ID and ATM_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getAtmWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank ATMS
     * &lt;p&gt;Returns information about ATMs for a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getAtmsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Banks
     * &lt;p&gt;Get banks on this API instance Returns a list of banks supported on this server:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;ID used as parameter in URLs&lt;/li&gt;  &lt;li&gt;Short and full name of bank&lt;/li&gt;  &lt;li&gt;Logo URL&lt;/li&gt;  &lt;li&gt;Website&lt;/li&gt;&lt;/ul&gt;
     */
    getBanksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank Branch
     * &lt;p&gt;Returns information about branches for a single bank specified by BANK_ID and BRANCH_ID including:  meta.license.id and eta.license.name fields must not be empty.&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    getBranchWithHttpInfo(BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Branches for a Bank
     * &lt;p&gt;Returns information about branches for a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;  &lt;li&gt;Structured opening hours&lt;/li&gt;  &lt;li&gt;Accessible flag&lt;/li&gt;  &lt;li&gt;Branch Type&lt;/li&gt;  &lt;li&gt;More Info&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getBranchesWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get cards for the current user
     * &lt;p&gt;Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.&lt;/p&gt;
     */
    getCardsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get cards for the specified bank
     *
     * @param BANK_ID The bank id
     */
    getCardsForBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get comments.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID comments made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCommentsForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Connector Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require $CanGetConnectorMetrics role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/connector/metrics&lt;/p&gt;&lt;p&gt;Should be able to filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1 start_date (defaults to one week before current date): eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for pagination: defaults to 1000) eg:limit&#x3D;2000&lt;/p&gt;&lt;p&gt;4 offset (for pagination: zero index, defaults to 0) eg: offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg: /management/connector/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;100&amp;amp;offset&#x3D;300&lt;/p&gt;&lt;p&gt;Other filters:&lt;/p&gt;&lt;p&gt;5 connector_name (if null ignore)&lt;/p&gt;&lt;p&gt;6 function_name (if null ignore)&lt;/p&gt;&lt;p&gt;7 correlation_id (if null ignore)&lt;/p&gt;
     */
    getConnectorMetricsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Consumer
     * &lt;p&gt;Get the Consumer specified by CONSUMER_ID.&lt;/p&gt;
     * @param CONSUMER_ID new consumer id
     */
    getConsumerWithHttpInfo(CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Consumers
     * &lt;p&gt;Get the all Consumers.&lt;/p&gt;
     */
    getConsumersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Account by Id (Core)
     * &lt;p&gt;Information returned about the account specified by ACCOUNT_ID:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Number&lt;/li&gt;  &lt;li&gt;Owners&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Balance&lt;/li&gt;  &lt;li&gt;IBAN&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;This call returns the owner view and requires access to that view.&lt;/p&gt;&lt;p&gt;OAuth authentication is required&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCoreAccountByIdWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transactions for Account (Core)
     * &lt;p&gt;Returns transactions list (Core info) of the account specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is required.&lt;/p&gt;&lt;p&gt;Possible custom headers for pagination:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;obp_sort_by&#x3D;CRITERIA &#x3D;&#x3D;&amp;gt; default value: \&quot;completed\&quot; field&lt;/li&gt;  &lt;li&gt;obp_sort_direction&#x3D;ASC/DESC &#x3D;&#x3D;&amp;gt; default value: DESC&lt;/li&gt;  &lt;li&gt;obp_limit&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 50&lt;/li&gt;  &lt;li&gt;obp_offset&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 0&lt;/li&gt;  &lt;li&gt;obp_from_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the oldest transaction registered (format below)&lt;/li&gt;  &lt;li&gt;obp_to_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the newest transaction registered (format below)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Date format parameter&lt;/strong&gt;: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;\&quot; (2014-07-01T00:00:00.000Z) &#x3D;&#x3D;&amp;gt; time zone is UTC.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCoreTransactionsForBankAccountWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Counterparties of one Account.
     * &lt;p&gt;Get the counterparties for the account / view.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCounterpartiesForAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get public alias of other bank account.
     * &lt;p&gt;Returns the public alias of the other account OTHER_ACCOUNT_ID. Authentication is Optional OAuth authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getCounterpartyPublicAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get CRM Events for the logged in user
     *
     * @param BANK_ID The bank id
     */
    getCrmEventsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Current FxRate
     * &lt;p&gt;Get the latest FXRate specified by BANK_ID, FROM_CURRENCY_CODE and TO_CURRENCY_CODE &lt;/p&gt;
     * @param TO_CURRENCY_CODE The to currency code
     * @param FROM_CURRENCY_CODE The from currency code
     * @param BANK_ID The bank id
     */
    getCurrentFxRateWithHttpInfo(TO_CURRENCY_CODE: string, FROM_CURRENCY_CODE: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get User (Current)
     * &lt;p&gt;Get the logged in user&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     */
    getCurrentUserWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get customer for logged in user
     * &lt;p&gt;Information about the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getCustomerWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Customer Messages (current)
     * &lt;p&gt;Get messages for the logged in customer Messages sent to the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getCustomerMessagesWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get all customers for logged in user
     * &lt;p&gt;Information about the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     */
    getCustomersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Entitlements specified by USER_ID
     * &lt;p&gt;Login is required.&lt;/p&gt;
     * @param USER_ID The user id
     */
    getEntitlementsWithHttpInfo(USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Entitlements specified by BANK_ID and USER_ID
     * &lt;p&gt;Login is required.&lt;/p&gt;
     * @param USER_ID The user id
     * @param BANK_ID The bank id
     */
    getEntitlementsByBankAndUserWithHttpInfo(USER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get images.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID images made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getImagesForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get KYC Checks for current Customer
     * &lt;p&gt;Get KYC checks for the logged in customer Messages sent to the currently authenticated user.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    getKycChecksWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get KYC Documents for Customer
     * &lt;p&gt;Get KYC (know your customer) documents for a customer Get a list of documents that affirm the identity of the customer Passport, driving licence etc. Authentication is Optional&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    getKycDocumentsWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get KYC Media for a customer
     * &lt;p&gt;Get KYC media (scans, pictures, videos) that affirms the identity of the customer.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    getKycMediaWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get the KYC statuses for a customer
     * &lt;p&gt;Get the KYC statuses for a customer over time&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     */
    getKycStatusesWithHttpInfo(CUSTOMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Meeting
     * &lt;p&gt;Get Meeting specified by BANK_ID / MEETING_ID Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.&lt;/p&gt;&lt;p&gt;The actual conference/chats are handled by external services.&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt; and will require further authorisation in the future.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getMeetingWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Meetings
     * &lt;p&gt;Meetings contain meta data about, and are used to facilitate, video conferences / chats etc.&lt;/p&gt;&lt;p&gt;The actual conference/chats are handled by external services.&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;&lt;p&gt;This call is &lt;strong&gt;experimental&lt;/strong&gt; and will require further authorisation in the future.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getMeetingsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Message Docs
     * &lt;p&gt;These message docs provide example messages sent by OBP to the (Kafka) message queue for processing by the Core Banking / Payment system Adapter - together with an example expected response and possible error codes.  Integrators can use these messages to build Adapters that provide core banking services to OBP.  Note: To enable Kafka connector and this message format, you must set conenctor&#x3D;kafka_vMar2017 in your Props&lt;/p&gt;
     */
    getMessageDocsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require CanReadMetrics role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.) parameters to GET /management/metrics&lt;/p&gt;&lt;p&gt;Should be able to filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg: /management/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1 start_date (defaults to one week before current date): eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for pagination: defaults to 200) eg:limit&#x3D;200&lt;/p&gt;&lt;p&gt;4 offset (for pagination: zero index, defaults to 0) eg: offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg: /management/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;10000&amp;amp;offset&#x3D;0&amp;amp;anon&#x3D;false&amp;amp;app_name&#x3D;hognwei&amp;amp;implemented_in_version&#x3D;v2.1.0&amp;amp;verb&#x3D;POST&amp;amp;user_id&#x3D;c7b6cb47-cb96-4441-8801-35b57456753a&amp;amp;user_name&#x3D;susan.uk.29@example.com&amp;amp;consumer_id&#x3D;78&lt;/p&gt;&lt;p&gt;Other filters:&lt;/p&gt;&lt;p&gt;5 consumer_id (if null ignore)&lt;/p&gt;&lt;p&gt;6 user_id (if null ignore)&lt;/p&gt;&lt;p&gt;7 anon (if null ignore) only support two value : true (return where user_id is null.) or false (return where user_id is not null.)&lt;/p&gt;&lt;p&gt;8 url (if null ignore), note: can not contain &#39;&amp;amp;&#39;. &lt;/p&gt;&lt;p&gt;9 app_name (if null ignore)&lt;/p&gt;&lt;p&gt;10 implemented_by_partial_function (if null ignore),&lt;/p&gt;&lt;p&gt;11 implemented_in_version (if null ignore)&lt;/p&gt;&lt;p&gt;12 verb (if null ignore)&lt;/p&gt;
     */
    getMetricsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account by Id.
     * &lt;p&gt;Returns data about the Other Account that has shared at least one transaction with ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountByIdForBankAccountWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account of Transaction
     * &lt;p&gt;Get other account of a transaction. Returns details of the other party involved in the transaction, moderated by the &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountForTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account Metadata.
     * &lt;p&gt;Get metadata of one other account. Returns only the metadata about one other bank account (OTHER_ACCOUNT_ID) that had shared at least one transaction with ACCOUNT_ID at BANK_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountMetadataWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account Private Alias
     * &lt;p&gt;Returns the private alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountPrivateAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Accounts of one Account.
     * &lt;p&gt;Returns data about all the other accounts that have shared at least one transaction with the ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view VIEW_ID is not public.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getOtherAccountsForBankAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get access for specific user.
     * &lt;p&gt;Returns the list of the views at BANK_ID for account ACCOUNT_ID that a USER_ID at their provider PROVIDER_ID has access to. All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getPermissionForUserForBankAccountWithHttpInfo(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get access.
     * &lt;p&gt;Returns the list of the permissions at BANK_ID for account ACCOUNT_ID, with each time a pair composed of the user and the views that he has access to.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getPermissionsForBankAccountWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank Product
     * &lt;p&gt;Returns information about the financial products offered by a bank specified by BANK_ID and PRODUCT_CODE including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Code&lt;/li&gt;  &lt;li&gt;Category&lt;/li&gt;  &lt;li&gt;Family&lt;/li&gt;  &lt;li&gt;Super Family&lt;/li&gt;  &lt;li&gt;More info URL&lt;/li&gt;  &lt;li&gt;Description&lt;/li&gt;  &lt;li&gt;Terms and Conditions&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under Authentication is Optional&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    getProductWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank Products
     * &lt;p&gt;Returns information about the financial products offered by a bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Code&lt;/li&gt;  &lt;li&gt;Category&lt;/li&gt;  &lt;li&gt;Family&lt;/li&gt;  &lt;li&gt;Super Family&lt;/li&gt;  &lt;li&gt;More info URL&lt;/li&gt;  &lt;li&gt;Description&lt;/li&gt;  &lt;li&gt;Terms and Conditions&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under Authentication is Optional&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    getProductsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Roles
     * &lt;p&gt;Returns all available roles&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     */
    getRolesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get social media handles for a customer
     * &lt;p&gt;Get social media handles for a customer.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param CUSTOMER_ID The customer id
     * @param BANK_ID The bank id
     */
    getSocialMediaHandlesWithHttpInfo(CUSTOMER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get tags.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID tags made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTagsForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction by Id.
     * &lt;p&gt;Returns one transaction specified by TRANSACTION_ID of the account ACCOUNT_ID and &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionByIdForBankAccountWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get narrative.
     * &lt;p&gt;Returns the account owner description of the transaction &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionNarrativeWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction Request Types for Account
     * &lt;p&gt;Returns the Transation Request Types that the account specified by ACCOUNT_ID and view specified by VIEW_ID has access to.&lt;/p&gt;&lt;p&gt;These are the ways this API Server can create a Transaction via a Transaction Request (as opposed to Transaction Types which include external types too e.g. for Transactions created by core banking etc.)&lt;/p&gt;&lt;p&gt;A Transaction Request Type internally determines:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;the required Transaction Request &#39;body&#39; i.e. fields that define the &#39;what&#39; and &#39;to&#39; of a Transaction Request,&lt;/li&gt;  &lt;li&gt;the type of security challenge that may be be raised before the Transaction Request proceeds, and&lt;/li&gt;  &lt;li&gt;the threshold of that challenge.&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;For instance in a &#39;SANDBOX_TAN&#39; Transaction Request, for amounts over 1000 currency units, the user must supply a positive integer to complete the Transaction Request and create a Transaction.&lt;/p&gt;&lt;p&gt;This approach aims to provide only one endpoint for initiating transactions, and one that handles challenges, whilst still allowing flexibility with the payload and internal logic.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionRequestTypesWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get the Transaction Request Types supported by the bank
     * &lt;p&gt;Get the list of the Transaction Request Types supported by the bank.&lt;/p&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getTransactionRequestTypesSupportedByBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction Requests.
     * &lt;p&gt;Returns transaction requests for account specified by ACCOUNT_ID at bank specified by BANK_ID.&lt;/p&gt;&lt;p&gt;The VIEW_ID specified must be &#39;owner&#39; and the user must have access to this view.&lt;/p&gt;&lt;p&gt;Version 2.0.0 now returns charge information.&lt;/p&gt;&lt;p&gt;Transaction Requests serve to initiate transactions that may or may not proceed. They contain information including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Transaction Request Id&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Status (INITIATED, COMPLETED)&lt;/li&gt;  &lt;li&gt;Challenge (in order to confirm the request)&lt;/li&gt;  &lt;li&gt;From Bank / Account&lt;/li&gt;  &lt;li&gt;Details including Currency, Value, Description and other initiation information specific to each type. (Could potentialy include a list of future transactions.)&lt;/li&gt;  &lt;li&gt;Related Transactions&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;PSD2 Context: PSD2 requires transparency of charges to the customer. This endpoint provides the charge that would be applied if the Transaction Request proceeds - and a record of that charge there after. The customer can proceed with the Transaction by answering the security challenge.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionRequestsWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction Types offered by the bank
     * &lt;p&gt;Get Transaction Types for the bank specified by BANK_ID:&lt;/p&gt;&lt;p&gt;Lists the possible Transaction Types available at the bank (as opposed to Transaction Request Types which are the possible ways Transactions can be created by this API Server).&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;id : Unique transaction type id across the API instance. SHOULD be a UUID. MUST be unique.&lt;/li&gt;  &lt;li&gt;bank_id : The bank that supports this TransactionType&lt;/li&gt;  &lt;li&gt;short_code : A short code (SHOULD have no-spaces) which MUST be unique across the bank. May be stored with Transactions to link here&lt;/li&gt;  &lt;li&gt;summary : A succinct summary&lt;/li&gt;  &lt;li&gt;description : A longer description&lt;/li&gt;  &lt;li&gt;charge : The charge to the customer for each one of these&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    getTransactionTypesWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transactions for Account (Full)
     * &lt;p&gt;Returns transactions list of the account specified by ACCOUNT_ID and &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;&lt;p&gt;Possible custom headers for pagination:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;obp_sort_by&#x3D;CRITERIA &#x3D;&#x3D;&amp;gt; default value: \&quot;completed\&quot; field&lt;/li&gt;  &lt;li&gt;obp_sort_direction&#x3D;ASC/DESC &#x3D;&#x3D;&amp;gt; default value: DESC&lt;/li&gt;  &lt;li&gt;obp_limit&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 50&lt;/li&gt;  &lt;li&gt;obp_offset&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 0&lt;/li&gt;  &lt;li&gt;obp_from_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the oldest transaction registered (format below)&lt;/li&gt;  &lt;li&gt;obp_to_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the newest transaction registered (format below)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Date format parameter&lt;/strong&gt;: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;\&quot; (2014-07-01T00:00:00.000Z) &#x3D;&#x3D;&amp;gt; time zone is UTC.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getTransactionsForBankAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Users by Email Address
     * &lt;p&gt;Get users by email address&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    getUserWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get User by USER_ID
     * &lt;p&gt;Get user by USER_ID&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     * @param USER_ID The user id
     */
    getUserByUserIdWithHttpInfo(USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get User by USERNAME
     * &lt;p&gt;Get user by USERNAME&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    getUserByUsernameWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get all Users
     * &lt;p&gt;Get all users&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    getUsersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Views for Account.
     * &lt;h1&gt;Views&lt;/h1&gt;&lt;p&gt;Views in Open Bank Project provide a mechanism for fine grained access control and delegation to Accounts and Transactions. Account holders use the &#39;owner&#39; view by default. Delegated access is made through other views for example &#39;accountants&#39;, &#39;share-holders&#39; or &#39;tagging-application&#39;. Views can be created via the API and each view has a list of entitlements.&lt;/p&gt;&lt;p&gt;Views on accounts and transactions filter the underlying data to redact certain fields for certain users. For instance the balance on an account may be hidden from the public. The way to know what is possible on a view is determined in the following JSON.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Data:&lt;/strong&gt; When a view moderates a set of data, some fields my contain the value &lt;code&gt;null&lt;/code&gt; rather than the original value. This indicates either that the user is not allowed to see the original data or the field is empty.&lt;/p&gt;&lt;p&gt;There is currently one exception to this rule; the &#39;holder&#39; field in the JSON contains always a value which is either an alias or the real name - indicated by the &#39;is_alias&#39; field.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Action:&lt;/strong&gt; When a user performs an action like trying to post a comment (with POST API call), if he is not allowed, the body response will contain an error message.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Metadata:&lt;/strong&gt; Transaction metadata (like images, tags, comments, etc.) will appears &lt;em&gt;ONLY&lt;/em&gt; on the view where they have been created e.g. comments posted to the public view only appear on the public view.&lt;/p&gt;&lt;p&gt;The other account metadata fields (like image_URL, more_info, etc.) are unique through all the views. Example, if a user edits the &#39;more_info&#39; field in the &#39;team&#39; view, then the view &#39;authorities&#39; will show the new value (if it is allowed to do it).&lt;/p&gt;&lt;h1&gt;All&lt;/h1&gt;&lt;p&gt;&lt;em&gt;Optional&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Returns the list of the views created for account ACCOUNT_ID at BANK_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getViewsForBankAccountWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get where tag.
     * &lt;p&gt;Returns the \&quot;where\&quot; Geo tag added to the transaction TRANSACTION_ID made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID). It represents the location where the transaction has been initiated.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    getWhereTagForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get private accounts at one bank (Authenticated access).
     * &lt;p&gt;Returns the list of private (non-public) accounts at BANK_ID that the user has access to. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;If you want to see more information on the Views, use the Account Detail call. If you want less information about the account, use the /my accounts call&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    privateAccountsAtOneBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Public Accounts at all Banks.
     * &lt;p&gt;Get public accounts at all banks (Anonymous access). Returns accounts that contain at least one public view (a view where is_public is true) For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     */
    publicAccountsAllBanksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Accounts at Bank (Public)
     * &lt;p&gt;Returns a list of the public accounts (Anonymous access) at BANK_ID. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is not required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    publicAccountsAtOneBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Revoke access to all Views on Account
     * &lt;p&gt;Revokes the user USER_ID at their provider PROVIDER_ID access to all the views at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    removePermissionForUserForBankAccountForAllViewsWithHttpInfo(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Revoke access to one View.
     * &lt;p&gt;Revokes the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Revoking a user access to a public view will return an error message.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    removePermissionForUserForBankAccountForOneViewWithHttpInfo(PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * The root of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;API version&lt;/li&gt;  &lt;li&gt;Hosted by information&lt;/li&gt;  &lt;li&gt;Git Commit&lt;/li&gt;&lt;/ul&gt;
     */
    rootWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create sandbox
     * &lt;p&gt;Import bulk data into the sandbox (Authenticated access).&lt;/p&gt;&lt;p&gt;This call can be used to create banks, users, accounts and transactions which are stored in the local RDBMS.&lt;/p&gt;&lt;p&gt;The user needs to have CanCreateSandbox entitlement.&lt;/p&gt;&lt;p&gt;An example of an import set of data (json) can be found &lt;a href&#x3D;\&quot;https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\&quot;&gt;here&lt;/a&gt; Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    sandboxDataImportWithHttpInfo(body: any, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Account Label.
     * &lt;p&gt;Update the label for the account. The label is how the account is known to the account owner e.g. &#39;My savings account&#39; &lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateAccountLabelWithHttpInfo(body: UpdateAccountJSON, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Branch
     * &lt;p&gt;Update an existing branch for a bank account (Authenticated access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    updateBranchWithHttpInfo(body: BranchJsonPutV210, BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Consumer RedirectUrl
     * &lt;p&gt;Update an existing redirectUrl for a Consumer specified by CONSUMER_ID.&lt;/p&gt;&lt;p&gt;CONSUMER_ID can be obtained after you register the application. &lt;/p&gt;&lt;p&gt;Or use the endpoint &#39;Get Consumers&#39; to get it &lt;/p&gt;
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    updateConsumerRedirectUrlWithHttpInfo(body: ConsumerRedirectUrlJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Corporate Location
     * &lt;p&gt;Update the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyCorporateLocationWithHttpInfo(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Image Url
     * &lt;p&gt;Update the url that points to the logo of the counterparty&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyImageUrlWithHttpInfo(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty More Info
     * &lt;p&gt;Update the more info description of the counter party from the perpestive of the account e.g. My dentist.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyMoreInfoWithHttpInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Open Corporates Url of Counterparty
     * &lt;p&gt;Update open corporate url of other bank account.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyOpenCorporatesUrlWithHttpInfo(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Physical Location
     * &lt;p&gt;Update geocoordinates of the counterparty&#39;s main location&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyPhysicalLocationWithHttpInfo(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Private Alias
     * &lt;p&gt;Updates the private alias of the counterparty (AKA other account) OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyPrivateAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update public alias of other bank account.
     * &lt;p&gt;Updates the public alias of the other account / counterparty OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyPublicAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update url of other bank account.
     * &lt;p&gt;A url which represents the counterparty (home page url etc.)&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateCounterpartyUrlWithHttpInfo(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update narrative.
     * &lt;p&gt;Updates the description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateTransactionNarrativeWithHttpInfo(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update View.
     * &lt;p&gt;Update an existing view on a bank account&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;&lt;p&gt;The json sent is the same as during view creation (above), with one difference: the &#39;name&#39; field of a view is not editable (it is only set when a view is created)&lt;/p&gt;
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateViewForBankAccountWithHttpInfo(body: UpdateViewJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update where tag.
     * &lt;p&gt;Updates the \&quot;where\&quot; Geo tag on a transaction TRANSACTION_ID in a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The geo tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    updateWhereTagForViewOnTransactionWithHttpInfo(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}
