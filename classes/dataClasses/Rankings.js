import Faceit from '../Faceit.js';

export default class Rankings extends Faceit {
  constructor() {
    super('rankings/games/');
  }

  getGlobalRankingOfAGame(game_id, region, country, queryparams) {
    return this.processRequest(`${game_id}/regions/${region}`, {
      country,
      ...queryparams,
    });
  }

  getUserPositionInTheGlobalRankingOfAGame(
    game_id,
    region,
    player_id,
    country,
    queryparams
  ) {
    return this.processRequest(
      `${game_id}/regions/${region}/players/${player_id}`,
      { country, ...queryparams }
    );
  }
}
