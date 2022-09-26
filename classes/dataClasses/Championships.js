import Faceit from '../Faceit.js';

export default class Championships extends Faceit {
  constructor() {
    super('championships');
  }

  getAllChampionshipsOfAGame(game, type, queryparams) {
    return this.processRequest(null, { game, type, ...queryparams });
  }

  getChampionshipDetails(championship_id, expanded) {
    return this.processRequest(`/${championship_id}`, { expanded });
  }

  getAllMatchesOfAChampionship(championship_id, type, queryparams) {
    return this.processRequest(`/${championship_id}/matches`, {
      type,
      ...queryparams,
    });
  }

  getAllResultsOfAChampionship(championship_id, queryparams) {
    return this.processRequest(`/${championship_id}/results`, queryparams);
  }

  getAllSubscriptionsOfAChampionship(championship_id, queryparams) {
    return this.processRequest(
      `/${championship_id}/subscriptions`,
      queryparams
    );
  }
}
