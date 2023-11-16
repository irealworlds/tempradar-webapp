import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PinnedSourcesComponent } from "@tempradar/modules/pinned-sources/pinned-sources.component";

const routes: Routes = [
  {
    path: '',
    component: PinnedSourcesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinnedSourcesRoutingModule { }
