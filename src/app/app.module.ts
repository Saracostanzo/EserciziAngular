import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JokeAttualeComponent } from './pages/joke-attuale/joke-attuale.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeAttualeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
