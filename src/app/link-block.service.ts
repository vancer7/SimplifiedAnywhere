import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LinkBlock } from './linkblock';
@Injectable({
  providedIn: 'root'
})
export class LinkBlockService {
  private linkBlockUrl = 'http://localhost:3000/LinkBlocks';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }
  getLinkBlocks(): Observable<LinkBlock[]> {
    // this.getPhones2()
    return this.http.get<LinkBlock[]>(this.linkBlockUrl)
      .pipe(
        tap(_ => this.log('fetched phones')),
        catchError(this.handleError<LinkBlock[]>('getPhones', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    //this.messageService.add(`PhoneService: ${message}`);
  }
}
