export class ApiConfiguration {
  /**
   * The base URI to use when sending requests to the API.
   */
  public baseUri: string = 'http://127.0.0.1';

  constructor(initial?: Partial<ApiConfiguration>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
