import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';

@Component({
  selector: 'esercizi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users:User[]=[];
  @Input()orders:Order[]=[];
  @Output()sectedNrOrd= new EventEmitter<Order>();
  @Output() selected= new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
  select(user:User){
    this.selected.emit(user);
  }
  selectNrOrd(order:Order){
    this.sectedNrOrd.emit(order);
  }

}
