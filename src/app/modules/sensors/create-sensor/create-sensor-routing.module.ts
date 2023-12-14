import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateSensorComponent } from "@tempradar/modules/sensors/create-sensor/create-sensor.component";

const routes: Routes = [
  {
    path: '',
    component: CreateSensorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSensorRoutingModule { }
