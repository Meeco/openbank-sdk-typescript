import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { AtmJsonV300 } from '../model/atmJsonV300';
import { BranchJsonV300 } from '../model/branchJsonV300';
import { BranchesJsonV300 } from '../model/branchesJsonV300';
import { CoreAccountsJsonV300 } from '../model/coreAccountsJsonV300';
import { CreateViewJson } from '../model/createViewJson';
import { ModeratedAccountJSON } from '../model/moderatedAccountJSON';
import { ModeratedCoreAccountJSON } from '../model/moderatedCoreAccountJSON';
import { TransactionsJSON } from '../model/transactionsJSON';
import { UpdateViewJSON } from '../model/updateViewJSON';
import { UsersJSONV200 } from '../model/usersJSONV200';
import { ViewJsonV300 } from '../model/viewJsonV300';
import { ViewsJsonV300 } from '../model/viewsJsonV300';
import { Configuration } from '../configuration';
export declare class Func_3_0_0Service {
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
    func300AccountById(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ModeratedAccountJSON>;
    /**
     * <p>Get private accounts at all banks (Authenticated access) Returns the list of accounts containing private views for the user at all banks. For each account the API returns the ID and the available views.</p><p>Authentication is Mandatory</p>
     * @summary Get Accounts at all Banks (Private)
     */
    func300CorePrivateAccountsAllBanks(extraHttpRequestParams?: any): Observable<CoreAccountsJsonV300>;
    /**
     * <p>Create ATM for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateAtm OR CanCreateAtmAtAnyBank</p>
     * @summary Create ATM
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func300CreateAtm(body: AtmJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<AtmJsonV300>;
    /**
     * <p>Create Branch for the Bank.</p><p>Authentication is Mandatory</p><p>OBP-20006: User is missing one or more roles: CanCreateBranch entitlements are required OR CanCreateBranchAtAnyBank</p>
     * @summary Create Branch
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func300CreateBranch(body: BranchJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchJsonV300>;
    /**
     * <p>Create a view on bank account</p><p>OAuth authentication is required and the user needs to have access to the owner view.  The 'alias' field in the JSON can take one of three values:</p><ul>  <li><em>public</em>: to use the public alias if there is one specified for the other account.</li>  <li><em>private</em>: to use the public alias if there is one specified for the other account.</li>  <li>  <p><em>''(empty string)</em>: to use no alias; the view shows the real name of the other account.</p></li></ul><p>The 'hide_metadata_if_alias_used' field in the JSON can take boolean values. If it is set to <code>true</code> and there is an alias on the other account then the other accounts' metadata (like more_info, url, image_url, open_corporates_url, etc.) will be hidden. Otherwise the metadata will be shown.</p><p>The 'allowed_actions' field is a list containing the name of the actions allowed on this view, all the actions contained will be set to <code>true</code> on the view creation, the rest will be set to <code>false</code>.</p><p>You should use a leading _ (underscore) for the view name because other view names may become reserved by OBP internally</p>
     * @summary Create View.
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300CreateViewForBankAccount(body: CreateViewJson, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewJsonV300>;
    /**
     * <p>Get a basic Adapter info</p><p>Login is required.</p>
     * @summary Get Info Of Adapter
     * @param BANK_ID The bank id
     */
    func300GetAdapter(BANK_ID: string, extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Returns information about ATM for a single bank specified by BANK_ID and ATM_ID including:</p><ul>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank ATM
     * @param BANK_ID The bank id
     */
    func300GetAtm(BANK_ID: string, extraHttpRequestParams?: any): Observable<AtmJsonV300>;
    /**
     * <p>Returns information about ATMs for a single bank specified by BANK_ID including:</p><ul>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank ATMS
     * @param BANK_ID The bank id
     */
    func300GetAtms(BANK_ID: string, extraHttpRequestParams?: any): Observable<AtmJsonV300>;
    /**
     * <p>Returns information about branches for a single bank specified by BANK_ID and BRANCH_ID including:  meta.license.id and eta.license.name fields must not be empty.</p><ul>  <li>Name</li>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li></ul><p>Authentication is Optional</p>
     * @summary Get Bank Branch
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    func300GetBranch(BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchJsonV300>;
    /**
     * <p>Returns information about branches for a single bank specified by BANK_ID including:</p><ul>  <li>Name</li>  <li>Address</li>  <li>Geo Location</li>  <li>License the data under this endpoint is released under</li>  <li>Structured opening hours</li>  <li>Accessible flag</li>  <li>Branch Type</li>  <li>More Info</li></ul><p>Authentication is Optional</p>
     * @summary Get Branches for a Bank
     * @param BANK_ID The bank id
     */
    func300GetBranches(BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchesJsonV300>;
    /**
     * <p>Information returned about the account specified by ACCOUNT_ID:</p><ul>  <li>Number</li>  <li>Owners</li>  <li>Type</li>  <li>Balance</li>  <li>IBAN</li></ul><p>This call returns the owner view and requires access to that view.</p><p>OAuth authentication is required</p>
     * @summary Get Account by Id (Core)
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetCoreAccountById(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ModeratedCoreAccountJSON>;
    /**
     * <p>Returns transactions list (Core info) of the account specified by ACCOUNT_ID.</p><p>Authentication is required.</p><p>Possible custom headers for pagination:</p><ul>  <li>obp_sort_by=CRITERIA ==&gt; default value: \"completed\" field</li>  <li>obp_sort_direction=ASC/DESC ==&gt; default value: DESC</li>  <li>obp_limit=NUMBER ==&gt; default value: 50</li>  <li>obp_offset=NUMBER ==&gt; default value: 0</li>  <li>obp_from_date=DATE =&gt; default value: date of the oldest transaction registered (format below)</li>  <li>obp_to_date=DATE =&gt; default value: date of the newest transaction registered (format below)</li></ul><p><strong>Date format parameter</strong>: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\" (2014-07-01T00:00:00.000Z) ==&gt; time zone is UTC.</p>
     * @summary Get Transactions for Account (Core)
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetCoreTransactionsForBankAccount(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ModeratedCoreAccountJSON>;
    /**
     * <p>Returns transactions list of the account specified by ACCOUNT_ID and <a href=\"#1_2_1-getViewsForBankAccount\">moderated</a> by the view (VIEW_ID).</p><p>Authentication via OAuth is required if the view is not public.</p><p>Possible custom headers for pagination:</p><ul>  <li>obp_sort_by=CRITERIA ==&gt; default value: \"completed\" field</li>  <li>obp_sort_direction=ASC/DESC ==&gt; default value: DESC</li>  <li>obp_limit=NUMBER ==&gt; default value: 50</li>  <li>obp_offset=NUMBER ==&gt; default value: 0</li>  <li>obp_from_date=DATE =&gt; default value: date of the oldest transaction registered (format below)</li>  <li>obp_to_date=DATE =&gt; default value: date of the newest transaction registered (format below)</li></ul><p><strong>Date format parameter</strong>: \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\" (2014-07-01T00:00:00.000Z) ==&gt; time zone is UTC.</p>
     * @summary Get Transactions for Account (Full)
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetTransactionsForBankAccount(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionsJSON>;
    /**
     * <p>Get users by email address</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get Users by Email Address
     */
    func300GetUser(extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Get user by USER_ID</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get User by USER_ID
     * @param USER_ID The user id
     */
    func300GetUserByUserId(USER_ID: string, extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Get user by USERNAME</p><p>Login is required. CanGetAnyUser entitlement is required,</p>
     * @summary Get User by USERNAME
     */
    func300GetUserByUsername(extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <h1>Views</h1><p>Views in Open Bank Project provide a mechanism for fine grained access control and delegation to Accounts and Transactions. Account holders use the 'owner' view by default. Delegated access is made through other views for example 'accountants', 'share-holders' or 'tagging-application'. Views can be created via the API and each view has a list of entitlements.</p><p>Views on accounts and transactions filter the underlying data to redact certain fields for certain users. For instance the balance on an account may be hidden from the public. The way to know what is possible on a view is determined in the following JSON.</p><p><strong>Data:</strong> When a view moderates a set of data, some fields my contain the value <code>null</code> rather than the original value. This indicates either that the user is not allowed to see the original data or the field is empty.</p><p>There is currently one exception to this rule; the 'holder' field in the JSON contains always a value which is either an alias or the real name - indicated by the 'is_alias' field.</p><p><strong>Action:</strong> When a user performs an action like trying to post a comment (with POST API call), if he is not allowed, the body response will contain an error message.</p><p><strong>Metadata:</strong> Transaction metadata (like images, tags, comments, etc.) will appears <em>ONLY</em> on the view where they have been created e.g. comments posted to the public view only appear on the public view.</p><p>The other account metadata fields (like image_URL, more_info, etc.) are unique through all the views. Example, if a user edits the 'more_info' field in the 'team' view, then the view 'authorities' will show the new value (if it is allowed to do it).</p><h1>All</h1><p><em>Optional</em></p><p>Returns the list of the views created for account ACCOUNT_ID at BANK_ID.</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p>
     * @summary Get Views for Account.
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetViewsForBankAccount(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewsJsonV300>;
    /**
     * <p>Update an existing view on a bank account</p><p>OAuth authentication is required and the user needs to have access to the owner view.</p><p>The json sent is the same as during view creation (above), with one difference: the 'name' field of a view is not editable (it is only set when a view is created)</p>
     * @summary Update View.
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300UpdateViewForBankAccount(body: UpdateViewJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<ViewJsonV300>;
    /**
     * Get Account by Id (Full)
     * &lt;p&gt;Information returned about an account specified by ACCOUNT_ID as moderated by the view (VIEW_ID):&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Number&lt;/li&gt;  &lt;li&gt;Owners&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Balance&lt;/li&gt;  &lt;li&gt;IBAN&lt;/li&gt;  &lt;li&gt;Available views (sorted by short_name)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;More details about the data moderation by the view &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;here&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;PSD2 Context: PSD2 requires customers to have access to their account information via third party applications. This call provides balance and other account information via delegated authenticaiton using OAuth.&lt;/p&gt;&lt;p&gt;OAuth authentication is required if the &#39;is_public&#39; field in view (VIEW_ID) is not set to &lt;code&gt;true&lt;/code&gt;.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300AccountByIdWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Accounts at all Banks (Private)
     * &lt;p&gt;Get private accounts at all banks (Authenticated access) Returns the list of accounts containing private views for the user at all banks. For each account the API returns the ID and the available views.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     */
    func300CorePrivateAccountsAllBanksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create ATM
     * &lt;p&gt;Create ATM for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateAtm OR CanCreateAtmAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func300CreateAtmWithHttpInfo(body: AtmJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Branch
     * &lt;p&gt;Create Branch for the Bank.&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;&lt;p&gt;OBP-20006: User is missing one or more roles: CanCreateBranch entitlements are required OR CanCreateBranchAtAnyBank&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func300CreateBranchWithHttpInfo(body: BranchJsonV300, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create View.
     * &lt;p&gt;Create a view on bank account&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.  The &#39;alias&#39; field in the JSON can take one of three values:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;&lt;em&gt;public&lt;/em&gt;: to use the public alias if there is one specified for the other account.&lt;/li&gt;  &lt;li&gt;&lt;em&gt;private&lt;/em&gt;: to use the public alias if there is one specified for the other account.&lt;/li&gt;  &lt;li&gt;  &lt;p&gt;&lt;em&gt;&#39;&#39;(empty string)&lt;/em&gt;: to use no alias; the view shows the real name of the other account.&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The &#39;hide_metadata_if_alias_used&#39; field in the JSON can take boolean values. If it is set to &lt;code&gt;true&lt;/code&gt; and there is an alias on the other account then the other accounts&#39; metadata (like more_info, url, image_url, open_corporates_url, etc.) will be hidden. Otherwise the metadata will be shown.&lt;/p&gt;&lt;p&gt;The &#39;allowed_actions&#39; field is a list containing the name of the actions allowed on this view, all the actions contained will be set to &lt;code&gt;true&lt;/code&gt; on the view creation, the rest will be set to &lt;code&gt;false&lt;/code&gt;.&lt;/p&gt;&lt;p&gt;You should use a leading _ (underscore) for the view name because other view names may become reserved by OBP internally&lt;/p&gt;
     * @param body BANK_BODY
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300CreateViewForBankAccountWithHttpInfo(body: CreateViewJson, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Info Of Adapter
     * &lt;p&gt;Get a basic Adapter info&lt;/p&gt;&lt;p&gt;Login is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func300GetAdapterWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank ATM
     * &lt;p&gt;Returns information about ATM for a single bank specified by BANK_ID and ATM_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func300GetAtmWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank ATMS
     * &lt;p&gt;Returns information about ATMs for a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func300GetAtmsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank Branch
     * &lt;p&gt;Returns information about branches for a single bank specified by BANK_ID and BRANCH_ID including:  meta.license.id and eta.license.name fields must not be empty.&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    func300GetBranchWithHttpInfo(BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Branches for a Bank
     * &lt;p&gt;Returns information about branches for a single bank specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Address&lt;/li&gt;  &lt;li&gt;Geo Location&lt;/li&gt;  &lt;li&gt;License the data under this endpoint is released under&lt;/li&gt;  &lt;li&gt;Structured opening hours&lt;/li&gt;  &lt;li&gt;Accessible flag&lt;/li&gt;  &lt;li&gt;Branch Type&lt;/li&gt;  &lt;li&gt;More Info&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func300GetBranchesWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Account by Id (Core)
     * &lt;p&gt;Information returned about the account specified by ACCOUNT_ID:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Number&lt;/li&gt;  &lt;li&gt;Owners&lt;/li&gt;  &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Balance&lt;/li&gt;  &lt;li&gt;IBAN&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;This call returns the owner view and requires access to that view.&lt;/p&gt;&lt;p&gt;OAuth authentication is required&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetCoreAccountByIdWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transactions for Account (Core)
     * &lt;p&gt;Returns transactions list (Core info) of the account specified by ACCOUNT_ID.&lt;/p&gt;&lt;p&gt;Authentication is required.&lt;/p&gt;&lt;p&gt;Possible custom headers for pagination:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;obp_sort_by&#x3D;CRITERIA &#x3D;&#x3D;&amp;gt; default value: \&quot;completed\&quot; field&lt;/li&gt;  &lt;li&gt;obp_sort_direction&#x3D;ASC/DESC &#x3D;&#x3D;&amp;gt; default value: DESC&lt;/li&gt;  &lt;li&gt;obp_limit&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 50&lt;/li&gt;  &lt;li&gt;obp_offset&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 0&lt;/li&gt;  &lt;li&gt;obp_from_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the oldest transaction registered (format below)&lt;/li&gt;  &lt;li&gt;obp_to_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the newest transaction registered (format below)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Date format parameter&lt;/strong&gt;: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;\&quot; (2014-07-01T00:00:00.000Z) &#x3D;&#x3D;&amp;gt; time zone is UTC.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetCoreTransactionsForBankAccountWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transactions for Account (Full)
     * &lt;p&gt;Returns transactions list of the account specified by ACCOUNT_ID and &lt;a href&#x3D;\&quot;#1_2_1-getViewsForBankAccount\&quot;&gt;moderated&lt;/a&gt; by the view (VIEW_ID).&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required if the view is not public.&lt;/p&gt;&lt;p&gt;Possible custom headers for pagination:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;obp_sort_by&#x3D;CRITERIA &#x3D;&#x3D;&amp;gt; default value: \&quot;completed\&quot; field&lt;/li&gt;  &lt;li&gt;obp_sort_direction&#x3D;ASC/DESC &#x3D;&#x3D;&amp;gt; default value: DESC&lt;/li&gt;  &lt;li&gt;obp_limit&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 50&lt;/li&gt;  &lt;li&gt;obp_offset&#x3D;NUMBER &#x3D;&#x3D;&amp;gt; default value: 0&lt;/li&gt;  &lt;li&gt;obp_from_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the oldest transaction registered (format below)&lt;/li&gt;  &lt;li&gt;obp_to_date&#x3D;DATE &#x3D;&amp;gt; default value: date of the newest transaction registered (format below)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;strong&gt;Date format parameter&lt;/strong&gt;: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;\&quot; (2014-07-01T00:00:00.000Z) &#x3D;&#x3D;&amp;gt; time zone is UTC.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetTransactionsForBankAccountWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Users by Email Address
     * &lt;p&gt;Get users by email address&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    func300GetUserWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get User by USER_ID
     * &lt;p&gt;Get user by USER_ID&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     * @param USER_ID The user id
     */
    func300GetUserByUserIdWithHttpInfo(USER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get User by USERNAME
     * &lt;p&gt;Get user by USERNAME&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser entitlement is required,&lt;/p&gt;
     */
    func300GetUserByUsernameWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Views for Account.
     * &lt;h1&gt;Views&lt;/h1&gt;&lt;p&gt;Views in Open Bank Project provide a mechanism for fine grained access control and delegation to Accounts and Transactions. Account holders use the &#39;owner&#39; view by default. Delegated access is made through other views for example &#39;accountants&#39;, &#39;share-holders&#39; or &#39;tagging-application&#39;. Views can be created via the API and each view has a list of entitlements.&lt;/p&gt;&lt;p&gt;Views on accounts and transactions filter the underlying data to redact certain fields for certain users. For instance the balance on an account may be hidden from the public. The way to know what is possible on a view is determined in the following JSON.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Data:&lt;/strong&gt; When a view moderates a set of data, some fields my contain the value &lt;code&gt;null&lt;/code&gt; rather than the original value. This indicates either that the user is not allowed to see the original data or the field is empty.&lt;/p&gt;&lt;p&gt;There is currently one exception to this rule; the &#39;holder&#39; field in the JSON contains always a value which is either an alias or the real name - indicated by the &#39;is_alias&#39; field.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Action:&lt;/strong&gt; When a user performs an action like trying to post a comment (with POST API call), if he is not allowed, the body response will contain an error message.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Metadata:&lt;/strong&gt; Transaction metadata (like images, tags, comments, etc.) will appears &lt;em&gt;ONLY&lt;/em&gt; on the view where they have been created e.g. comments posted to the public view only appear on the public view.&lt;/p&gt;&lt;p&gt;The other account metadata fields (like image_URL, more_info, etc.) are unique through all the views. Example, if a user edits the &#39;more_info&#39; field in the &#39;team&#39; view, then the view &#39;authorities&#39; will show the new value (if it is allowed to do it).&lt;/p&gt;&lt;h1&gt;All&lt;/h1&gt;&lt;p&gt;&lt;em&gt;Optional&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Returns the list of the views created for account ACCOUNT_ID at BANK_ID.&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300GetViewsForBankAccountWithHttpInfo(ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update View.
     * &lt;p&gt;Update an existing view on a bank account&lt;/p&gt;&lt;p&gt;OAuth authentication is required and the user needs to have access to the owner view.&lt;/p&gt;&lt;p&gt;The json sent is the same as during view creation (above), with one difference: the &#39;name&#39; field of a view is not editable (it is only set when a view is created)&lt;/p&gt;
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func300UpdateViewForBankAccountWithHttpInfo(body: UpdateViewJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}
