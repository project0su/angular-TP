import { Component, OnInit } from '@angular/core';
import { AppleCrateService } from '../apple-crate.service';

@Component({
  selector: 'app-crate',
  templateUrl: './crate.component.html',
  styleUrls: ['./crate.component.scss']
})
export class CrateComponent implements OnInit {

  constructor(private crate: AppleCrateService) { }

  ngOnInit(): void {
  }

}
