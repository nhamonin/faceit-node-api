import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Tournaments extends Faceit {
    constructor();
    getTournaments(game: string, region: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getTournamentsDetails(tournament_id: string, expanded: boolean): Promise<import("@interfaces").ApiResponse>;
    getBracketsOfATournament(tournament_id: string): Promise<import("@interfaces").ApiResponse>;
    getMatchesOfATournament(tournament_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getTeamsOfATournament(tournament_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
