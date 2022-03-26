import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from './models/user';
import { Order } from './models/order';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private logService: LogService ,private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`http://localhost:3000/users`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAllUser')),
      catchError(this.handleError)
    );
  }
  getAllOrders() {
    return this.http.get<Order[]>(`http://localhost:3000/orders`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAllOrder')),
      catchError(this.handleError)
    );
  }
   getUrser(order: number) {
    return this.http.get<User>(`http://localhost:3000/users/${order}`).pipe(
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
