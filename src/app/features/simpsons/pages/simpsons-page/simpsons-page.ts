import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './simpsons-page.html' // <-- Adaptado a tu archivo real
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);

  simpsonsResource = rxResource({
    stream: () => this.simpsonsService.getCharacters(1),
  });
}