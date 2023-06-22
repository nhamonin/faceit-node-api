import Faceit from '../Faceit.js';

export default class Search extends Faceit {
  constructor() {
    super('search/');
  }

  searchForChampionships(name, game, region, queryparams) {
    return this.processRequest('championships', {
      name,
      game,
      region,
      ...queryparams,
    });
  }

  searchForHubs(name, game, queryparams) {
    return this.processRequest('hubs', { name, game, ...queryparams });
  }

  searchForOrganizers(name, queryparams) {
    return this.processRequest('organizers', { name, ...queryparams });
  }

  searchForPlayers(nickname, game, country, queryparams) {
    return this.processRequest('players', {
      nickname,
      game,
      country,
      ...queryparams,
    });
  }

  searchForTeams(nickname, game, queryparams) {
    return this.processRequest('teams', { nickname, game, ...queryparams });
  }

  searchForTournaments(name, game, region, queryparams) {
    return this.processRequest('tournaments', {
      name,
      game,
      region,
      ...queryparams,
    });
  }
}
