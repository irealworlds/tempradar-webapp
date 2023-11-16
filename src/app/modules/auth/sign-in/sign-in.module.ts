import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInRoutingModule } from "./sign-in-routing.module";
import { SignInComponent } from "./sign-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { LogoIconComponent } from "@tempradar/modules/common/logo/logo-icon/logo-icon.component";


@NgModule({
  declarations: [
    SignInComponent
  ],
    imports: [
        CommonModule,
        SignInRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        LogoIconComponent
    ]
})
export class SignInModule { }
