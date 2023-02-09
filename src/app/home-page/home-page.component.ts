import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  showFiller = false;
  constructor(private router: Router) {}

  Logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  regform() {
    this.router.navigate(['registration']);
  }
}
