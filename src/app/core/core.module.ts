import { NgModule, Optional, SkipSelf } from "@angular/core";
import { EnvironmentModule } from "@tempradar/core/environment/environment.module";
import { environmentConfiguration } from "@tempradar/environments/environment";

@NgModule({
  imports: [
    EnvironmentModule.forRoot(environmentConfiguration)
  ]
})
export class CoreModule {
  /**
   * Constructor
   */
  constructor(
    @Optional() @SkipSelf() parentModule?: CoreModule
  ) {
    // Do not allow multiple injections
    if ( parentModule ) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
}
