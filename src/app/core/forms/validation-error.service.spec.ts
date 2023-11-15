import { TestBed } from "@angular/core/testing";

import { ValidationErrorService } from "./validation-error.service";
import { FormControl, FormGroup } from "@angular/forms";
import { ApiValidationErrors } from "@tempradar/core/forms/api-validation-errors.type";

describe('ValidationErrorService', () => {
  let service: ValidationErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('ValidationErrorService', () => {
    it('should apply api validation errors on control', () => {
      const formGroup = new FormGroup({
        name: new FormControl(),
        email: new FormControl()
      });

      // define error set
      const errorSet: ApiValidationErrors = {
        name: ['required'],
        email: ['required', 'email']
      };

      service.applyApiValidationErrorsOnControl(errorSet, formGroup);

      expect(formGroup.controls.name.errors).toEqual({'required': true});
      expect(formGroup.controls.email.errors).toEqual({'required': true, 'email': true});
    });

    it('should not remove original errors on control', () => {
      const formGroup = new FormGroup({
        name: new FormControl(),
        email: new FormControl()
      });

      // Set initial errors
      formGroup.controls.name.setErrors({'initialError': true});
      formGroup.controls.email.setErrors({'initialError': true});

      // define error set
      const errorSet: ApiValidationErrors = {
        name: ['required'],
        email: ['required', 'email']
      };

      service.applyApiValidationErrorsOnControl(errorSet, formGroup);

      expect(formGroup.controls.name.errors).toEqual({'initialError': true, 'required': true});
      expect(formGroup.controls.email.errors).toEqual({'initialError': true, 'required': true, 'email': true});
    });
  });
});
