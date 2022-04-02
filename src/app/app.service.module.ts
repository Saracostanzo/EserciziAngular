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
      id: 1,
  type: 'small',
  name: "Reale Extra",
  price: 5
    },
    {
      id: 2,
  type: "medium",
  name: "Blanche de Valerie",
  price: 10
    },
    {
      id: 3,
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
    {
      id:10,
  type: "small",
  name: "Westvleteren",
  price: 5
    }
  ];

  private projectsSubject = new BehaviorSubject<Beer[]>(this.beer);
  public projects$ = this.projectsSubject.asObservable();

  constructor(private logService: LogService,) { }

  getAll() {
    return this.projects$.pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAll'))
    );
  }
  get(id: number): Beer {
  this.logService.log("get id iseguito");
  return this.beer.find(beer => beer.id ===id) as Beer;
  }

}

