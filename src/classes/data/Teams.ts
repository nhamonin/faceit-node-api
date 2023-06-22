import Faceit from '../Faceit.js';

export default class Teams extends Faceit {
  constructor() {
    super('teams/');
  }

  getTeamDetails(team_id: string) {
    return this.processRequest(team_id);
  }

  getStatisticsOfATeam(team_id: string, game_id: string) {
    return this.processRequest(`${team_id}/stats/${game_id}`);
  }

  getTournamentsOfATeam(team_id: string) {
    return this.processRequest(`${team_id}/tournaments`);
  }
}
