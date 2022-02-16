import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { TitleObj } from 'src/app/models/title';
import { User } from 'src/app/models/user';
import { UserContainerComponent } from 'src/app/user-container/user-container/user-container.component';

@Component({
  selector: 'esercizi-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  @Input() orders:Order[]=[];
  @Input()users:User[]=[];
  @Input()titles:TitleObj[]=[];

  constructor() { }

  ngOnInit(): void {
  }


}
