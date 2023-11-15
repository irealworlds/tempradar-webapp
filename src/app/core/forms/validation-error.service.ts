import { Injectable } from "@angular/core";
import { ApiValidationErrors } from "@tempradar/core/forms/api-validation-errors.type";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationErrorService {
  /**
   * Apply an {@link errorSet error set} to a given {@link control form control}.
   *
   * @param errorSet
   * @param control
   */
  public applyApiValidationErrorsOnControl(errorSet: ApiValidationErrors, control: AbstractControl) {
    for (const [field, errors] of Object.entries(errorSet)) {
      const target = control.get(field);
      if (target) {
        target.setErrors({
          ...target.errors,
          ...errors.reduce((accumulator: ValidationErrors, error: string) => {
            Object.assign(accumulator, {
              [error]: true
            });
            return accumulator;
          }, {})
        });
      }
    }
  }
}
