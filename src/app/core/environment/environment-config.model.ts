import { EnvironmentType } from "@tempradar/core/environment/environment-type.enum";
import { Layout } from "@tempradar/layout/layouts.enum";
import { ApiConfiguration } from "@tempradar/core/environment/api-configuration.model";

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
   * The default layout to use throughout the applicaiton.
   */
  public defaultLayout = Layout.Navbar;

  /**
   * Represents an API configuration.
   */
  public api = new ApiConfiguration();

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
