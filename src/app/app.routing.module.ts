import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',   redirectTo: '/form', pathMatch: 'full' },
    {
      path: 'form',
      loadChildren: () => import('./pages/dashboard.module').then(m => m.DashboardModule),
    },
    { path: '**',   redirectTo: '/form' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
