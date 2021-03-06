import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  template: `
  <router-outlet></router-outlet>
`
})
export class LoginComponent implements OnInit {
  
  
  constructor(private router: Router,
    private authService: AuthenticationService
    ) {}
 
  ngOnInit() {
    this.authService.login();
    this.router.navigate(['Dashboard']);
  }
 
}
