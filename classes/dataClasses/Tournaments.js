import Faceit from '../Faceit.js';

export default class Tournaments extends Faceit {
  constructor() {
    super('tournaments');
  }

  getTournaments(game, region, queryparams) {
    return this.processRequest(null, { game, region, ...queryparams });
  }

  getTournamentsDetails(tournament_id, expanded) {
    return this.processRequest(`/${tournament_id}`, { expanded });
  }

  getBracketsOfATournament(tournament_id) {
    return this.processRequest(`/${tournament_id}/brackets`);
  }

  getMatchesOfATournament(tournament_id, queryparams) {
    return this.processRequest(`/${tournament_id}/matches`, queryparams);
  }

  getTeamsOfATournament(tournament_id, queryparams) {
    return this.processRequest(`/${tournament_id}/teams`, queryparams);
  }
}
