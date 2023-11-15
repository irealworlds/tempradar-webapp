import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  EnableCredentialsOnApiInterceptor
} from "@tempradar/core/identity/interceptors/enable-credentials-on-api.interceptor";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EnableCredentialsOnApiInterceptor,
      multi: true,
    }
  ]
})
export class IdentityModule { }
