import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  
  constructor() {}

  @Input() 
  quantity: number;
  max: number;

  ngOnInit(): void {}

  upQuantity(): void {
    if (this.quantity < this.max) this.quantity++;
  }

  downQuantity(): void {
    if (this.quantity > 0) this.quantity--;
  }
  changeQuantity(event, ): void {
    console.log(event.key);
  }
}
