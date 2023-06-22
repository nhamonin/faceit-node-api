import Faceit from '../Faceit.js';
export default class Matches extends Faceit {
    constructor();
    getMatchDetails(match_id: string): Promise<import("../../interfaces/ApiResponse.js").ApiResponse>;
    getStatisticsOfAMatch(match_id: string): Promise<import("../../interfaces/ApiResponse.js").ApiResponse>;
}
