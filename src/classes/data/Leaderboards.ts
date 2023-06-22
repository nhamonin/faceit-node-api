import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Leaderboards extends Faceit {
  constructor() {
    super('leaderboards/');
  }

  getAllLeaderboardsOfAChampionship(
    championship_id: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`championships/${championship_id}`, queryparams);
  }

  getGroupRankingOfAChampionship(
    championship_id: string,
    group: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(
      `championships/${championship_id}/groups/${group}`,
      queryparams
    );
  }

  getAllLeaderboardsOfAHub(hub_id: string, queryparams: QueryParams) {
    return this.processRequest(`hubs/${hub_id}`, queryparams);
  }

  getAllTimeRankingOfAHub(hub_id: string, queryparams: QueryParams) {
    return this.processRequest(`hubs/${hub_id}/general`, queryparams);
  }

  getSeasonalRankingOfAHub(
    hub_id: string,
    season: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`hubs/${hub_id}/seasons/${season}`, queryparams);
  }

  getRankingFromALeaderboardID(
    leaderboard_id: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(leaderboard_id, queryparams);
  }
}
