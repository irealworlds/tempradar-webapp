import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PinnedSensorsListRoutingModule } from "./pinned-sensors-list-routing.module";
import { PinnedSensorsListComponent } from "./pinned-sensors-list.component";
import {
  CreateSourceCardComponent
} from "@tempradar/modules/pinned-sources/create-source-card/create-source-card.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import {
  PinnedCityCardComponent
} from "@tempradar/modules/pinned-sources/pinned-cities-list/pinned-city-card/pinned-city-card.component";
import {
  PinnedSensorCardComponent
} from "@tempradar/modules/pinned-sources/pinned-sensors-list/pinned-sensor-card/pinned-sensor-card.component";


@NgModule({
  declarations: [
    PinnedSensorsListComponent
  ],
  imports: [
    CommonModule,
    PinnedSensorsListRoutingModule,
    CreateSourceCardComponent,
    NgxSkeletonLoaderModule,
    PinnedCityCardComponent,
    PinnedSensorCardComponent
  ]
})
export class PinnedSensorsListModule { }
