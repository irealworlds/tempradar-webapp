import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import("@tempradar/modules/sensors/create-sensor/create-sensor.module").then(m => m.CreateSensorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
