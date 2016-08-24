import { Component } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls:  ['app/styles/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  
  constructor(
    private router: Router,
    private heroService: HeroService
    ) {}
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes,e => alert(" HeroesComponent init failed "));
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
  addHero() {
  this.addingHero = true;
  this.selectedHero = null;
  }

  close(savedHero: Hero) {
  this.addingHero = false;
  if (savedHero) { this.getHeroes(); }
  }
  deleteHero(hero: Hero, event: any) {
  event.stopPropagation();
  this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
  }
}
