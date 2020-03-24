import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  user: any;
  admin: boolean;

  constructor(private http: HttpClient) {
    this.authenticated = false;
    this.user = '';
    this.admin = false;
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(
      credentials ? { authorization:
        'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {}
    );

    this.http.get('user', { headers: headers }).subscribe(data => {
      this.authenticated = data && data['name'];
      this.user = this.authenticated ? data['name'] : '';
      this.admin = this.authenticated && data['roles'].indexOf('ROLE_ADMIN') > -1;

      console.log(data);

      return callback && callback();
    });
  }

  logout() {
    this.http.post('logout', {}).pipe(
      catchError((err, caught) => {
        // TODO - Handle error
        console.error(">>>Error: " + err);
        throw err;
      }),
      finalize(() => {
        // Forcely logout
        this.authenticated = false;
        this.admin = false;
        //this.router.navigateByUrl('/');
      })
    ).subscribe();
  }
}
