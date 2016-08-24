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
var router_deprecated_1 = require('@angular/router-deprecated');
var hero_service_1 = require('../services/hero.service');
var authentication_service_1 = require('../services/authentication.service');
var angular2_jwt_1 = require('angular2-jwt');
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService, authService) {
        this.router = router;
        this.heroService = heroService;
        this.authService = authService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['HeroDetail', { id: hero.id }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            providers: [authentication_service_1.AuthenticationService],
            templateUrl: 'app/templates/dashboard.component.html',
            styleUrls: ['app/styles/dashboard.component.css']
        }),
        router_deprecated_1.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService, authentication_service_1.AuthenticationService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map