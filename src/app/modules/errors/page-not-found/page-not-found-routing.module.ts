import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "@tempradar/modules/errors/page-not-found/page-not-found.component";
import { Layout } from "@tempradar/layout/layouts.enum";

const routes: Routes = [
  {
    path: "",
    component: PageNotFoundComponent,
    data: {
      layout: Layout.Blank,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
