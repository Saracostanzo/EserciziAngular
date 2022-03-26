import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
@Component({
  selector: 'esercizi-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {
  orders$!: Observable<Order[]>;
  users$!: Observable<User[]>;

  selectedUser!: User;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
      this.users$ = this.dataService.getAllUsers();
      this.orders$= this.dataService.getAllOrders();
  }
  selectUser(user: User) {
    this.router.navigate(['/users', 'detail', user.order]);
  }
}
