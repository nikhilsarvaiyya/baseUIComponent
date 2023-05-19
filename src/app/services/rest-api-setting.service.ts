import { Injectable } from '@angular/core';

// import { Injectable } from '@angular/core';
// import { Card } from './form-card';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiSettingService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Get Call
  getCall(path: any): Observable<any> {
    let API_URL = `${this.REST_API}${path}`;
    return this.httpClient.get(API_URL);
  }

  //Get Single Item

  getSingleItemCall(path:any): Observable<any>{
    let API_URL = `${this.REST_API}${path}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  //Post Call
  postCall(path: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}${path}`;
    return this.httpClient.post(API_URL, data, { 'responseType': 'text' })
      .pipe(catchError(this.handleError));
  }
  //Put Call
  putCall(path: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}${path}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  //Delete Call
  deleteCall(path: any): Observable<any> {
    let API_URL = `${this.REST_API}${path}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }

}