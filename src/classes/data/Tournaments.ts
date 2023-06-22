import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Tournaments extends Faceit {
  constructor() {
    super('tournaments');
  }

  getTournaments(game: string, region: string, queryparams: QueryParams) {
    return this.processRequest(null, { game, region, ...queryparams });
  }

  getTournamentsDetails(tournament_id: string, expanded: boolean) {
    return this.processRequest(`/${tournament_id}`, { expanded });
  }

  getBracketsOfATournament(tournament_id: string) {
    return this.processRequest(`/${tournament_id}/brackets`);
  }

  getMatchesOfATournament(tournament_id: string, queryparams: QueryParams) {
    return this.processRequest(`/${tournament_id}/matches`, queryparams);
  }

  getTeamsOfATournament(tournament_id: string, queryparams: QueryParams) {
    return this.processRequest(`/${tournament_id}/teams`, queryparams);
  }
}
