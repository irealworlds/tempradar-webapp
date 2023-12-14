import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PinnedSourcesComponent } from "@tempradar/modules/pinned-sources/pinned-sources.component";

const routes: Routes = [
  {
    path: '',
    component: PinnedSourcesComponent,
    children: [
      { path: '', redirectTo: 'cities', pathMatch: "full" },
      { path: 'cities', loadChildren: () => import("@tempradar/modules/pinned-sources/pinned-cities-list/pinned-cities-list.module").then(m => m.PinnedCitiesListModule) },
      { path: 'sensors', loadChildren: () => import("@tempradar/modules/pinned-sources/pinned-sensors-list/pinned-sensors-list.module").then(m => m.PinnedSensorsListModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinnedSourcesRoutingModule { }
