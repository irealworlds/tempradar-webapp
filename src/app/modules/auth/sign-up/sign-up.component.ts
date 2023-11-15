import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "@tempradar/modules/auth/sign-up/sign-up.service";
import { SignUpRequest } from "@tempradar/modules/auth/sign-up/sign-up.request";
import { HttpErrorResponse } from "@angular/common/http";
import { ValidationErrorService } from "@tempradar/core/forms/validation-error.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true, validators: [ Validators.required ]}),
    lastName: new FormControl('', { nonNullable: true, validators: [ Validators.required ]}),
    email: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.email ]}),
    password: new FormControl('', { nonNullable: true, validators: [ Validators.required ]}),
  });

  private _saving = false;

  /**
   * SignUpComponent constructor method.
   *
   * @param _signUpService
   * @param _validationErrorService
   * @param _router
   */
  constructor(
    private readonly _signUpService: SignUpService,
    private readonly _validationErrorService: ValidationErrorService,
    private readonly _router: Router,
  ) {
  }

  /**
   * Retrieves the saving status.
   *
   * @returns {boolean} The current saving status.
   */
  get saving(): boolean {
    return this._saving;
  }

  /**
   * Sets the value of 'saving' property and updates the state of the signUpForm.
   *
   * @param {boolean} value - The new value for the 'saving' property.
   */
  set saving(value: boolean) {
    this._saving = value;
    if (value) {
      this.signUpForm.disable();
    } else {
      this.signUpForm.enable();
    }
  }

  /**
   * Saves the account by sending a sign-up request.
   *
   * @throws {Error} If there is already a processing sign up request.
   * @return {void}
   */
  saveAccount(): void {
    if (this.saving) {
      throw new Error("Already processing a sign up request.")
    }

    this.signUpForm.markAllAsTouched();

    if (this.signUpForm.valid) {
      // Build the request data
      const request = new SignUpRequest(this.signUpForm.value);

      // Send the request
      this.saving = true;
      this._signUpService.sendRequest(request).subscribe({
        next: async () => {
          this.saving = false;
          await this._router.navigate(['/']);
        },
        error: (response: HttpErrorResponse) => {
          this.saving = false;

          if (response.status === 400) {
            this._validationErrorService.applyApiValidationErrorsOnControl(response.error.errors, this.signUpForm);
          }
        }
      });
    }
  }
}
