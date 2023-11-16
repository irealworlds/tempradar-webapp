import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignUpRoutingModule } from "./sign-up-routing.module";
import { SignUpComponent } from "./sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { LogoIconComponent } from "@tempradar/modules/common/logo/logo-icon/logo-icon.component";


@NgModule({
  declarations: [
    SignUpComponent
  ],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        LogoIconComponent
    ]
})
export class SignUpModule { }
