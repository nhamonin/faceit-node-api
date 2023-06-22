import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Organizers extends Faceit {
    constructor();
    getOrganizerDetailsFromName(name: string): Promise<import("@interfaces").ApiResponse>;
    getOrganizerDetails(organizer_id: string): Promise<import("@interfaces").ApiResponse>;
    getAllChampionshipsOfAOrganizer(organizer_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllGamesAnOrganizerIsInvolvedWith(organizer_id: string): Promise<import("@interfaces").ApiResponse>;
    getAllHubsOfAnOrganizer(organizer_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllTournamentsOfAnOrganizer(organizer_id: string, type: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
