import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authenticated: boolean;
  user: any;
  admin: boolean;

  constructor(private app: AppService) { }

  ngOnInit() {
    this.authenticated = this.app.authenticated;
    this.user = this.app.user;
    this.admin = this.app.admin;
  }

}
