import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Games extends Faceit {
  constructor() {
    super('games');
  }

  getAllDetailsOnAllGames(queryparams: QueryParams) {
    return this.processRequest(null, queryparams);
  }

  getGameDetails(game_id: string) {
    return this.processRequest(`/${game_id}`);
  }

  getAllDetailsOfTheParentGame(game_id: string) {
    return this.processRequest(`/${game_id}/parent`);
  }
}
