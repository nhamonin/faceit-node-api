import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Players extends Faceit {
    constructor();
    getPlayerDetailsByNickname(nickname: string): Promise<import("@interfaces").ApiResponse>;
    getPlayerDetailsByGameAndGamePlayerID(game: string, game_player_id: string): Promise<import("@interfaces").ApiResponse>;
    getPlayerDetailsByPlayerID(player_id: string): Promise<import("@interfaces").ApiResponse>;
    getAllMatchesOfAPlayer(player_id: string, game: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllHubsOfAPlayer(player_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getStatisticsOfAPlayer(player_id: string, game_id: string): Promise<import("@interfaces").ApiResponse>;
    getAllTournamentsOfAPlayer(player_id: string): Promise<import("@interfaces").ApiResponse>;
}
