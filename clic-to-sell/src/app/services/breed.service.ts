import { MOCK_BREEDS } from './../mock-breeds';
import { Breed } from './../breed';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 *
 *
 * @export
 *  BreedService Servicio que provee de razas al componente breeds.component.ts
 */
@Injectable({
  providedIn: 'root'
})


export class BreedService {

  constructor() { }

  getBreeds(): Observable<Breed[]> {
    return of(MOCK_BREEDS);
  }
}
