import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LogService } from './log.service';
import { CountriesRoute } from './model/countriesRoute';
import { catchError, retry, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private logService: LogService, private http: HttpClient) { }

  getAll() {
    return this.http.get<CountriesRoute[]>(`https://api.covid19api.com/`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAll')),
      catchError(this.handleError)
    );
  }


  // get(Path: string) {
  //    this.http.get<CountriesRoute>(`https://api.covid19api.com${Path}`).pipe(
  //     retry(3),
  //     tap(() => this.logService.log('HttpClient Get')),
  //     catchError(this.handleError)
  //   );
  // }


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
