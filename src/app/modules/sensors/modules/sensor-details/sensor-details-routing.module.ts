import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SensorDetailsComponent } from "@tempradar/modules/sensors/modules/sensor-details/sensor-details.component";

const routes: Routes = [
  {
    path: ":sensorKey",
    component: SensorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorDetailsRoutingModule { }
