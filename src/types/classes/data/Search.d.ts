import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Search extends Faceit {
    constructor();
    searchForChampionships(name: string, game: string, region: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    searchForHubs(name: string, game: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    searchForOrganizers(name: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    searchForPlayers(nickname: string, game: string, country: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    searchForTeams(nickname: string, game: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    searchForTournaments(name: string, game: string, region: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
