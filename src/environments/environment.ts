import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { EnvironmentType } from "@tempradar/core/environment/environment-type.enum";

// Build the environment
const config = new EnvironmentConfig();
config.environmentType = EnvironmentType.Development;

// Export the configuration
export const environmentConfiguration = config;
