import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Beer } from './model/beer';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  beer: Beer[] = [
    {
      id: 0,
  type: 'small',
  name: "Reale Extra",
  price: 5
    },
    {
      id: 1,
  type: "medium",
  name: "Blanche de Valerie",
  price: 10
    },
    {
      id: 2,
  type: "small",
  name: "Viaemilia",
  price: 5
    },
    {
      id: 3,
  type: "medium",
  name: "Haraban",
  price: 10
    },
    {
      id: 4,
  type: "small",
  name: "Triple",
  price: 5
    },
    {
      id: 5,
  type: "medium",
  name: "Tipopils",
  price: 10
    },
    {
      id: 6,
  type: "small",
  name: "Zona Cesarini",
  price: 5
    },
    {
      id: 7,
  type: "medium",
  name: "Quarta Runa",
  price: 10
    },
    {
      id: 8,
  type: "small",
  name: "Zest",
  price: 5
    },
    {
      id: 9,
  type: "medium",
  name: "Spaceman ",
  price: 10
    },
  ];

  private beersSubject = new BehaviorSubject<Beer[]>(this.beer);
  public beers$ = this.beersSubject.asObservable();

  constructor(private logService: LogService,) { }

  getAll() {
    return this.beers$.pipe(
      retry(3),
      tap(() => this.logService.log(' GetAll Eseguito'))
    );
  }
  get(id: number , type:'small' |'medium'): Beer {
  this.beer[id].type= type
  if(this.beer[id].type==="medium"){
    this.beer[id].price=10
  }else this.beer[id].price = 5
  return this.beer[id]
  }

}

