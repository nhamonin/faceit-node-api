import fetch from 'node-fetch';

export default class Faceit {
  constructor(path) {
    this.apiUrl = `https://open.faceit.com/data/v4/${path}`;
    this.path = null;
  }

  static _apiKey;
  static setApiKey(apiKey) {
    Faceit._apiKey = apiKey;
  }

  processRequest(uri, queryparams) {
    const paramsString = new URLSearchParams(queryparams).toString();
    const queryParams = paramsString.length ? `?${paramsString}` : '';

    return fetch(`${this.apiUrl}${uri || ''}${queryParams}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Faceit._apiKey}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors?.length) {
          return data;
        }

        const { http_status, message } = data.errors[0];
        throw new Error(`${http_status || ''} ${message}`);
      })
      .catch((e) => e);
  }
}
