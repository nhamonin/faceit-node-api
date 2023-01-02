import fetch from 'node-fetch';

export default class Faceit {
  constructor(path) {
    this.apiUrl = `https://open.faceit.com/data/v4/${path}`;
    this.path = null;
    this.currentFaceitAPIKeyIndex = 0;
  }

  static apiKeys;
  static setApiKeys(apiKeys) {
    Faceit._apiKeys = apiKeys;
  }

  processRequest(uri, queryparams) {
    const paramsString = new URLSearchParams(queryparams).toString();
    const queryParams = paramsString.length ? `?${paramsString}` : '';

    return fetch(`${this.apiUrl}${uri || ''}${queryParams}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this._getFaceitApiKey()}`,
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

  _getFaceitApiKey() {
    if (this.currentFaceitAPIKeyIndex >= Faceit._apiKeys.length) {
      this.currentFaceitAPIKeyIndex = 0;
    }

    const apiKey = Faceit._apiKeys[this.currentFaceitAPIKeyIndex++];

    return apiKey;
  }
}
