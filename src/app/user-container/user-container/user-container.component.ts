import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import{User}from"src/app/models/user";
@Component({
  selector: 'esercizi-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  @Input()objUser:User[]=[];
  @Input()objOrder:Order[]=[];
  selectedUser!:User;
  selectedOrder!:Order;


  constructor() { }

  ngOnInit(): void {
  }
  selectUser(user:User){
    this.selectedUser = user;
  }
  selectdataOrd(order:Order){
    this.selectedOrder= order;
  }
}
