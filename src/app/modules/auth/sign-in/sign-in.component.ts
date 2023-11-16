import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ValidationErrorService } from "@tempradar/core/forms/validation-error.service";
import { Router } from "@angular/router";
import { SignInService } from "@tempradar/modules/auth/sign-in/sign-in.service";
import { HttpErrorResponse } from "@angular/common/http";
import { SignInRequest } from "@tempradar/modules/auth/sign-in/sign-in.request";
import { ToastNotification, ToastService, ToastType } from "@irealworlds/toast-notifications";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  signInForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.email ]}),
    password: new FormControl('', { nonNullable: true, validators: [ Validators.required ]}),
  });

  private _saving = false;

  /**
   * SignInComponent constructor method.
   *
   * @param _signInService
   * @param _validationErrorService
   * @param _router
   * @param _toastService
   */
  constructor(
    private readonly _signInService: SignInService,
    private readonly _validationErrorService: ValidationErrorService,
    private readonly _router: Router,
    private readonly _toastService: ToastService
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
   * Sets the value of 'saving' property and updates the state of the SignInForm.
   *
   * @param {boolean} value - The new value for the 'saving' property.
   */
  set saving(value: boolean) {
    this._saving = value;
    if (value) {
      this.signInForm.disable();
    } else {
      this.signInForm.enable();
    }
  }

  signIn(): void {
    if (this.saving) {
      throw new Error("Already processing a sign in request.")
    }

    this.signInForm.markAllAsTouched();

    if (this.signInForm.valid) {
      // Build the request data
      const request = new SignInRequest(this.signInForm.value);

      // Send the request
      this.saving = true;
      this._signInService.sendRequest(request).subscribe({
        next: async () => {
          this.saving = false;
          this._toastService.showToast(new ToastNotification({
            title: $localize `Signed in successfully`,
            message: $localize `You have signed into your account successfully!`,
            type: ToastType.Success
          }));
          await this._router.navigate(['/']);
        },
        error: (response: HttpErrorResponse) => {
          this.saving = false;

          if (response.status === 400) {
            this._validationErrorService.applyApiValidationErrorsOnControl(response.error.errors, this.signInForm);
          }

          this._toastService.showToast(new ToastNotification({
            title: $localize `An error has occurred`,
            message: $localize `You have not been signed into your account. Please try again!`,
            type: ToastType.Error
          }));
        }
      });
    }
  }
}
