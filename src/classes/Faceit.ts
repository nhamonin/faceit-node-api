import fetch, { Response } from 'node-fetch';

import { ApiResponse, QueryParams } from '@interfaces';

export default class Faceit {
  private static _apiKey: string;
  private apiUrl: string;

  constructor(path: string | null) {
    this.apiUrl = `https://open.faceit.com/data/v4/${path}`;
  }

  static setApiKey(apiKey: string): void {
    Faceit._apiKey = apiKey;
  }

  async processRequest(
    uri: string | null,
    queryparams?: QueryParams
  ): Promise<ApiResponse> {
    const params = queryparams ? transformQueryParams(queryparams) : {};
    const paramsString = new URLSearchParams(params).toString();
    const queryParams = paramsString.length ? `?${paramsString}` : '';

    return fetch(`${this.apiUrl}${uri || ''}${queryParams}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Faceit._apiKey}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response: Response) => response.json() as Promise<ApiResponse>)
      .then((data: ApiResponse) => {
        if (!data.errors?.length) {
          return data;
        }

        const { http_status, message } = data.errors[0];
        throw new Error(`${http_status || ''} ${message}`);
      });
  }
}

function transformQueryParams(params: QueryParams): Record<string, string> {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  );
}
