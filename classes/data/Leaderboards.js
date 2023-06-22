import Faceit from '../Faceit.js';

export default class Leaderboards extends Faceit {
  constructor() {
    super('leaderboards/');
  }

  getAllLeaderboardsOfAChampionship(championship_id, queryparams) {
    return this.processRequest(`championships/${championship_id}`, queryparams);
  }

  getGroupRankingOfAChampionship(championship_id, group, queryparams) {
    return this.processRequest(
      `championships/${championship_id}/groups/${group}`,
      queryparams
    );
  }

  getAllLeaderboardsOfAHub(hub_id, queryparams) {
    return this.processRequest(`hubs/${hub_id}`, queryparams);
  }

  getAllTimeRankingOfAHub(hub_id, queryparams) {
    return this.processRequest(`hubs/${hub_id}/general`, queryparams);
  }

  getSeasonalRankingOfAHub(hub_id, season, queryparams) {
    return this.processRequest(`hubs/${hub_id}/seasons/${season}`, queryparams);
  }

  getRankingFromALeaderboardID(leaderboard_id, queryparams) {
    return this.processRequest(leaderboard_id, queryparams);
  }
}
