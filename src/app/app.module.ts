import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CardBeerComponent } from './card-beer/card-beer.component';
import { DetailBeerComponent } from './detail-beer/detail-beer.component';
import { AppRoutingModule } from './app.rotuing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CardBeerComponent,
    DetailBeerComponent
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
