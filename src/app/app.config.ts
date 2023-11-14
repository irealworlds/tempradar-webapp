import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "@tempradar/app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { CoreModule } from "@tempradar/core/core.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(CoreModule),
  ],
};
