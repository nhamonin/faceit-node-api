import Faceit from '../Faceit.js';

export default class Organizers extends Faceit {
  constructor() {
    super('organizers');
  }

  getOrganizerDetailsFromName(name) {
    return this.processRequest(null, { name });
  }

  getOrganizerDetails(organizer_id) {
    return this.processRequest(`/${organizer_id}`);
  }

  getAllChampionshipsOfAOrganizer(organizer_id, queryparams) {
    return this.processRequest(`/${organizer_id}/championships`, queryparams);
  }

  getAllGamesAnOrganizerIsInvolvedWith(organizer_id) {
    return this.processRequest(`/${organizer_id}/games`);
  }

  getAllHubsOfAnOrganizer(organizer_id, queryparams) {
    return this.processRequest(`/${organizer_id}/hubs`, queryparams);
  }

  getAllTournamentsOfAnOrganizer(organizer_id, type, queryparams) {
    return this.processRequest(`/${organizer_id}/tournaments`, {
      type,
      ...queryparams,
    });
  }
}
