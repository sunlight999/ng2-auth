import { Component }       from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }     from '../services/hero.service';
import { AuthenticationService }     from '../services/authentication.service';
import { HeroesComponent } from './heroes.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
 template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']" >Dashboard</a>
    <a [routerLink]="['Heroes']"  >Heroes</a>
    <a [routerLink]="['Logout']"  >Logout</a>
    <a [routerLink]="['Login']"  >Login</a>
    
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
    
}
