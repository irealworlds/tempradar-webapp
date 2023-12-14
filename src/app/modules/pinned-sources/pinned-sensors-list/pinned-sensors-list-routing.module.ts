import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  PinnedSensorsListComponent
} from "@tempradar/modules/pinned-sources/pinned-sensors-list/pinned-sensors-list.component";

const routes: Routes = [
  {
    path: "",
    component: PinnedSensorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinnedSensorsListRoutingModule { }
