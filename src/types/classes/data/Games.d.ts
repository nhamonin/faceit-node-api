import Faceit from '../Faceit.js';
import { QueryParams } from '@interfaces';
export default class Games extends Faceit {
    constructor();
    getAllDetailsOnAllGames(queryparams: QueryParams): Promise<import("@interfaces").ApiResponse>;
    getGameDetails(game_id: string): Promise<import("@interfaces").ApiResponse>;
    getAllDetailsOfTheParentGame(game_id: string): Promise<import("@interfaces").ApiResponse>;
}
