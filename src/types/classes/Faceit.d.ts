import { ApiResponse, QueryParams } from '@interfaces';
export default class Faceit {
    private static _apiKey;
    private apiUrl;
    constructor(path: string | null);
    static setApiKey(apiKey: string): void;
    processRequest(uri: string | null, queryparams?: QueryParams): Promise<ApiResponse>;
}
