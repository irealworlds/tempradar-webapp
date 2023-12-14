import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateSensorRoutingModule } from "./create-sensor-routing.module";
import {
  SensorCardComponent
} from "@tempradar/modules/sensors/modules/create-sensor/components/sensor-card/sensor-card.component";
import { CreateSensorComponent } from "@tempradar/modules/sensors/modules/create-sensor/create-sensor.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    CreateSensorComponent,
    SensorCardComponent
  ],
  imports: [
    CommonModule,
    CreateSensorRoutingModule,
    NgxSkeletonLoaderModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})
export class CreateSensorModule { }
