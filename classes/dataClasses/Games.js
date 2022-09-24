import Faceit from '../Faceit.js';

export default class Games extends Faceit {
    constructor() {
        super('games');
    }

    getAllDetailsOnAllGames(config) {
        return this.processRequest(null, { config });
    }

    getGameDetails(game_id) {
        return this.processRequest(`/${game_id}`);
    }

    getAllDetailsOfTheParentGame(game_id) {
        return this.processRequest(`/${game_id}/parent`);
    }
}