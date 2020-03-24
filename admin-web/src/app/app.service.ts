import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  error: string;
  writer: boolean;
  authenticated = false;

  constructor(private http: HttpClient) { }

  authenticate(callback) {
    this.http.get('/user').subscribe(user => {
      // Successful
      if (user['name']) {
        this.authenticated = true;
        this.writer = user['roles'] && user['roles'].indexOf('ROLE_WRITER') > 0;
        this.error = null;
      } else {
        this.authenticated = false;
        this.writer = false;
        console.log("Not found username");
        console.log(user);
      }

      if (callback) { callback(user); }
    }, response => {
      // Error
      if (response.status === 0) {
        this.error = 'No connection. Verify application is running.';
      } else if (response.status === 401) {
        this.error = 'Unauthorized.';
      } else if (response.status === 403) {
        this.error = 'Forbidden.';
      } else {
        this.error = 'Unknown.';
      }

      this.authenticated = false;
      this.writer = false;
    });
  }
}