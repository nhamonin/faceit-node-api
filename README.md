# faceit-node-api

Lightweight node.js module for easier use of the Faceit Data API.

On the 27th of September, 2022, this module covers all the Data APIs provided by Faceit. Please check the latest [documentation](https://developers.faceit.com/docs/tools/data-api) from the Official Faceit Developers web page.

Example of usage:

```js
import { Faceit, Players, Tournaments } from 'faceit-node-api';

Faceit.setApiKey('your_api_key');

const players = new Players();
const tournaments = new Tournaments();

const playerDetails = await players.getPlayerDetailsByNickname('your_nickname');
// do something with received players data from the Faceit API

const tournamentMatches = await tournaments.getMatchesOfATournament(
  'your_tournament_id',
  { limit: 20, offset: 10 }
);
// do something with received tournaments data from the Faceit API
```

Note that `limit` and `offset` aren't required attributes, and by default, they are equal to 20 and 0, respectively.
