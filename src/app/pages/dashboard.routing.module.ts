import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: 'card', component:CardComponent  },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
