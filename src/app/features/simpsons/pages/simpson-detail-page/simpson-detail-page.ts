import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCacheService } from '../../services/simpons-cache.service';

@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html'
})
export class SimpsonDetailPageComponent {
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  private cacheService = inject(SimpsonsCacheService);

  // Convierte el parámetro string ':id' de la ruta activa a número
  private characterId = Number(this.route.snapshot.paramMap.get('id'));

  characterResource = rxResource({
    stream: () => {
      // Paso A: Intentar resolver desde caché local
      const cached = this.cacheService.getById(this.characterId);
      if (cached) {
        console.log(`Caché hit para ID ${this.characterId}`);
        return of(cached); // Retorna inmediatamente sin hacer petición HTTP
      }

      console.log(`Caché miss para ID ${this.characterId}. Solicitando API...`);
      return this.simpsonsService.getCharacterById(this.characterId).pipe(
        tap((character) => this.cacheService.save(character))
      );
    }
  });
}