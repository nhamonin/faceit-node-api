import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Hubs extends Faceit {
    constructor();
    getHubDetails(hub_id: string, expanded: boolean): Promise<import("@interfaces").ApiResponse>;
    getAllMatchesOfAHub(hub_id: string, type: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllMembersOfAHub(hub_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllRolesOfAHub(hub_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getAllRulesOfAHub(hub_id: string): Promise<import("@interfaces").ApiResponse>;
    getStatisticsOfAHub(hub_id: string, queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
}
