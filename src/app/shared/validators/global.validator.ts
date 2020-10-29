import { AbstractControl, FormControl } from '@angular/forms'
import { ValidationResult } from './validation.interface';

export class GlobalValidator {

  static emailFormat(control: AbstractControl): ValidationResult {

    const EMAIL_REGEXP: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (control.value !== '' && (!EMAIL_REGEXP.test(control.value))) {
      return { 'emailFormat': true };
    }

    return null;
  }

  static phoneFormat(control: AbstractControl): ValidationResult {
    const PHONE_REGEXP: RegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;
    if (control.value !== '' && !PHONE_REGEXP.test(control.value)) {
      return { 'phoneFormat': true };
    }

    return null;
  }

}
