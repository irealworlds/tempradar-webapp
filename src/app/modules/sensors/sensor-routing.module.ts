import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import("@tempradar/modules/sensors/modules/create-sensor/create-sensor.module").then(m => m.CreateSensorModule)
  },
  {
    path: 'details',
    loadChildren: () => import("@tempradar/modules/sensors/modules/sensor-details/sensor-details.module").then(m => m.SensorDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
