import { Component }       from '@angular/core';
import { HeroService }     from '../services/hero.service';
import {AuthenticationService} from '../services/authentication.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
 template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']" *ngIf="loggedIn()">Dashboard</a>
    <a [routerLink]="['Heroes']" *ngIf="loggedIn()" >Heroes</a>
    <a [routerLink]="['Logout']" *ngIf="loggedIn()">Logout</a>
    <a [routerLink]="['Login']" *ngIf="!loggedIn()">Login</a>
    
  </nav>
  <router-outlet></router-outlet>
`,
   styleUrls: ['app/styles/app.component.css'],
 directives: [ROUTER_DIRECTIVES],
providers: [
  ROUTER_PROVIDERS,
  HeroService,
  AuthenticationService
]

})
@RouteConfig([{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},
{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
   {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
   {
    path: '/logout',
    name: 'Logout',
    component: LogoutComponent
  },
  {
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
}
])
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(
  private authService: AuthenticationService) {}
  
    loggedIn() {
      try {
        var result= this.authService.loggedIn();
        if(result===null){
        result=false;
        }
      } catch (e){
       result=false;
      }
      return result;
    }
    
}
