import { Component, Input, OnInit } from '@angular/core';
import { Apple } from '../apple-list/Apple';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  
  constructor() {}

  @Input() 
  apple: Apple;

  ngOnInit(): void {}

  upQuantity(apple: Apple): void {
    if (apple.quantity < apple.stock) apple.quantity++;
  }

  downQuantity(apple: Apple): void {
    if (apple.quantity > 0) apple.quantity--;
  }
  changeQuantity(event, apple: Apple): void {
    console.log(event.key);
  }
}
