import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-web';
  authenticated: boolean;
  user: object;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.user = {};
    app.authenticate(response => {
      this.user = response;
      this.authenticated = this.app.authenticated;
      this.message();
    });
  }

  logout() {
    this.http.post('logout', {}).subscribe(function() {
      this.app.authenticated = false;
      this.router.navigate(['/login']);
    });
  }

  message() {
    console.log('message');
    if (!this.app.authenticated) {
      this.router.navigate(['/unauthenticated']);
    } else {
      if (this.app.writer) {
        this.router.navigate(['/write']);
      } else {
        this.router.navigate(['/read']);
      }
    }
  }

  changes() {
    console.log('changes');
    if (!this.app.authenticated) {
      this.router.navigate(['/unauthenticated']);
    } else {
      this.router.navigate(['/changes']);
    }
  }
}
