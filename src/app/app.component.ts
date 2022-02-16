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

  orders:Order[]=[
    {
  ordineN: Math.round(Math.random() * 100),
  panino: " Panino: Mortadella e provola ",
  dolce: " Dolce: Tiramisù ",
  bevande: " Bevande: Cocacola ",
  costo: "€ 8,00" ,
    },
    {
  ordineN: Math.round(Math.random() * 100),
  panino: "Panino: Speck e stracchino",
  dolce: " Dolce: Muffin ",
  bevande: " Bevande: Aranciata ",
  costo: "€ 8,50" ,
    },
    {
  ordineN: Math.round(Math.random() * 100),
  panino: " Panino: Prosc. Cotto e Asiago",
  dolce: " Dolce: Cannolo ",
  bevande: " Bevande: Sprite ",
  costo: "€ 9,00",
    }
  ]


  users:User[]=[
    {
    order: this.orders[0].ordineN,
    nome:"Amelia",
    cognome: "Futura",
    via: " Via Gorizia , civico 9",
    citta: "Modena",
    orario: new Date(2022,2,17, 20,30)
    },
    {
     order: this.orders[1].ordineN,
      nome:"Noah",
    cognome: "Babbo",
    via: " Via Abete , civico 4",
    citta: "Trento",
    orario: new Date(2022,2,16, 19,30)
    },
    {
    order:this.orders[2].ordineN,
    nome:"Gaia",
    cognome: "AmataTerra",
    via: " Via Mondo , civico 1",
    citta: "Roma",
    orario: new Date(2022,2,15, 19,55)
    }
  ]
}

