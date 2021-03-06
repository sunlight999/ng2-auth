// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import { AppComponent }   from './components/app.component';
enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,AUTH_PROVIDERS
]);
