export class CityCreateRequest {
  name?: string;
  latitude?: number;
  longitude?: number;

  /**
   * Creates a new instance of the CityCreateRequest class.
   *
   * @param {Partial<CityCreateRequest>} initial - The initial values to assign to the instance.
   * @constructor
   */
  constructor(initial?: Partial<CityCreateRequest>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
