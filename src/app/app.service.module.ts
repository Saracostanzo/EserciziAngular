import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Beer } from './model/beer';

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

  constructor(private logService: LogService, private http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>(`http://localhost:3000/projects`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAll')),
      catchError(this.handleError)
    );
  }

  add(project: Project) {
    return this.http.post<Project>(`http://localhost:3000/projects`, project).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient Add')),
      catchError(this.handleError)
    );
  }

  get(id: number) {
    return this.http.get<Project>(`http://localhost:3000/projects/${id}`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient Get')),
      catchError(this.handleError)
    );
  }


 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
}
