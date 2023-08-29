import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ReleaseResp } from './release';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReleaseService {
    constructor(
        private http: HttpClient,
    ) {}

    getReleases(): Observable<ReleaseResp> {
        let releases_url = environment.API_ENDPOINT + '/release';
        return this.http.get<ReleaseResp>(releases_url)
        .pipe(
            tap(_ => this.log('fetched releases')),
            catchError(this.handleError<ReleaseResp>('getReleases'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
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
        console.log(`ReleaseService: ${message}`);
    }
}
