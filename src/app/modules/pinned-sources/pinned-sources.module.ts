import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PinnedSourcesRoutingModule } from "./pinned-sources-routing.module";
import { PinnedSourcesComponent } from "@tempradar/modules/pinned-sources/pinned-sources.component";
import { MatCardModule } from "@angular/material/card";
import {
  CreateSourceCardComponent
} from "@tempradar/modules/pinned-sources/create-source-card/create-source-card.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { PinnedCityCardComponent } from "@tempradar/modules/pinned-sources/pinned-city-card/pinned-city-card.component";


@NgModule({
  declarations: [
    PinnedSourcesComponent,
  ],
  imports: [
    CommonModule,
    PinnedSourcesRoutingModule,
    MatCardModule,
    CreateSourceCardComponent,
    NgxSkeletonLoaderModule,
    PinnedCityCardComponent
  ]
})
export class PinnedSourcesModule { }
