import { Component, OnInit } from '@angular/core';
import { Router,CanActivate } from '@angular/router-deprecated';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';
import {AuthenticationService} from '../services/authentication.service';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
  selector: 'my-dashboard',
  providers: [AuthenticationService],
  templateUrl: 'app/templates/dashboard.component.html',
  styleUrls: ['app/styles/dashboard.component.css']
})
@CanActivate(() => tokenNotExpired())
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
  private router: Router,
  private heroService: HeroService,
  private authService: AuthenticationService) {}
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    
  }
  gotoDetail(hero: Hero) {
  let link = ['HeroDetail', { id: hero.id }];
  this.router.navigate(link);
}

}

