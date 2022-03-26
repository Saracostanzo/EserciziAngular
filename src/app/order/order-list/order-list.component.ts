import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { Order } from 'src/app/models/order';

import { User } from 'src/app/models/user';


@Component({
  selector: 'esercizi-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  @Input() orders:Order[]=[];
  @Input()users:User[]=[];
  @Output() selectedUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  select(user: User) {
    this.selectedUser.emit(user);
  }

}
