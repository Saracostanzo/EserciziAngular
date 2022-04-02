import { Injectable } from "@angular/core";
import {Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class AppService {
counter: Subject<number> = new Subject<number>();
 public counter$=this.counter.asObservable()



 getAll(value:number):Observable<number>{
   this.counter.next(value)
  return this.counter$
  }
  }
