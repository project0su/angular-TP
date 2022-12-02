import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { AppleCrateService } from '../apple-crate.service';
import { AppleFavoritesService } from '../apple-favorites.service';
import { AppleDataService } from '../apple-data.service';
import { Apple } from './Apple';

@Component({
  selector: 'app-apple-list',
  templateUrl: './apple-list.component.html',
  styleUrls: ['./apple-list.component.scss'],
})
export class AppleListComponent implements OnInit {
    apples: Apple[]= [];

    /* apples: Apple[]= [{"name":"Manzana 7","sign":"Indefinido","stock":4,"image":'assets/img/manzana.png',"new":false, quantity: 0},{"name":"Manzana 2","sign":"Indefinido", "stock":1,"image":"assets/img/manzana.png","new":false, quantity: 0}]; */

    
      constructor(
        private crate: AppleCrateService,
        private AppleDataService: AppleDataService,
        private favorites: AppleFavoritesService) {}

      ngOnInit(): void {
        this.AppleDataService.getAll()
        .subscribe(apples2=> this.apples = apples2);
      }

      /* loadStock(apples, crate) {
        console.log("??");
        console.log(crate.crateList.value);
        console.log(apples);
        if (crate.crateList.value.length != 0) {
          let i= 0;
          let i2= 0;
          while (crate.crateList.value[i] != null && (apples[i2]) != null) {
            console.log("aa");
          }
        }
      } */

      addToCrate(apple): void {
        if (apple.stock - apple.quantity >= 0) {
          this.crate.addToCrate(apple);
          apple.stock -= apple.quantity;
          apple.quantity= 0;
        }
      }

      addToFavorites(apple): void {
        this.favorites.addToFavorites(apple);
      }
      

      removeFromCrate(apple): void {          
        this.crate.returnStock(apple);         //devuelve todo el stock consumido por el cajon al item apple
        this.crate.removeFromCrate(apple);      // para que no quede el elemento con valor 0 en el cajon
      }


}
