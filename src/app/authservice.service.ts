import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService implements CanActivate {
  constructor(private router: Router) {}
  /*Checks route navigation before the component is loaded */
  canActivate(): any {
    const token = sessionStorage.getItem('Token');
    if (token == 'user' || token == 'admin') {
      console.log(token);
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
