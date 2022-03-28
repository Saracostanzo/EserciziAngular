import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service.module';

@Component({
  selector: 'esercizi-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  counter$!:any;
  count!:any;
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.appService.pimoval()
    this.counter$= this.appService.counter$.subscribe(value=> this.count=value)
  }

  submit(form: NgForm) {
    console.log(this.count)
    console.log(form.value.inputNumber6)
};

  addNewValue(form:NgForm) {
    this.count= this.count + form.value.inputNumber6;
    this.appService.update(this.count)
  }
  removeValue(form:NgForm){
    if(this.count>=form.value.inputNumber6){
    this.count = this.count - form.value.inputNumber6;
    this.appService.update(this.count)
    }else alert(" Operazione non consentita ! Il tuo saldo non può andare in negativo !")
  }

}
