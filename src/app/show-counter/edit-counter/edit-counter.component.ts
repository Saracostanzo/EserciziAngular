import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../../app.service.module';

@Component({
  selector: 'esercizi-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Output() AddValue = new EventEmitter<number>();
  @Output() RemoveValue = new EventEmitter<number>();

  val!:number
  constructor() { }

  ngOnInit(): void {}


  addNewValue(form: NgForm) {
    this.val=form.value.inputNumber6;
    this.AddValue.emit(this.val)
  }

  removeValue(form: NgForm){
    this.val=form.value.inputNumber6;
    this.RemoveValue.emit(this.val)
}

}
