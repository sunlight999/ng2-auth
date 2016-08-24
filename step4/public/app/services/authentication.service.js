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
var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.lock = new Auth0Lock('gz3QoLutG1Z5LRwVTQZikRb3RchCPo2c', 'sunlight999.eu.auth0.com');
    }
    AuthenticationService.prototype.login = function () {
        this.lock.show(function (error, profile, id_token) {
            if (error) {
                console.log(error);
                return;
            }
            // We get a profile object for the user from Auth0
            sessionStorage.setItem('profile', JSON.stringify(profile));
            // We also get the user's JWT
            sessionStorage.setItem('id_token', id_token);
            window.location.reload();
        });
    };
    AuthenticationService.prototype.logout = function () {
        // To log out, we just need to remove
        // the user's profile and token
        sessionStorage.removeItem('profile');
        sessionStorage.removeItem('id_token');
        //window.location.reload(); 
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map