import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';

@Component({
  selector: 'esercizi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() selectedUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  select(user: User) {
    this.selectedUser.emit(user);
  }

}
