import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container/user-container.component';
import { OrderContainerComponent } from './order-container/order-container/order-container.component';
import { UserListComponent } from './user-container/user-list/user-list.component';
import { UserDetailComponent } from './user-container/user-detail/user-detail.component';
import { OrderListComponent } from './order-container/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
