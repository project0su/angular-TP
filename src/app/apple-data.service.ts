import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Apple } from './apple-list/Apple';

const URL = 'https://638940a54eccb986e88eb6ac.mockapi.io/api/v1/Apples';

@Injectable({
  providedIn: 'root'
})

export class AppleDataService {

  apples2: BehaviorSubject<Apple[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  /**
   * Consume la API y devuelve un observable de la consulta.
   */
  public getAll(): Observable<Apple[]> {
    return this.http.get<Apple[]>(URL)
              .pipe(
                tap((apples: Apple[]) => apples.forEach(apple => apple.quantity = 0))
              );
  }
}