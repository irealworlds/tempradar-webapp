/**
 * Represents a paginated result consisting of an array of TEntity objects and the total number of items.
 *
 * @template TEntity - The type of objects contained in the result array.
 */
export interface PaginatedResult<TEntity>
{
  /**
   * Represents an array of TEntity objects.
   */
  items: TEntity[];

  /**
   * Represents the total amount.
   */
  total: number;
}
