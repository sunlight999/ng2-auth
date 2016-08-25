import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../classes/hero';
import { RouteParams,CanActivate } from '@angular/router-deprecated';
import { HeroService } from '../services/hero.service';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
  selector: 'my-hero-detail',
 templateUrl: 'app/templates/hero-detail.component.html',
   styleUrls: ['app/styles/hero-detail.component.css']
})
@CanActivate(() => tokenNotExpired())
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
     
    constructor(
  private heroService: HeroService,
  private routeParams: RouteParams) {
    }
 ngOnInit() {
  if (this.routeParams.get('id') !== null) {
    let id = +this.routeParams.get('id');
    this.navigated = true;
    this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    } else {
    this.navigated = false;
    this.hero = new Hero();
    }
}
goBack(savedHero: Hero = null) {
  this.close.emit(savedHero);
  if (this.navigated) { window.history.back(); }
}
save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
    }
}
