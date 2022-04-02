import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service.module';

@Component({
  selector: 'esercizi-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
 count!:number;
 val:number=0;

  constructor(public appService:AppService) { }
  ngOnInit(): void {
  this.count= this.val
   }
   add(value:any){
     console.log(value)
     this.count= this.count + value;
     this.appService.getAll(this.count)
  }
   remove(value:any){
     console.log(value)
     if(this.count>=value){
       this.count=this.count-value
      return this.appService.getAll(this.count);
    }else
    return alert(" Operazione non consentita ! Il tuo saldo non può andare in negativo !")
  }

}
