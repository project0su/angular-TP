import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Apple } from './apple-list/Apple';

const URL = 'https://6384061a3fa7acb14feb847c.mockapi.io/Apples';

@Injectable({
  providedIn: 'root'
})

export class AppleDataService {

  constructor(private http: HttpClient) {console.log("constr") }

  /**
   * Consume la API y devuelve un observable de la consulta.
   */
  public getAll(): Observable<Apple[]> {
    console.log(this.http.get<Apple[]>(URL));
    return this.http.get<Apple[]>(URL)
              .pipe(
                tap((apples: Apple[]) => apples.forEach(apple => apple.quantity = 0))
              );
  }
}