"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var app_component_1 = require('./components/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS, angular2_jwt_1.AUTH_PROVIDERS
]);
//# sourceMappingURL=main.js.map