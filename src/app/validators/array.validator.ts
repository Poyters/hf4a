import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

interface ArrayLengthValidatorOptions {
  min?: number;
  max?: number;
}

export function arrayLengthValidator(
  options: ArrayLengthValidatorOptions
): ValidatorFn {
  const min = options.min ?? 0;
  const max = options.max ?? Number.MAX_SAFE_INTEGER;

  console.log('min', min);

  return (control: AbstractControl): ValidationErrors | null => {
    const arrayValue = control.value as any[]; // Zakładam, że kontrolka zawiera tablicę

    if (arrayValue && arrayValue.length >= min && arrayValue.length <= max) {
      return null; // Brak błędów
    } else {
      return { invalidArrayLength: true }; // Błąd
    }
  };
}
