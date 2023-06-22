import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Rankings extends Faceit {
  constructor() {
    super('rankings/games/');
  }

  getGlobalRankingOfAGame(
    game_id: string,
    region: string,
    country: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`${game_id}/regions/${region}`, {
      country,
      ...queryparams,
    });
  }

  getUserPositionInTheGlobalRankingOfAGame(
    game_id: string,
    region: string,
    player_id: string,
    country: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(
      `${game_id}/regions/${region}/players/${player_id}`,
      { country, ...queryparams }
    );
  }
}
