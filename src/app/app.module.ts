import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CardBeerComponent } from './shop/card-beer/card-beer.component';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CardBeerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
