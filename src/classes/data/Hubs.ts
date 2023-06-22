import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Hubs extends Faceit {
  constructor() {
    super('hubs/');
  }

  getHubDetails(hub_id: string, expanded: boolean) {
    return this.processRequest(hub_id, { expanded });
  }

  getAllMatchesOfAHub(hub_id: string, type: string, queryparams: QueryParams) {
    return this.processRequest(`${hub_id}/matches`, { type, ...queryparams });
  }

  getAllMembersOfAHub(hub_id: string, queryparams: QueryParams) {
    return this.processRequest(`${hub_id}/members`, queryparams);
  }

  getAllRolesOfAHub(hub_id: string, queryparams: QueryParams) {
    return this.processRequest(`${hub_id}/roles`, queryparams);
  }

  getAllRulesOfAHub(hub_id: string) {
    return this.processRequest(`${hub_id}/rules`);
  }

  getStatisticsOfAHub(hub_id: string, queryparams: QueryParams) {
    return this.processRequest(`${hub_id}/stats`, queryparams);
  }
}
