# faceit-node-api
Lightweight node.js module for easier use of the Faceit Data API.

On the 27th of September, 2022, this module covers all the Data APIs provided by Faceit. Please check the latest [documenation](https://developers.faceit.com/docs/tools/data-api) from the Official Faceit web page.

Example of usage:

```
import { Faceit, Players, Tournaments } from 'faceit-node-api';

Faceit.setApiKey('your_api_key');

const players = new Players();
const tournaments = new Tournaments();

players.getPlayerDetailsByNickname('your_nickname')
  .then((data) => {
    // do something with recieved players data from the Faceit API
  })

tournaments.getMatchesOfATournament('tournament_id', { limit: 20, offset: 10 })
  .then((data) => {
    // do something with recieved tournaments data from the Faceit API
  })
```
Note that `limit` and `offset` aren't required attributes, and by default, they are equal to 20 and 0, respectively.
