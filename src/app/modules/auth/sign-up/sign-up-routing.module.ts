import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "@tempradar/modules/auth/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    data: {
      pageTitle: $localize `Sign in`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
