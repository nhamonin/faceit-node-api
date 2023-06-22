import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Championships extends Faceit {
    constructor();
    getAllChampionshipsOfAGame(game: string, type: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getChampionshipDetails(championship_id: string, expanded: boolean): Promise<import("@interfaces").ApiResponse>;
    getAllMatchesOfAChampionship(championship_id: string, type: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllResultsOfAChampionship(championship_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllSubscriptionsOfAChampionship(championship_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
