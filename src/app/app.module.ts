import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleListComponent } from './apple-list/apple-list.component';

import { FormsModule } from '@angular/forms';
/* import { BreweryAboutComponent } from './AppleShop-about/AppleShop-about.component'; */
import { AppleShopApplesComponent } from './AppleShop-apples/AppleShop-apples.component';
import { CrateComponent } from './crate/crate.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleListComponent,
    /* AppleShopAboutComponent, */
    AppleShopApplesComponent,
    CrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }