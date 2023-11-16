import { NgModule, Optional, SkipSelf } from "@angular/core";
import { EnvironmentModule } from "@tempradar/core/environment/environment.module";
import { environmentConfiguration } from "@tempradar/environments/environment";
import { IdentityModule } from "@tempradar/core/identity/identity.module";
import { ToastConfiguration, ToastModule } from "@irealworlds/toast-notifications";

@NgModule({
  imports: [
    EnvironmentModule.forRoot(environmentConfiguration),
    IdentityModule,
    ToastModule,
  ],
  providers: [
    {
      provide: ToastConfiguration,
      useValue: new ToastConfiguration({
        autoCloseTimeout: 4000
      })
    }
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
