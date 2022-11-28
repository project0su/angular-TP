import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { AppleCrateService } from '../apple-crate.service';
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
          new: false,
          quantity: 0,
        },
        {
          name: 'Manzana 2',
          sign: 'indefinido',
          stock: 6,
          image: 'assets/img/manzana.jpeg',
          new: false,
          quantity: 0,
        },
        {
          name: 'Manzana 3',
          sign: 'indefinido',
          stock: 2,
          image: 'assets/img/manzana.jpeg',
          new: true,
          quantity: 0,
        },
        {
          name: 'Manzana 4',
          sign: 'indefinido',
          stock: 1,
          image: 'assets/img/manzana.jpeg',
          new: false,
          quantity: 0,
        },
      ];

      constructor(private crate: AppleCrateService) {
      }

      ngOnInit(): void {}

      addToCart(apple): void {
        this.crate.addToCrate(apple);
        apple.stock -= apple.quantity;
        apple.quantity = 0;
      }
    

}
