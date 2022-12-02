import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppleShopApplesComponent } from './AppleShop-apples/AppleShop-apples.component';
import { AppleShopAboutComponent } from './AppleShop-about/AppleShop-about.component';
import { FavoritesComponent } from './favorites/favorites.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'apples',
    pathMatch: 'full',
  },
  {
    path: 'apples',
    component: AppleShopApplesComponent,
  },
  {
    path: 'fav',
    component: FavoritesComponent,
  },
  {
    path: 'about',
    component: AppleShopAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
