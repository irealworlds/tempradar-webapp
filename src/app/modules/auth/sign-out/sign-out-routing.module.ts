import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignOutComponent } from "@tempradar/modules/auth/sign-out/sign-out.component";

const routes: Routes = [
  {
    path: '',
    component: SignOutComponent,
    data: {
      pageTitle: $localize `Sign out`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignOutRoutingModule { }
