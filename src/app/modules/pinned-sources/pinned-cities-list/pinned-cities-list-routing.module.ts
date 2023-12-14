import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  PinnedCitiesListComponent
} from "@tempradar/modules/pinned-sources/pinned-cities-list/pinned-cities-list.component";

const routes: Routes = [
  {
    path: '',
    component: PinnedCitiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinnedCitiesListRoutingModule { }
