import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppleCrateService } from '../apple-crate.service';
import { Apple } from '../apple-list/Apple';

@Component({
  selector: 'app-crate',
  templateUrl: './crate.component.html',
  styleUrls: ['./crate.component.scss']
})
export class CrateComponent implements OnInit {

  crateList$: Observable<Apple[]>;
  
  constructor(private cart: AppleCrateService) { 
    this.crateList$ = cart.crateList.asObservable();
  }

  ngOnInit(): void {
  }
  
}
