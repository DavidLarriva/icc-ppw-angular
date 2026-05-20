import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './password-match.validator';
import { emailUniqueValidator } from './email-unique.validator';


@Component({
  selector: 'app-singup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './singup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingupPage {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email], [emailUniqueValidator()]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  }, { validators: passwordMatchValidator }); // Validador custom a nivel de grupo [cite: 1705]

  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }
  get confirmPassword() { return this.form.get('confirmPassword')!; }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // Marca todos como tocados para mostrar errores [cite: 1722]
      return;
    }
    console.log('Datos del formulario:', this.form.value);
    this.router.navigate(['/']); // Navega al inicio si es válido [cite: 1733]
  }
}