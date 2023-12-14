import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinnedSourcesRoutingModule } from "./pinned-sources-routing.module";
import { PinnedSourcesComponent } from "@tempradar/modules/pinned-sources/pinned-sources.component";


@NgModule({
  declarations: [
    PinnedSourcesComponent,
  ],
  imports: [
    CommonModule,
    PinnedSourcesRoutingModule,
  ]
})
export class PinnedSourcesModule { }
