import { Component, Input, Output } from '@angular/core';
import { Order } from './models/order';
import { TitleObj } from './models/title';
import { User } from './models/user';
@Component({
  selector: 'esercizi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles:TitleObj[]=[
    {
  titolo:"Ordine"
    },
    {
  titolo:"Ordine"
    },
    {
  titolo:"Ordine"
    }
  ]

}
