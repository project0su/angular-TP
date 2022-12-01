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
export class AppleCrateService {

  private _crateList: Apple[] = [];

  crateList: BehaviorSubject<Apple[]> = new BehaviorSubject([]);

  constructor() { }

  addToCrate(apple: Apple) {
    let item: Apple = this._crateList.find((v1) => v1.name == apple.name);
    if (apple.quantity > 0) { 
      if(!item) {
        this._crateList.push({ ... apple});
      } else {
        item.quantity += apple.quantity;
      }
      this.crateList.next(this._crateList); // equivalente al emitt de eventos
    }
  }

  removeFromCrate(apple: Apple) {
    /* let item: Apple = this._crateList.find((v1) => v1.name == apple.name); */
    let i: number= 0;
    while (this._crateList[i] != null && (this._crateList[i].name != apple.name)) {
      i++
    }
    let item= this._crateList[i];
    if(item) {
      item.quantity= 0;                 //para sacarlo del arreglo
      this._crateList.splice(i);
    }
    this.crateList.next(this._crateList); // equivalente al emitt de eventos
  }

  returnStock(apple): void {
    let i: number= 0;
    while (this._crateList[i] != null && (this._crateList[i].name != apple.name)) {
      i++
    }
    let item= this._crateList[i];
    if(item) {
      apple.stock+= item.quantity;
    }
  }

}
