import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {AuthenticationService} from './authentication.service';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../classes/hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'https://bac-sunlight999.c9users.io/api/heroes';  // URL to web api

  constructor(private http: AuthHttp,private authService: AuthenticationService) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getHero(id: number) {
  return this.getHeroes()
             .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
  private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  }
  private post(hero: Hero): Promise<Hero> {
  let headers = this.authService.getAuthHeaders();
  headers.append('Content-Type', 'application/json');

  return this.http
             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
  }
  // Update existing Hero
  private put(hero: Hero) {
  let headers = this.authService.getAuthHeaders();
  headers.append('Content-Type', 'application/json');

  let url = `${this.heroesUrl}/${hero.id}`;

  return this.http
             .put(url, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(() => hero)
             .catch(this.handleError);
  }
  delete(hero: Hero) {
  let headers = this.authService.getAuthHeaders();
  headers.append('Content-Type', 'application/json');

  let url = `${this.heroesUrl}/${hero.id}`;

  return this.http
             .delete(url, headers)
             .toPromise()
             .catch(this.handleError);
  }
  save(hero: Hero): Promise<Hero>  {
  if (hero.id) {
    return this.put(hero);
  }
  return this.post(hero);
  }
}
