import { config } from 'dotenv';

import Players from './classes/dataClasses/Players.js';
import Championships from './classes/dataClasses/Championships.js';
import Games from './classes/dataClasses/Games.js';
import { generalConfig } from './configs/generalConfig.js';
import { playersConfig } from './configs/playersConfig.js';
import { championshipsConfig } from './configs/championshipsConfig.js';

config();
const { game_id } = generalConfig;
const { nickname, game_player_id, player_id } = playersConfig;
const { championship_id } = championshipsConfig;

const players = new Players();
Promise.all([
    players.getPlayerDetailsByNickname(nickname),
    players.getPlayerDetailsByGameAndGamePlayerID(game_id, game_player_id),
    players.getPlayerDetailsByPlayerID(player_id),
    players.getAllMatchesOfAPlayer(player_id, {
        limit: 10,
        offset: 10
    }),
    players.getAllHubsOfAPlayer(player_id, {
        limit: 10,
        offset: 0
    }),
    players.getStatisticsOfAPlayer(player_id, game_id),
    players.getAllTournamentsOfAPlayer(player_id)
])
    .then(data => {
        console.log(data)
    })

const championships = new Championships();
Promise.all([
    championships.getAllChampionshipsOfAGame(game_id),
    championships.getChampionshipDetails(championship_id),
    championships.getAllMatchesOfAChampionship(championship_id),
    championships.getAllResultsOfAChampionship(championship_id),
    championships.getAllSubscriptionsOfAChampionship(championship_id),
])
    .then(data => {
        console.log(data)
    })

const games = new Games();
Promise.all([
    games.getAllDetailsOnAllGames(),
    games.getGameDetails(game_id),
    games.getAllDetailsOfTheParentGame('wot_EU')
])
    .then(data => {
        console.log(data)
    })