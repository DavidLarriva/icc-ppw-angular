import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function emailUniqueValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(control.value).pipe(
      delay(500), // 
      map((email: string) => {
        const takenEmails = ['pabloa_ec@hotmail.com', 'user@example.com'];
        return takenEmails.includes(email) ? { emailTaken: true } : null;
      })
    );
  };
}