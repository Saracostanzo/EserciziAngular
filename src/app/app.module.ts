import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { SingleComponent } from './user-list/user-list/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
