import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apple } from './apple-list/Apple';

/**
 * logica del carrito
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class AppleFavoritesService {

  private _favoritesList: Apple[] = [];

  favoritesList: BehaviorSubject<Apple[]> = new BehaviorSubject([]);

  constructor() { }

  addTFavorites(apple: Apple) {
    let item: Apple = this._favoritesList.find((v1) => v1.name == apple.name);
    if(!item) {
      this._favoritesList.push({ ... apple});
      this.favoritesList.next(this._favoritesList); // equivalente al emitt de eventos
    }
  }

  removeFromFavorites(apple: Apple) {
    /* let item: Apple = this._crateList.find((v1) => v1.name == apple.name); */
    let i: number= 0;
    while (this._favoritesList[i] != null && (this._favoritesList[i].name != apple.name)) {
      i++
    }
    let item= this._favoritesList[i];
    if(item) {               //para sacarlo del arreglo
      this._favoritesList.splice(i);
      this.favoritesList.next(this._favoritesList); // equivalente al emitt de eventos
    }
  }
}