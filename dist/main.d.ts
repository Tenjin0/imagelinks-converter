/// <reference types="node" />
import { RequestOptions } from "https";
import * as url from "url";
export interface iOptions {
    httpsOnly: boolean;
    urlOrigin: string;
}
export default class HttpsLinksConverter {
    private folder;
    private filepaths;
    private newhtml;
    private httpsOnly;
    private _folderCreated;
    private _relativeFolder;
    constructor(folder: string);
    private checkIfFolderIsCreate;
    /**
     * Compare 2 arrays and return data not found in the second
     * @param {String} html : html
     * @param {iOptions} opts : options
     * @returns {Promise} : array  [0]: html,  [1]: imagesfiles[]
     */
    convert(html: string, opts: iOptions): Promise<any>;
    convertToBase64(html: string, opts: iOptions): Promise<[string, string[]]>;
    _generateOptionsToRequest(myUrl: url.UrlWithStringQuery): RequestOptions;
    _requestToBase64(httpsUrl: string): Promise<string>;
    /**
     * Remove all files in folder
     * @param deleteFolder if true delete the folder containing temp files
     */
    reset(deleteFolder?: boolean): Promise<void>;
    getFiles(): String[];
    getFolder(): String;
    getHtml(): String;
}
