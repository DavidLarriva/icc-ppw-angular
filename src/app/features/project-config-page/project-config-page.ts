import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../shared/utils/form-utils';

@Component({
  selector: 'app-project-config-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-config-page.html'
})
export class ProjectConfigPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    lenguajes: this.fb.array(
      [
        this.fb.control('JavaScript', [Validators.required, Validators.minLength(2)]),
        this.fb.control('TypeScript', [Validators.required, Validators.minLength(2)])
      ],
      [Validators.minLength(2)] // Array completo requiere mínimo 2 elementos
    ),
    tipo: ['fullstack', Validators.required],
    notificaciones: [true],
    terminosAceptados: [false, Validators.requiredTrue] // Checkbox obligatorio
  });

  // Campo temporal e independiente para capturar nuevos lenguajes
  newLenguaje = new FormControl('', [Validators.required, Validators.minLength(2)]);

  // Getter para acceder cómodamente al FormArray desde el HTML
  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  onAddLenguaje() {
    if (this.newLenguaje.invalid || !this.newLenguaje.value) return;
    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, [Validators.required, Validators.minLength(2)])
    );
    this.newLenguaje.reset();
  }

  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) return;
    console.log('Proyecto guardado con éxito:', this.myForm.value);
  }
}