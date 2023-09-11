import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ReleasesDTO, DaysReleasedDTO } from './models/release';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReleaseService {
    constructor(private http: HttpClient) {}

    getDaysReleased(): Observable<DaysReleasedDTO> {
        let url = `${environment.API_ENDPOINT}/release/days`;
        return this.http.get<DaysReleasedDTO>(url)
        .pipe(
            tap(_ => this.log('Fetched all days release avaible.')),
            catchError(this.handleError<DaysReleasedDTO>('getDaysReleased'))
        );
    }

    getReleases(): Observable<ReleasesDTO> {
        let url = `${environment.API_ENDPOINT}/release`;
        return this.http.get<ReleasesDTO>(url)
        .pipe(
            tap(_ => this.log('Fetched all the releases.')),
            catchError(this.handleError<ReleasesDTO>('getReleases'))
        );
    }

    getReleasesAtDate(date: string): Observable<ReleasesDTO> {
        let url = `${environment.API_ENDPOINT}/release/date/${date}`;

        return this.http.get<ReleasesDTO>(url)
        .pipe(
            tap(_ => this.log('Fetched releases at specified date.')),
            catchError(this.handleError<ReleasesDTO>('getReleasesAtDate'))
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
