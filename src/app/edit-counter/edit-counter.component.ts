import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service.module';

@Component({
  selector: 'esercizi-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  val!:number
  constructor(private appService: AppService) { }

  ngOnInit(): void {}


  addNewValue(form: NgForm) {
    this.val=form.value.inputNumber6;
    this.appService.add(this.val)
  }
  removeValue(form: NgForm){
    this.val=form.value.inputNumber6;
    this.appService.remove(this.val)
}
}
