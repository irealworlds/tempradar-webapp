import { NgModule } from "@angular/core";
import { ToastService } from "./toast.service";
import { ToastConfiguration } from "./models/toast-configuration.model";

@NgModule({
  providers: [
    ToastService,
    {
      provide: ToastConfiguration,
      useValue: new ToastConfiguration(),
    }
  ]
})
export class ToastModule { }
