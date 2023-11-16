import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PinnedSourcesRoutingModule } from "./pinned-sources-routing.module";
import { PinnedSourcesComponent } from "@tempradar/modules/pinned-sources/pinned-sources.component";
import { MatCardModule } from "@angular/material/card";
import { NoSourcesComponent } from "@tempradar/modules/pinned-sources/no-sources/no-sources.component";


@NgModule({
  declarations: [
    PinnedSourcesComponent,
  ],
  imports: [
    CommonModule,
    PinnedSourcesRoutingModule,
    MatCardModule,
    NoSourcesComponent
  ]
})
export class PinnedSourcesModule { }
