import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Search extends Faceit {
  constructor() {
    super('search/');
  }

  searchForChampionships(
    name: string,
    game: string,
    region: string,
    queryparams: QueryParams
  ) {
    return this.processRequest('championships', {
      name,
      game,
      region,
      ...queryparams,
    });
  }

  searchForHubs(name: string, game: string, queryparams: QueryParams) {
    return this.processRequest('hubs', { name, game, ...queryparams });
  }

  searchForOrganizers(name: string, queryparams: QueryParams) {
    return this.processRequest('organizers', { name, ...queryparams });
  }

  searchForPlayers(
    nickname: string,
    game: string,
    country: string,
    queryparams: QueryParams
  ) {
    return this.processRequest('players', {
      nickname,
      game,
      country,
      ...queryparams,
    });
  }

  searchForTeams(nickname: string, game: string, queryparams: QueryParams) {
    return this.processRequest('teams', { nickname, game, ...queryparams });
  }

  searchForTournaments(
    name: string,
    game: string,
    region: string,
    queryparams: QueryParams
  ) {
    return this.processRequest('tournaments', {
      name,
      game,
      region,
      ...queryparams,
    });
  }
}
