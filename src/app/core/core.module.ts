import { NgModule, Optional, SkipSelf } from "@angular/core";
import { EnvironmentModule } from "@tempradar/core/environment/environment.module";
import { environmentConfiguration } from "@tempradar/environments/environment";
import { IdentityModule } from "@tempradar/core/identity/identity.module";
import { ToastConfiguration, ToastModule } from "@irealworlds/toast-notifications";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { provideStore, StoreModule } from "@ngrx/store";
import { reducersConfig } from "@tempradar/core/state/reducers.config";
import { EffectsModule, provideEffects } from "@ngrx/effects";
import { effectsConfig } from "@tempradar/core/state/effects.config";

@NgModule({
  imports: [
    EnvironmentModule.forRoot(environmentConfiguration),
    IdentityModule,
    ToastModule,
    NgxSkeletonLoaderModule,
    StoreModule.forRoot(reducersConfig),
    EffectsModule.forRoot(effectsConfig),
  ],
  providers: [
    {
      provide: ToastConfiguration,
      useValue: new ToastConfiguration({
        autoCloseTimeout: 4000
      })
    },
    provideStore(reducersConfig),
    provideEffects(effectsConfig),
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
