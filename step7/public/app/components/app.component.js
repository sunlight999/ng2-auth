"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('../services/hero.service');
var authentication_service_1 = require('../services/authentication.service');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent.prototype.login = function () {
        this.authService.login();
    };
    AppComponent.prototype.loggedIn = function () {
        try {
            return this.authService.loggedIn();
        }
        catch (e) {
            this.authService.logout();
            return false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['Dashboard']\" *ngIf=\"loggedIn()\">Dashboard</a>\n    <a [routerLink]=\"['Heroes']\" *ngIf=\"loggedIn()\" >Heroes</a>\n    <a (click)=\"logout()\" href=\"#\" *ngIf=\"loggedIn()\">Logout</a>\n    <a (click)=\"login()\" href=\"#\" *ngIf=\"!loggedIn()\">Login</a>\n    \n  </nav>\n  <router-outlet></router-outlet>\n",
            styleUrls: ['app/styles/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService,
                authentication_service_1.AuthenticationService
            ]
        }),
        router_deprecated_1.RouteConfig([{
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent
            },
            {
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map