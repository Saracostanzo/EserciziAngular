import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'esercizi-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
@Input()users:User[]=[];
@Output() deleted = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(user:User){
    this.deleted.emit(user);
  }

}
