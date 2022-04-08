import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap, throwError } from 'rxjs';
import { LogService } from 'src/app/pages/joke-service&model/log.service';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
constructor(private logService: LogService, private http: HttpClient) { }

getAll() {
  return this.http.get<any>(`https://v2.jokeapi.dev/joke/dark`).pipe(
    retry(3),
    tap(() => this.logService.log('HttpClient GetAll')),
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
