import Faceit from '../Faceit.js';

const faceit = new Faceit();

export default class Players extends Faceit {
  constructor() {
    super('players');
  }

  getPlayerDetailsByNickname(nickname) {
    return this.processRequest(null, { nickname });
  }

  getPlayerDetailsByGameAndGamePlayerID(game, game_player_id) {
    return this.processRequest(null, { game, game_player_id });
  }

  getPlayerDetailsByPlayerID(player_id) {
    return this.processRequest(`/${player_id}`);
  }

  getAllMatchesOfAPlayer(player_id, game, queryparams) {
    return this.processRequest(`/${player_id}/history`, {
      game,
      ...queryparams,
    });
  }

  getAllHubsOfAPlayer(player_id, queryparams) {
    return this.processRequest(`/${player_id}/hubs`, queryparams);
  }

  getStatisticsOfAPlayer(player_id, game_id) {
    return this.processRequest(`/${player_id}/stats/${game_id}`);
  }

  getAllTournamentsOfAPlayer(player_id) {
    return this.processRequest(`/${player_id}/tournaments`);
  }
}
