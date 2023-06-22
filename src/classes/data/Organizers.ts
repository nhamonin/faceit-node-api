import Faceit from '../Faceit.js';

import { QueryParams } from '@interfaces';

export default class Organizers extends Faceit {
  constructor() {
    super('organizers');
  }

  getOrganizerDetailsFromName(name: string) {
    return this.processRequest(null, { name });
  }

  getOrganizerDetails(organizer_id: string) {
    return this.processRequest(`/${organizer_id}`);
  }

  getAllChampionshipsOfAOrganizer(
    organizer_id: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`/${organizer_id}/championships`, queryparams);
  }

  getAllGamesAnOrganizerIsInvolvedWith(organizer_id: string) {
    return this.processRequest(`/${organizer_id}/games`);
  }

  getAllHubsOfAnOrganizer(organizer_id: string, queryparams: QueryParams) {
    return this.processRequest(`/${organizer_id}/hubs`, queryparams);
  }

  getAllTournamentsOfAnOrganizer(
    organizer_id: string,
    type: string,
    queryparams: QueryParams
  ) {
    return this.processRequest(`/${organizer_id}/tournaments`, {
      type,
      ...queryparams,
    });
  }
}
