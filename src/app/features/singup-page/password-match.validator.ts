import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  
  // Si alguno de los dos está vacío, no disparamos el error de "no coinciden" todavía
  if (!password || !confirmPassword) return null;

  return password === confirmPassword ? null : { passwordMismatch: true };
};