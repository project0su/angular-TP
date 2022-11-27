import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppleShopApplesComponent } from './AppleShop-apples/AppleShop-apples.component';

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
    path: 'about',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
