import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { PhysicalCardsJSON } from '../model/physicalCardsJSON';
import { Configuration } from '../configuration';
export declare class Func_1_3_0Service {
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
     * <p>Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.</p>
     * @summary Get cards for the current user
     */
    func130GetCards(extraHttpRequestParams?: any): Observable<PhysicalCardsJSON>;
    /**
     *
     * @summary Get cards for the specified bank
     * @param BANK_ID The bank id
     */
    func130GetCardsForBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<PhysicalCardsJSON>;
    /**
     * Get cards for the current user
     * &lt;p&gt;Returns data about all the physical cards a user has been issued. These could be debit cards, credit cards, etc.&lt;/p&gt;
     */
    func130GetCardsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get cards for the specified bank
     *
     * @param BANK_ID The bank id
     */
    func130GetCardsForBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}
