import { EnvironmentType } from "@tempradar/core/environment/environment-type.enum";

export class EnvironmentConfig {
  /**
   * The type of environment currently running.
   */
  public environmentType = EnvironmentType.Production;

  /**
   * The current application version.
   */
  public version = '0.0.1';

  /**
   * Build a new environment configuration using {@link initial initial parameters}.
   * @param initial
   */
  constructor(initial?: Partial<EnvironmentConfig>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
