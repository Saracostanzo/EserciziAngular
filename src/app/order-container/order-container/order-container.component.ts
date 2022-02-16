import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { TitleObj } from 'src/app/models/title';
import { User } from 'src/app/models/user';
@Component({
  selector: 'esercizi-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {
  @Input()dataObjUser:User[]=[];
  @Input()dataObjOrder:Order[]=[];
  @Input()dataTitle:TitleObj[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
