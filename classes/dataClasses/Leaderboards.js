import Faceit from '../Faceit.js';

export default class Leaderboards extends Faceit {
    constructor() {
        super('leaderboards');
    }

    getAllLeaderboardsOfAChampionship(championship_id, config) {
        return this.processRequest(`/championships/${championship_id}`, config);
    }

    getGroupRankingOfAChampionship(championship_id, group, config) {
        return this.processRequest(`/championships/${championship_id}/groups/${group}`, config);
    }

    getAllLeaderboardsOfAHub(hub_id, config) {
        return this.processRequest(`/leaderboards/hubs/${hub_id}`, config);
    }

    getAllTimeRankingOfAHub(hub_id, config) {
        return this.processRequest(`/leaderboards/hubs/${hub_id}/general`, config);
    }

    getSeasonalRankingOfAHub(hub_id, season, config) {
        return this.processRequest(`/leaderboards/hubs/${hub_id}/seasons/${season}`, config);
    }

    getRankingFromALeaderBoardID(leaderboard_id, config) {
        return this.processRequest(`/leaderboards/${leaderboard_id}`, config);
    }
}