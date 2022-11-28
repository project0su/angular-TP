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
    if(!item) {
      this._crateList.push({ ... apple});
    } else {
      item.quantity += apple.quantity;
    }
    this.crateList.next(this._crateList); // equivalente al emitt de eventos
  }

}
