import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { APIInfoJSON } from '../model/aPIInfoJSON';
import { AliasJSON } from '../model/aliasJSON';
import { BankJSON } from '../model/bankJSON';
import { BanksJSON } from '../model/banksJSON';
import { CorporateLocationJSON } from '../model/corporateLocationJSON';
import { ImageUrlJSON } from '../model/imageUrlJSON';
import { MoreInfoJSON } from '../model/moreInfoJSON';
import { OpenCorporateUrlJSON } from '../model/openCorporateUrlJSON';
import { OtherAccountJSON } from '../model/otherAccountJSON';
import { OtherAccountMetadataJSON } from '../model/otherAccountMetadataJSON';
import { OtherAccountsJSON } from '../model/otherAccountsJSON';
import { PhysicalLocationJSON } from '../model/physicalLocationJSON';
import { PostTransactionCommentJSON } from '../model/postTransactionCommentJSON';
import { PostTransactionImageJSON } from '../model/postTransactionImageJSON';
import { PostTransactionTagJSON } from '../model/postTransactionTagJSON';
import { PostTransactionWhereJSON } from '../model/postTransactionWhereJSON';
import { SuccessMessage } from '../model/successMessage';
import { TransactionCommentJSON } from '../model/transactionCommentJSON';
import { TransactionCommentsJSON } from '../model/transactionCommentsJSON';
import { TransactionImageJSON } from '../model/transactionImageJSON';
import { TransactionImagesJSON } from '../model/transactionImagesJSON';
import { TransactionJSON } from '../model/transactionJSON';
import { TransactionNarrativeJSON } from '../model/transactionNarrativeJSON';
import { TransactionTagJSON } from '../model/transactionTagJSON';
import { TransactionWhereJSON } from '../model/transactionWhereJSON';
import { UpdateAccountJSON } from '../model/updateAccountJSON';
import { UrlJSON } from '../model/urlJSON';
import { ViewIdsJson } from '../model/viewIdsJson';
import { ViewJSONV121 } from '../model/viewJSONV121';
import { ViewsJSONV121 } from '../model/viewsJSONV121';
import { Configuration } from '../configuration';
export declare class Func_1_2_1Service {
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
     * <p>Posts a comment about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>${authenticationRequiredMessage(false)}</p><p>Authentication is required since the comment is linked with the user.</p>
     * @summary Add comment.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCommentForViewOnTransaction(body: PostTransactionCommentJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionCommentJSON>;
    /**
     * <p>Add the geolocation of the counterparty's registered address</p>
     * @summary Add Corporate Location to Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyCorporateLocation(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add a url that points to the logo of the counterparty</p>
     * @summary Add image url to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyImageUrl(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add a description of the counter party from the perpestive of the account e.g. My dentist.</p>
     * @summary Add Counterparty More Info
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyMoreInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add open corporates url to other bank account.</p>
     * @summary Add Open Corporates URL to Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyOpenCorporatesUrl(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Add geocoordinates of the counterparty's main location</p>
     * @summary Add physical location to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyPhysicalLocation(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Creates the public alias for the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p><p>Note: Public aliases are automatically generated for new 'other accounts / counterparties', so this call should only be used if the public alias was deleted.</p><p>The VIEW_ID parameter should be a view the caller is permitted to access to and that has permission to create public aliases.</p>
     * @summary Add public alias to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyPublicAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>A url which represents the counterparty (home page url etc.)</p>
     * @summary Add url to other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyUrl(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Posts an image about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>Authentication is Mandatory</p><p>The image is linked with the user.</p>
     * @summary Add an image.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddImageForViewOnTransaction(body: PostTransactionImageJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionImageJSON>;
    /**
     * <p>Creates a private alias for the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Create Other Account Private Alias
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddOtherAccountPrivateAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Grants the user USER_ID at their provider PROVIDER_ID access to a list of views at BANK_ID for account ACCOUNT_ID.</p><p>All url parameters must be <a href=\"http://en.wikipedia.org/wiki/Percent-encoding\">%-encoded</a>, which is often especially relevant for USER_ID and PROVIDER_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Grant User access to a list of views.
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddPermissionForUserForBankAccountForMultipleViews(body: ViewIdsJson, PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewsJSONV121>;
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
    func121AddPermissionForUserForBankAccountForOneView(body: any, PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewJSONV121>;
    /**
     * <p>Posts a tag about a transaction TRANSACTION_ID on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> VIEW_ID.</p><p>Authentication is Mandatory</p><p>Authentication is required as the tag is linked with the user.</p>
     * @summary Add a tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddTagForViewOnTransaction(body: PostTransactionTagJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionTagJSON>;
    /**
     * <p>Creates a description of the transaction TRANSACTION_ID.</p><p>Note: Unlike other items of metadata, there is only one \"narrative\" per transaction accross all views. If you set narrative via a view e.g. view-x it will be seen via view-y (as long as view-y has permission to see the narrative).</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Add narrative.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddTransactionNarrative(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Creates a \"where\" Geo tag on a transaction TRANSACTION_ID in a <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The geo tag is linked with the user.</p>
     * @summary Add where tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddWhereTagForViewOnTransaction(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Get the bank specified by BANK_ID Returns information about a single bank specified by BANK_ID including:</p><ul>  <li>Short and full name of bank</li>  <li>Logo URL</li>  <li>Website</li></ul>
     * @summary Get Bank
     * @param BANK_ID The bank id
     */
    func121BankById(BANK_ID: string, extraHttpRequestParams?: any): Observable<BankJSON>;
    /**
     * <p>Delete the comment COMMENT_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the comment.</p>
     * @summary Delete comment.
     * @param COMMENT_ID The comment id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCommentForViewOnTransaction(COMMENT_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete corporate location of other bank account. Delete the geolocation of the counterparty's registered address</p>
     * @summary Delete Counterparty Corporate Location.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyCorporateLocation(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete image url of other bank account.</p>
     * @summary Delete Counterparty Image URL
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyImageUrl(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     * @summary Delete more info of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyMoreInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete open corporate url of other bank account.</p>
     * @summary Delete Counterparty Open Corporates URL
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyOpenCorporatesUrl(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Delete physical location of other bank account.</p>
     * @summary Delete Counterparty Physical Location.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyPhysicalLocation(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the private alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Delete Counterparty Private Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyPrivateAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the public alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Delete Counterparty Public Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyPublicAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     *
     * @summary Delete url of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyUrl(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the image IMAGE_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the image.</p>
     * @summary Delete an image
     * @param IMAGE_ID The image id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteImageForViewOnTransaction(IMAGE_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the tag TAG_ID about the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the tag.</p>
     * @summary Delete a tag.
     * @param TAG_ID The tag id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteTagForViewOnTransaction(TAG_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the description of the transaction TRANSACTION_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Delete narrative.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteTransactionNarrative(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the view specified by VIEW_ID on the bank account specified by ACCOUNT_ID at bank BANK_ID.</p>
     * @summary Delete View
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteViewForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Deletes the where tag of the transaction TRANSACTION_ID made on <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The user must either have owner privileges for this account, or must be the user that posted the geo tag.</p>
     * @summary Delete where tag.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteWhereTagForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Get banks on this API instance Returns a list of banks supported on this server:</p><ul>  <li>ID used as parameter in URLs</li>  <li>Short and full name of bank</li>  <li>Logo URL</li>  <li>Website</li></ul>
     * @summary Get Banks
     */
    func121GetBanks(extraHttpRequestParams?: any): Observable<BanksJSON>;
    /**
     * <p>Returns the transaction TRANSACTION_ID comments made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get comments.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetCommentsForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionCommentsJSON>;
    /**
     * <p>Returns the public alias of the other account OTHER_ACCOUNT_ID. Authentication is Optional OAuth authentication is required if the view is not public.</p>
     * @summary Get public alias of other bank account.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetCounterpartyPublicAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<AliasJSON>;
    /**
     * <p>Returns the transaction TRANSACTION_ID images made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get images.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetImagesForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionImagesJSON>;
    /**
     * <p>Returns data about the Other Account that has shared at least one transaction with ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Other Account by Id.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountByIdForBankAccount(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountJSON>;
    /**
     * <p>Get other account of a transaction. Returns details of the other party involved in the transaction, moderated by the <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get Other Account of Transaction
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountForTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountJSON>;
    /**
     * <p>Get metadata of one other account. Returns only the metadata about one other bank account (OTHER_ACCOUNT_ID) that had shared at least one transaction with ACCOUNT_ID at BANK_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get Other Account Metadata.
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountMetadata(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountMetadataJSON>;
    /**
     * <p>Returns the private alias of the other account OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Other Account Private Alias
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountPrivateAlias(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<AliasJSON>;
    /**
     * <p>Returns data about all the other accounts that have shared at least one transaction with the ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view VIEW_ID is not public.</p>
     * @summary Get Other Accounts of one Account.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<OtherAccountsJSON>;
    /**
     * <p>Returns the transaction TRANSACTION_ID tags made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID).  Authentication via OAuth is required if the view is not public.</p>
     * @summary Get tags.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetTagsForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionTagJSON>;
    /**
     * <p>Returns one transaction specified by TRANSACTION_ID of the account ACCOUNT_ID and <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view (VIEW_ID).</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Get Transaction by Id.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetTransactionByIdForBankAccount(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionJSON>;
    /**
     * <p>Returns the account owner description of the transaction <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get narrative.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetTransactionNarrative(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionNarrativeJSON>;
    /**
     * <p>Returns the \"where\" Geo tag added to the transaction TRANSACTION_ID made on a <a href=\"#1_2_1-getViewsForBankAccount\">view</a> (VIEW_ID). It represents the location where the transaction has been initiated.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Get where tag.
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetWhereTagForViewOnTransaction(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionWhereJSON>;
    /**
     * <p>Revokes the user USER_ID at their provider PROVIDER_ID access to all the views at BANK_ID for account ACCOUNT_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Revoke access to all Views on Account
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121RemovePermissionForUserForBankAccountForAllViews(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Revokes the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID.</p><p>Revoking a user access to a public view will return an error message.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Revoke access to one View.
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121RemovePermissionForUserForBankAccountForOneView(PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * <p>Returns information about:</p><ul>  <li>API version</li>  <li>Hosted by information</li>  <li>Git Commit</li></ul>
     * @summary The root of the API
     */
    func121Root(extraHttpRequestParams?: any): Observable<APIInfoJSON>;
    /**
     * <p>Update the label for the account. The label is how the account is known to the account owner e.g. 'My savings account' </p>
     * @summary Update Account Label.
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateAccountLabel(body: UpdateAccountJSON, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update the geolocation of the counterparty's registered address</p>
     * @summary Update Counterparty Corporate Location
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyCorporateLocation(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update the url that points to the logo of the counterparty</p>
     * @summary Update Counterparty Image Url
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyImageUrl(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update the more info description of the counter party from the perpestive of the account e.g. My dentist.</p>
     * @summary Update Counterparty More Info
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyMoreInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update open corporate url of other bank account.</p>
     * @summary Update Open Corporates Url of Counterparty
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyOpenCorporatesUrl(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update geocoordinates of the counterparty's main location</p>
     * @summary Update Counterparty Physical Location
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyPhysicalLocation(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the private alias of the counterparty (AKA other account) OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Update Counterparty Private Alias
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyPrivateAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the public alias of the other account / counterparty OTHER_ACCOUNT_ID.</p><p>Authentication is Optional Authentication is required if the view is not public.</p>
     * @summary Update public alias of other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyPublicAlias(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>A url which represents the counterparty (home page url etc.)</p>
     * @summary Update url of other bank account.
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyUrl(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the description of the transaction TRANSACTION_ID.</p><p>Authentication via OAuth is required if the view is not public.</p>
     * @summary Update narrative.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateTransactionNarrative(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Updates the \"where\" Geo tag on a transaction TRANSACTION_ID in a <a href=\"#1_2_1-getViewsForBankAccount\">view</a>.</p><p>Authentication is Mandatory</p><p>The geo tag is linked with the user.</p>
     * @summary Update where tag.
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateWhereTagForViewOnTransaction(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * Add comment.
     * &lt;p&gt;Posts a comment about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;${authenticationRequiredMessage(false)}&lt;/p&gt;&lt;p&gt;Authentication is required since the comment is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCommentForViewOnTransactionWithHttpInfo(body: PostTransactionCommentJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Corporate Location to Counterparty
     * &lt;p&gt;Add the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyCorporateLocationWithHttpInfo(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add image url to other bank account.
     * &lt;p&gt;Add a url that points to the logo of the counterparty&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyImageUrlWithHttpInfo(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Counterparty More Info
     * &lt;p&gt;Add a description of the counter party from the perpestive of the account e.g. My dentist.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyMoreInfoWithHttpInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add Open Corporates URL to Counterparty
     * &lt;p&gt;Add open corporates url to other bank account.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyOpenCorporatesUrlWithHttpInfo(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add physical location to other bank account.
     * &lt;p&gt;Add geocoordinates of the counterparty&#39;s main location&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyPhysicalLocationWithHttpInfo(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add public alias to other bank account.
     * &lt;p&gt;Creates the public alias for the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;&lt;p&gt;Note: Public aliases are automatically generated for new &#39;other accounts / counterparties&#39;, so this call should only be used if the public alias was deleted.&lt;/p&gt;&lt;p&gt;The VIEW_ID parameter should be a view the caller is permitted to access to and that has permission to create public aliases.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyPublicAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add url to other bank account.
     * &lt;p&gt;A url which represents the counterparty (home page url etc.)&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddCounterpartyUrlWithHttpInfo(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add an image.
     * &lt;p&gt;Posts an image about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The image is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddImageForViewOnTransactionWithHttpInfo(body: PostTransactionImageJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Other Account Private Alias
     * &lt;p&gt;Creates a private alias for the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddOtherAccountPrivateAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Grant User access to a list of views.
     * &lt;p&gt;Grants the user USER_ID at their provider PROVIDER_ID access to a list of views at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;All url parameters must be &lt;a href&#x3D;\&quot;http://en.wikipedia.org/wiki/Percent-encoding\&quot;&gt;%-encoded&lt;/a&gt;, which is often especially relevant for USER_ID and PROVIDER_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param body BANK_BODY
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddPermissionForUserForBankAccountForMultipleViewsWithHttpInfo(body: ViewIdsJson, PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
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
    func121AddPermissionForUserForBankAccountForOneViewWithHttpInfo(body: any, PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add a tag.
     * &lt;p&gt;Posts a tag about a transaction TRANSACTION_ID on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; VIEW_ID.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;Authentication is required as the tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddTagForViewOnTransactionWithHttpInfo(body: PostTransactionTagJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add narrative.
     * &lt;p&gt;Creates a description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Note: Unlike other items of metadata, there is only one \&quot;narrative\&quot; per transaction accross all views. If you set narrative via a view e.g. view-x it will be seen via view-y (as long as view-y has permission to see the narrative).&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddTransactionNarrativeWithHttpInfo(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Add where tag.
     * &lt;p&gt;Creates a \&quot;where\&quot; Geo tag on a transaction TRANSACTION_ID in a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The geo tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121AddWhereTagForViewOnTransactionWithHttpInfo(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank
     * &lt;p&gt;Get the bank specified by BANK_ID Returns information about a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Short and full name of bank&lt;/li&gt;  &lt;li&gt;Logo URL&lt;/li&gt;  &lt;li&gt;Website&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    func121BankByIdWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete comment.
     * &lt;p&gt;Delete the comment COMMENT_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the comment.&lt;/p&gt;
     * @param COMMENT_ID The comment id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCommentForViewOnTransactionWithHttpInfo(COMMENT_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Corporate Location.
     * &lt;p&gt;Delete corporate location of other bank account. Delete the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyCorporateLocationWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Image URL
     * &lt;p&gt;Delete image url of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyImageUrlWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete more info of other bank account.
     *
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyMoreInfoWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Open Corporates URL
     * &lt;p&gt;Delete open corporate url of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyOpenCorporatesUrlWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Physical Location.
     * &lt;p&gt;Delete physical location of other bank account.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyPhysicalLocationWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Private Alias
     * &lt;p&gt;Deletes the private alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyPrivateAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete Counterparty Public Alias
     * &lt;p&gt;Deletes the public alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyPublicAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete url of other bank account.
     *
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteCounterpartyUrlWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete an image
     * &lt;p&gt;Deletes the image IMAGE_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the image.&lt;/p&gt;
     * @param IMAGE_ID The image id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteImageForViewOnTransactionWithHttpInfo(IMAGE_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete a tag.
     * &lt;p&gt;Deletes the tag TAG_ID about the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required. The user must either have owner privileges for this account, or must be the user that posted the tag.&lt;/p&gt;
     * @param TAG_ID The tag id
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteTagForViewOnTransactionWithHttpInfo(TAG_ID: string, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete narrative.
     * &lt;p&gt;Deletes the description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteTransactionNarrativeWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete View
     * &lt;p&gt;Deletes the view specified by VIEW_ID on the bank account specified by ACCOUNT_ID at bank BANK_ID.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteViewForBankAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete where tag.
     * &lt;p&gt;Deletes the where tag of the transaction TRANSACTION_ID made on &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The user must either have owner privileges for this account, or must be the user that posted the geo tag.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121DeleteWhereTagForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Banks
     * &lt;p&gt;Get banks on this API instance Returns a list of banks supported on this server:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;ID used as parameter in URLs&lt;/li&gt;  &lt;li&gt;Short and full name of bank&lt;/li&gt;  &lt;li&gt;Logo URL&lt;/li&gt;  &lt;li&gt;Website&lt;/li&gt;&lt;/ul&gt;
     */
    func121GetBanksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get comments.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID comments made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetCommentsForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get public alias of other bank account.
     * &lt;p&gt;Returns the public alias of the other account OTHER_ACCOUNT_ID. Authentication is Optional OAuth authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetCounterpartyPublicAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get images.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID images made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetImagesForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account by Id.
     * &lt;p&gt;Returns data about the Other Account that has shared at least one transaction with ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountByIdForBankAccountWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account of Transaction
     * &lt;p&gt;Get other account of a transaction. Returns details of the other party involved in the transaction, moderated by the &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountForTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account Metadata.
     * &lt;p&gt;Get metadata of one other account. Returns only the metadata about one other bank account (OTHER_ACCOUNT_ID) that had shared at least one transaction with ACCOUNT_ID at BANK_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountMetadataWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Account Private Alias
     * &lt;p&gt;Returns the private alias of the other account OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountPrivateAliasWithHttpInfo(OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Other Accounts of one Account.
     * &lt;p&gt;Returns data about all the other accounts that have shared at least one transaction with the ACCOUNT_ID at BANK_ID. Authentication is Optional Authentication is required if the view VIEW_ID is not public.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetOtherAccountsForBankAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get tags.
     * &lt;p&gt;Returns the transaction TRANSACTION_ID tags made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID).  Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetTagsForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction by Id.
     * &lt;p&gt;Returns one transaction specified by TRANSACTION_ID of the account ACCOUNT_ID and &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetTransactionByIdForBankAccountWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get narrative.
     * &lt;p&gt;Returns the account owner description of the transaction &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetTransactionNarrativeWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get where tag.
     * &lt;p&gt;Returns the \&quot;where\&quot; Geo tag added to the transaction TRANSACTION_ID made on a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt; (VIEW_ID). It represents the location where the transaction has been initiated.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121GetWhereTagForViewOnTransactionWithHttpInfo(TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Revoke access to all Views on Account
     * &lt;p&gt;Revokes the user USER_ID at their provider PROVIDER_ID access to all the views at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121RemovePermissionForUserForBankAccountForAllViewsWithHttpInfo(PROVIDER_ID: string, USER_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Revoke access to one View.
     * &lt;p&gt;Revokes the user USER_ID at their provider PROVIDER_ID access to the view VIEW_ID at BANK_ID for account ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Revoking a user access to a public view will return an error message.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param PROVIDER_ID The provider id
     * @param USER_ID The user id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121RemovePermissionForUserForBankAccountForOneViewWithHttpInfo(PROVIDER_ID: string, USER_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * The root of the API
     * &lt;p&gt;Returns information about:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;API version&lt;/li&gt;  &lt;li&gt;Hosted by information&lt;/li&gt;  &lt;li&gt;Git Commit&lt;/li&gt;&lt;/ul&gt;
     */
    func121RootWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Account Label.
     * &lt;p&gt;Update the label for the account. The label is how the account is known to the account owner e.g. &#39;My savings account&#39; &lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateAccountLabelWithHttpInfo(body: UpdateAccountJSON, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Corporate Location
     * &lt;p&gt;Update the geolocation of the counterparty&#39;s registered address&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyCorporateLocationWithHttpInfo(body: CorporateLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Image Url
     * &lt;p&gt;Update the url that points to the logo of the counterparty&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyImageUrlWithHttpInfo(body: ImageUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty More Info
     * &lt;p&gt;Update the more info description of the counter party from the perpestive of the account e.g. My dentist.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyMoreInfoWithHttpInfo(body: MoreInfoJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Open Corporates Url of Counterparty
     * &lt;p&gt;Update open corporate url of other bank account.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyOpenCorporatesUrlWithHttpInfo(body: OpenCorporateUrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Physical Location
     * &lt;p&gt;Update geocoordinates of the counterparty&#39;s main location&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyPhysicalLocationWithHttpInfo(body: PhysicalLocationJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Counterparty Private Alias
     * &lt;p&gt;Updates the private alias of the counterparty (AKA other account) OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyPrivateAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update public alias of other bank account.
     * &lt;p&gt;Updates the public alias of the other account / counterparty OTHER_ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is Optional Authentication is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyPublicAliasWithHttpInfo(body: AliasJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update url of other bank account.
     * &lt;p&gt;A url which represents the counterparty (home page url etc.)&lt;/p&gt;
     * @param body BANK_BODY
     * @param OTHER_ACCOUNT_ID The other account id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateCounterpartyUrlWithHttpInfo(body: UrlJSON, OTHER_ACCOUNT_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update narrative.
     * &lt;p&gt;Updates the description of the transaction TRANSACTION_ID.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateTransactionNarrativeWithHttpInfo(body: TransactionNarrativeJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update where tag.
     * &lt;p&gt;Updates the \&quot;where\&quot; Geo tag on a transaction TRANSACTION_ID in a &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;view&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;The geo tag is linked with the user.&lt;/p&gt;
     * @param body BANK_BODY
     * @param TRANSACTION_ID The transaction id
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func121UpdateWhereTagForViewOnTransactionWithHttpInfo(body: PostTransactionWhereJSON, TRANSACTION_ID: string, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}
