import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppleShopComponent } from './AppleShop-apples/AppleShop-apples.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'apples',
    pathMatch: 'full',
  },
  {
    path: 'apples',
    component: AppleShopComponent,
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
