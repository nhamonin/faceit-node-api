import Faceit from '../Faceit.js';

export default class Matches extends Faceit {
  constructor() {
    super('matches/');
  }

  getMatchDetails(match_id: string) {
    return this.processRequest(match_id);
  }

  getStatisticsOfAMatch(match_id: string) {
    return this.processRequest(`${match_id}/stats`);
  }
}
