import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../model/employee'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'https://jsonplaceholder.typicode.com/posts';
  private userDetails = {};

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.heroesUrl);
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Employee> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map(heroes => heroes[0]) // returns a {0|1} element array

      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Employee> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(

    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.heroesUrl}/?name=${term}`).pipe(

    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.heroesUrl, hero, httpOptions).pipe(
      
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Employee | number): Observable<Employee> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
     
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Employee): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  protected rootUrl : string = 'https://jsonplaceholder.typicode.com/posts' ;
  protected loginUrl : string = 'https://reqres.in/api/login';
  obj = {
   "email": "peter@klaven",
   "password": "cityslicka"
 }
 
 
     // Rest Items Service: Read all REST Items
     getAll() {
       return this.http
         .get<any[]>(this.rootUrl)
         .pipe(map(data => data));
     }
 
      // Rest Items Service: post REST Items
      addNew() {
       return this.http
         .get<any[]>(this.rootUrl)
         .pipe(map(data => data));
     }
 
     userAuthentication(userName,password){
       this.userDetails ={
        "email": userName,
        "password": userName
       }
       return this.http.post<any[]>(this.loginUrl,this.userDetails)
       .pipe(map(data => data));
     }
}
