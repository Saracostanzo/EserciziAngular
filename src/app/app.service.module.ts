import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
 public counter$=this.counter.asObservable()

getAll():Observable<number>{
return this.counter$
}
  remove( value: number) {
    console.log(this.counter.value)
  console.log(value)
    if(this.counter.value >= value){
    this.counter.next(this.counter.value - value)
  }else alert(" Operazione non consentita ! Il tuo saldo non può andare in negativo !")
  }


add( value:number){
  console.log(this.counter.value)
  console.log(value)
    this.counter.next(this.counter.value + value )
  }

}
