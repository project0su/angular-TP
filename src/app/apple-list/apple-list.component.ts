import { Component, OnInit } from '@angular/core';
import { Apple } from './Apple';

@Component({
  selector: 'app-apple-list',
  templateUrl: './apple-list.component.html',
  styleUrls: ['./apple-list.component.scss'],
})
export class AppleListComponent implements OnInit {
  apples: Apple[] = [
    {
      name: 'Manzana 1',
      type: 'indefinido',
      stock: 5,
      image: 'assets/img/manzana.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Manzana 2',
      type: 'indefinido',
      stock: 5,
      image: 'assets/img/manzana.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Manzana 3',
      type: 'indefinido',
      stock: 5,
      image: 'assets/img/manzana.jpeg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Manzana 4',
      type: 'indefinido',
      stock: 5,
      image: 'assets/img/manzana.jpeg',
      clearance: false,
      quantity: 0,
    },
  ];

  constructor() {}

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
