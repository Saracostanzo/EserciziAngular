import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from "./error/error.component";
import { OrderContainerComponent } from "./order/order-container/order-container.component";
import { UserContainerComponent } from "./user/user-container/user-container.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserListComponent } from "./user/user-list/user-list.component";


const routes: Routes = [
  { path:"users/detail/:order", component: UserDetailComponent},
  { path:"user", component: UserContainerComponent},
  {path:"order", component: OrderContainerComponent},
    { path: '',   redirectTo: '/user', pathMatch: 'full' },
    { path: '**',  component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
