import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CityDetailsComponent } from "@tempradar/modules/cities/city-details/city-details.component";

const routes: Routes = [
  {
    path: ":cityKey",
    component: CityDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityDetailsRoutingModule { }
