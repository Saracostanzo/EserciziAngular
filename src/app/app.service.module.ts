import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  counter$: Subject<number> = new Subject<number>();
  pimoval(){
    this.counter$.next(0);
  }
  update(value: number) {
    this.counter$.next(value)
  }

}
