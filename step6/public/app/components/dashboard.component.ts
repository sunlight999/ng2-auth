import { Component, OnInit } from '@angular/core';
import { Router,CanActivate } from '@angular/router-deprecated';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.component.html',
  styleUrls: ['app/styles/dashboard.component.css']
})
@CanActivate(() => tokenNotExpired())
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
  private router: Router,
  private heroService: HeroService) {}
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5),e => console.error("DashboardComponent init failed "));
    
  }
  gotoDetail(hero: Hero) {
  let link = ['HeroDetail', { id: hero.id }];
  this.router.navigate(link);
}

}

