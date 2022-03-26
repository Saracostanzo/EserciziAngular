import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { CardSingleComponent } from './shared/card-single/card-single.component';


@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    OrderListComponent,
    NavbarComponent,
    ErrorComponent,
    CardSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
