import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticated: boolean;
  admin: boolean;
  credentials: object;

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.credentials = {
      username: '',
      password: ''
    };

    this.authenticated = this.app.authenticated;
  }

  login() {
    console.log(this.credentials);
    this.app.authenticate(this.credentials, () => {
      console.log('After authenticate');
      this.authenticated = this.app.authenticated;
      this.router.navigateByUrl('/');
    });

    this.authenticated = this.app.authenticated;
    this.admin = this.app.admin;
    //return false;
  }

}
