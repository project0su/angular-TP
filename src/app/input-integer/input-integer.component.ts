import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  
  constructor() {}

  @Input() 
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>();

  ngOnInit(): void {}

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event): void {                                   // fixear numeros repetidos
    if (event.key < 0 || event.key > 9) {
      event.preventDefault();
    } else {
      if (this.quantity > 0) {
        this.quantity+= event.key;
      } else {
        this.quantity= event.key;
      }
      this.quantityChange.emit(this.quantity);
    }
    console.log(event.key);
  }
}
