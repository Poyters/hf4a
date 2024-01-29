import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  AbstractControl,
} from '@angular/forms';

export const leftSeniorityDiscsValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const seniorityDiscs = control.get('seniorityDiscs');
  const leftSeniorityDiscs = control.get('leftSeniorityDiscs');

  leftSeniorityDiscs?.markAsTouched();

  return seniorityDiscs &&
    leftSeniorityDiscs &&
    leftSeniorityDiscs.value > seniorityDiscs.value
    ? { leftSeniorityDiscsMax: true }
    : null;
};
