import Faceit from '../Faceit.js';

export default class Hubs extends Faceit {
  constructor() {
    super('hubs/');
  }

  getHubDetails(hub_id, expanded) {
    return this.processRequest(hub_id, { expanded });
  }

  getAllMatchesOfAHub(hub_id, type, queryparams) {
    return this.processRequest(`${hub_id}/matches`, { type, ...queryparams });
  }

  getAllMembersOfAHub(hub_id, queryparams) {
    return this.processRequest(`${hub_id}/members`, queryparams);
  }

  getAllRolesOfAHub(hub_id, queryparams) {
    return this.processRequest(`${hub_id}/roles`, queryparams);
  }

  getAllRulesOfAHub(hub_id) {
    return this.processRequest(`${hub_id}/rules`);
  }

  getStatisticsOfAHub(hub_id, queryparams) {
    return this.processRequest(`${hub_id}/stats`, queryparams);
  }
}
