import Faceit from '../Faceit.js';
export default class Teams extends Faceit {
    constructor();
    getTeamDetails(team_id: string): Promise<import("../../interfaces/ApiResponse.js").ApiResponse>;
    getStatisticsOfATeam(team_id: string, game_id: string): Promise<import("../../interfaces/ApiResponse.js").ApiResponse>;
    getTournamentsOfATeam(team_id: string): Promise<import("../../interfaces/ApiResponse.js").ApiResponse>;
}
