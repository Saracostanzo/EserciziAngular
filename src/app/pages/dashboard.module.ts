import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard.routing.module';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,

  ],
  exports: []
})
export class DashboardModule { }
