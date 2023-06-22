import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Championships extends Faceit {
  constructor() {
    super('championships');
  }

  getAllChampionshipsOfAGame(
    game: string,
    type: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(null, { game, type, ...queryparams });
  }

  getChampionshipDetails(championship_id: string, expanded: boolean) {
    return this.processRequest(`/${championship_id}`, { expanded });
  }

  getAllMatchesOfAChampionship(
    championship_id: string,
    type: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`/${championship_id}/matches`, {
      type,
      ...queryparams,
    });
  }

  getAllResultsOfAChampionship(
    championship_id: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`/${championship_id}/results`, queryparams);
  }

  getAllSubscriptionsOfAChampionship(
    championship_id: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(
      `/${championship_id}/subscriptions`,
      queryparams
    );
  }
}
