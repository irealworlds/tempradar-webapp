import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SensorDetailsRoutingModule } from "./sensor-details-routing.module";
import { SensorDetailsComponent } from "./sensor-details.component";
import {
  SensorCurrentReadingComponent
} from "@tempradar/modules/sensors/modules/sensor-details/components/sensor-current-reading/sensor-current-reading.component";
import {
  SensorTemperatureHistoryCardComponent
} from "@tempradar/modules/sensors/modules/sensor-details/components/sensor-temperature-history-card/sensor-temperature-history-card.component";
import {
  SensorHumidityHistoryCardComponent
} from "@tempradar/modules/sensors/modules/sensor-details/components/sensor-humidity-history-card/sensor-humidity-history-card.component";


@NgModule({
  declarations: [
    SensorDetailsComponent
  ],
  imports: [
    CommonModule,
    SensorDetailsRoutingModule,
    SensorCurrentReadingComponent,
    SensorTemperatureHistoryCardComponent,
    SensorHumidityHistoryCardComponent
  ]
})
export class SensorDetailsModule { }
