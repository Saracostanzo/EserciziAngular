import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { LogService } from 'src/app/log.service';
import { Gender } from 'src/app/models/interfaccia';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private logService: LogService, private http: HttpClient) { }

  get(name: string) {
    return this.http.get<Gender>(`https://api.genderize.io/?name=${name}`).pipe(
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