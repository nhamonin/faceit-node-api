import Faceit from '../Faceit.js';

export default class Teams extends Faceit {
  constructor() {
    super('teams/');
  }

  getTeamDetails(team_id) {
    return this.processRequest(team_id);
  }

  getStatisticsOfATeam(team_id, game_id) {
    return this.processRequest(`${team_id}/stats/${game_id}`);
  }

  getTournamentsOfATeam(team_id) {
    return this.processRequest(`${team_id}/tournaments`);
  }
}
