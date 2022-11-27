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
      sign: 'indefinido',
      stock: 3,
      image: 'assets/img/manzana.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Manzana 2',
      sign: 'indefinido',
      stock: 6,
      image: 'assets/img/manzana.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Manzana 3',
      sign: 'indefinido',
      stock: 2,
      image: 'assets/img/manzana.jpeg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Manzana 4',
      sign: 'indefinido',
      stock: 1,
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
