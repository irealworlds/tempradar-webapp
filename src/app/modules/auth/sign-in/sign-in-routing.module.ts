import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "@tempradar/modules/auth/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    data: {
      pageTitle: $localize `Sign in`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
