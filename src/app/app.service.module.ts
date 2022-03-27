import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  update(value: number) {
    this.counter$.next(value)
  }

}
