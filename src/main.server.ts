import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "@tempradar/app.component";
import { config } from "@tempradar/app.config.server";

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
