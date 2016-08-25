import { Injectable }    from '@angular/core';
import {Router} from '@angular/router-deprecated';
import { Headers } from '@angular/http';

declare var Auth0Lock: any;

@Injectable()
export class AuthenticationService {
  
  lock = new Auth0Lock('gz3QoLutG1Z5LRwVTQZikRb3RchCPo2c', 'sunlight999.eu.auth0.com');
  
 
  constructor(
    private router: Router){}
 
  login() {
   this.lock.show((error: string, profile: Object, id_token: string) => {
     if (error) {
       console.log(error);
       return;
     }
     // We get a profile object for the user from Auth0
     localStorage.setItem('profile', JSON.stringify(profile));
     // We also get the user's JWT
     localStorage.setItem('id_token', id_token);
     this.router.navigateByUrl('/dashboard',false);
    
   });
 }

 logout() {
   // To log out, we just need to remove
   // the user's profile and token
   localStorage.removeItem('profile');
   localStorage.removeItem('id_token');
    this.router.navigateByUrl('/dashboard',false);
 } 
 
 getAuthHeaders(){
    let jwt = localStorage.getItem('id_token');
    let authHeader = new Headers();
    if(jwt) {
      authHeader.append('Authorization', 'Bearer ' + jwt);      
    }
    return authHeader;
  }
  
}
