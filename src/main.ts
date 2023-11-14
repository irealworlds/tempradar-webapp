import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "@tempradar/app.config";
import { AppComponent } from "@tempradar/app.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
