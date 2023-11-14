import { ModuleWithProviders, NgModule } from "@angular/core";
import { APP_ENVIRONMENT } from "@tempradar/core/environment/environment.injection";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";


@NgModule({})
export class EnvironmentModule {
  static forRoot(configuration: EnvironmentConfig): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: APP_ENVIRONMENT,
          useValue: configuration,
        },
        {
          provide: EnvironmentConfig,
          useValue: configuration,
        }
      ]
    };
  }
}
