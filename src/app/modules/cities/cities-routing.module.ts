import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "create",
    loadComponent: () => import("@tempradar/modules/cities/city-create/city-create.component").then(c => c.CityCreateComponent),
  },
  {
    path: "details",
    loadChildren: () => import("@tempradar/modules/cities/city-details/city-details.module").then(m => m.CityDetailsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
