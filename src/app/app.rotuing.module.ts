import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailBeerComponent } from './detail-beer/detail-beer.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  { path: 'shop', component: ShopComponent },
  {path: 'detail/:id',component: DetailBeerComponent, },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
