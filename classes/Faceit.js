import fetch from 'node-fetch';

export default class Faceit {
    constructor(path) {
      this.apiUrl = `https://open.faceit.com/data/v4/${path}`;
      this._apiKey = process.env.FACEIT_API_KEY;
    }

    async processRequest(uri, config) {
        const paramsString = new URLSearchParams(config).toString();
        const queryParams = paramsString.length ? `?${paramsString}` : '';

        return await fetch(
            `${this.apiUrl}${uri || ''}${queryParams}`,
            {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${this._apiKey}`,
                'Content-Type': 'application/json',
              },
            })
            .then(response => response.json())
            .then(data => {
              if (!data.errors?.length) {
                return data;
              }

              const { http_status, message } = data.errors[0];
              throw new Error(`${http_status} ${message}`);
            })
            .catch(e => console.log(e));
    }
}