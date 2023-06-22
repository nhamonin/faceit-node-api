import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Rankings extends Faceit {
    constructor();
    getGlobalRankingOfAGame(game_id: string, region: string, country: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getUserPositionInTheGlobalRankingOfAGame(game_id: string, region: string, player_id: string, country: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
