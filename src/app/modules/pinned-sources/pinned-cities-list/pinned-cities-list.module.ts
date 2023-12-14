import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PinnedCitiesListRoutingModule } from "./pinned-cities-list-routing.module";
import { PinnedCitiesListComponent } from "./pinned-cities-list.component";
import {
  CreateSourceCardComponent
} from "@tempradar/modules/pinned-sources/create-source-card/create-source-card.component";
import {
  PinnedCityCardComponent
} from "@tempradar/modules/pinned-sources/pinned-cities-list/pinned-city-card/pinned-city-card.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";


@NgModule({
  declarations: [
    PinnedCitiesListComponent
  ],
  imports: [
    CommonModule,
    PinnedCitiesListRoutingModule,
    NgxSkeletonLoaderModule,
    CreateSourceCardComponent,
    PinnedCityCardComponent,
  ]
})
export class PinnedCitiesListModule { }
