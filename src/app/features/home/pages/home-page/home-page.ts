import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppHeroComponent } from '../../../../components/hero/hero'; 

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AppHeroComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  // 1. Aquí inyectamos el "chofer" que nos llevará de página
  private router = inject(Router);

  // 2. Esta es la función que se ejecuta al hacer clic
  goToStudentsPage(): void {
    this.router.navigate(['/students']);
  }
}