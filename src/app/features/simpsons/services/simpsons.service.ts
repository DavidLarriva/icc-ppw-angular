import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError, delay, timeout, map } from 'rxjs';
import { SimpsonsResponse, SimpsonsCharacter } from '../models/simpsons.interface';

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://thesimpsonsapi.com/api';

  getCharacters(page: number = 1): Observable<SimpsonsResponse> {
    return this.http
      .get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}`)
      .pipe(
        tap((response) => console.log('Simpsons API response:', response)),
        catchError((err) => throwError(() => new Error('No se pudieron cargar los personajes')))
      );
  }

  // NUEVO MÉTODO PARA DETALLE INDIVIDUAL
  getCharacterById(id: number): Observable<SimpsonsCharacter> {
    return this.http
      .get<SimpsonsCharacter>(`${this.baseUrl}/characters/${id}`)
      .pipe(
        delay(300), // Simula latencia para apreciar el estado cargando
        timeout(5000), // Evita peticiones colgadas
        tap((character) => console.log('Character loaded:', character.name)),
        map((character) => ({
          ...character,
          occupation: character.occupation || 'Sin ocupación registrada'
        })),
        catchError(() => throwError(() => new Error('No se pudo cargar el personaje')))
      );
  }
}