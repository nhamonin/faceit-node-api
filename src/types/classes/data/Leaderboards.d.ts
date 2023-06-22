import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Leaderboards extends Faceit {
    constructor();
    getAllLeaderboardsOfAChampionship(championship_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getGroupRankingOfAChampionship(championship_id: string, group: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllLeaderboardsOfAHub(hub_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllTimeRankingOfAHub(hub_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getSeasonalRankingOfAHub(hub_id: string, season: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getRankingFromALeaderboardID(leaderboard_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
