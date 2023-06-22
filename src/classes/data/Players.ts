import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Players extends Faceit {
  constructor() {
    super('players');
  }

  getPlayerDetailsByNickname(nickname: string) {
    return this.processRequest(null, { nickname });
  }

  getPlayerDetailsByGameAndGamePlayerID(game: string, game_player_id: string) {
    return this.processRequest(null, { game, game_player_id });
  }

  getPlayerDetailsByPlayerID(player_id: string) {
    return this.processRequest(`/${player_id}`);
  }

  getAllMatchesOfAPlayer(
    player_id: string,
    game: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`/${player_id}/history`, {
      game,
      ...queryparams,
    });
  }

  getAllHubsOfAPlayer(player_id: string, queryparams: QueryParams) {
    return this.processRequest(`/${player_id}/hubs`, queryparams);
  }

  getStatisticsOfAPlayer(player_id: string, game_id: string) {
    return this.processRequest(`/${player_id}/stats/${game_id}`);
  }

  getAllTournamentsOfAPlayer(player_id: string) {
    return this.processRequest(`/${player_id}/tournaments`);
  }
}
