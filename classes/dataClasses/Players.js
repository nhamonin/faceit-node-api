import Faceit from '../Faceit.js';

export default class Players extends Faceit {
    constructor() {
        super('players');
    }

    getPlayerDetailsByNickname(nickname) {
        return this.processRequest(null, { nickname });
    }

    getPlayerDetailsByGameAndGamePlayerID(game_id, game_player_id) {
        return this.processRequest(null, { game_id, game_player_id });
    }

    getPlayerDetailsByPlayerID(player_id) {
        return this.processRequest(`/${player_id}`);
    }

    getAllMatchesOfAPlayer(player_id, config) {
        return this.processRequest(`/${player_id}/history`, config);
    }

    getAllHubsOfAPlayer(player_id, config) {
        return this.processRequest(`/${player_id}/hubs`, config);
    }

    getStatisticsOfAPlayer(player_id, gameID) {
        return this.processRequest(`/${player_id}/stats/${gameID}`);
    }

    getAllTournamentsOfAPlayer(player_id) {
        return this.processRequest(`/${player_id}/tournaments`);
    }
}