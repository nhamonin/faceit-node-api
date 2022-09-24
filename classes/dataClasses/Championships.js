import Faceit from '../Faceit.js';

export default class Championships extends Faceit {
    constructor() {
        super('championships');
    }

    getAllChampionshipsOfAGame(game_id, config) {
        return this.processRequest(null, { game_id, ...config });
    }

    getChampionshipDetails(championship_id) {
        return this.processRequest(`/${championship_id}`);
    }

    getAllMatchesOfAChampionship(championship_id, config) {
        return this.processRequest(`/${championship_id}/matches`, config);
    }

    getAllResultsOfAChampionship(championship_id, config) {
        return this.processRequest(`/${championship_id}/results`, config);
    }

    getAllSubscriptionsOfAChampionship(championship_id, config) {
        return this.processRequest(`/${championship_id}/subscriptions`, config);
    }
}