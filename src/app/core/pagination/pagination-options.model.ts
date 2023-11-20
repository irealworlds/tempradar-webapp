export class PaginationOptions {
  /**
   * The number of elements to skip.
   */
  skip = 0;

  /**
   * Represents the limit value.
   */
  limit = 10;

  /**
   * Creates a new PaginationOptions instance.
   *
   * @constructor
   * @param {Partial<PaginationOptions>} initial - The initial values for the PaginationOptions.
   */
  constructor(initial?: Partial<PaginationOptions>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
