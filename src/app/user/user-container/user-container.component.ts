import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import{User}from"src/app/models/user";
@Component({
  selector: 'esercizi-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  users$!: Observable<User[]>;

  selectedUser!: User;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
      this.users$ = this.dataService.getAllUsers();
  }

  selectUser(user: User) {
    this.router.navigate(['/users', 'detail', user.order]);
  }
}
