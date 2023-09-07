import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import {
    RepositoryBriefDTOResponse,
    RepositoriesBriefDTOResponse
} from './repository';


@Injectable({
    providedIn: 'root'
})
export class RepositoryService {
    constructor(private http: HttpClient) {}

    getRepositoriesBrief(): Observable<RepositoriesBriefDTOResponse> {
        let url = environment.API_ENDPOINT + '/repository/brief';
        return this.http.get<RepositoriesBriefDTOResponse>(url)
        .pipe(
            tap(_ => this.log('Fetched all the Repositories\' brief.')),
            catchError(this.handleError<RepositoriesBriefDTOResponse>('getRepositoriesBrief'))
        );

    }

    getRepositoryBrief(repo_id: number): Observable<RepositoryBriefDTOResponse> {
        let url = `${environment.API_ENDPOINT}/repository/brief/${repo_id}`;

        return this.http.get<RepositoryBriefDTOResponse>(url)
        .pipe(
            tap(_ => this.log(`Fetched the Repository with id ${repo_id}'s brief.`)),
            catchError(this.handleError<RepositoryBriefDTOResponse>('getRepositoryBrief'))
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
