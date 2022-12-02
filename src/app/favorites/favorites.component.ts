import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppleFavoritesService } from '../apple-favorites.service';
import { Apple } from '../apple-list/Apple';

@Component({
  selector: 'app-fravorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoritesList$: Observable<Apple[]>;
  
  constructor(private favorites: AppleFavoritesService) { 
    this.favoritesList$= favorites.favoritesList.asObservable();
  }

  ngOnInit(): void {
  }
  
}