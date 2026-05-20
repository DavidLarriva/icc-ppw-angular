import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function emailUniqueValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(control.value).pipe(
      delay(500), // Simula la espera de 500ms de una API [cite: 1864]
      map((email: string) => {
        // Correos de prueba que el sistema detectará como "ya registrados" [cite: 1807, 1811]
        const takenEmails = ['pabloa_ec@hotmail.com', 'user@example.com'];
        return takenEmails.includes(email) ? { emailTaken: true } : null;
      })
    );
  };
}