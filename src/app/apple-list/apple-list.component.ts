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
    apples: Apple[] = [];

      constructor(
        private crate: AppleCrateService,
        private AppleDataService: AppleDataService) {}

      ngOnInit(): void {
        this.AppleDataService.getAll()
        .subscribe(apples=> this.apples = apples);
      }

      addToCrate(apple): void {
        this.crate.addToCrate(apple);
        apple.stock -= apple.quantity;
        apple.quantity = 0;
      }
    

}
