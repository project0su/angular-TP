import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { AppleCrateService } from '../apple-crate.service';
import { AppleDataService } from '../apple-data.service';
import { Apple } from './Apple';

@Component({
  selector: 'app-apple-list',
  templateUrl: './apple-list.component.html',
  styleUrls: ['./apple-list.component.scss'],
})
export class AppleListComponent implements OnInit {
    apples2: Apple[]= [];

    apples: Apple[]= [{"name":"Manzana 7","sign":"Indefinido","stock":4,"image":'assets/img/manzana.png',"new":false, quantity: 0},{"name":"Manzana 2","sign":"Indefinido", "stock":1,"image":"../assets/img/manzana.png","new":false, quantity: 0}];

      constructor(
        private crate: AppleCrateService,
        private AppleDataService: AppleDataService) {}

      ngOnInit(): void {
        /* this.AppleDataService.getAll()
        .subscribe(apples=> this.apples = apples); */
      }

      addToCrate(apple): void {
        this.crate.addToCrate(apple);
        apple.stock -= apple.quantity;
        apple.quantity = 0;
      }

      removeFromCrate(apple): void {           //devuelve solo 1
        this.crate.removeFromCrate(apple);
        apple.stock+= 1;
        console.log(this.apples);
        apple.quantity = 0;
      }


}
