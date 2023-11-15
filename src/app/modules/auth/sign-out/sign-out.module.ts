import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignOutRoutingModule } from "./sign-out-routing.module";
import { SignOutComponent } from "./sign-out.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    SignOutComponent
  ],
  imports: [
    CommonModule,
    SignOutRoutingModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class SignOutModule { }
