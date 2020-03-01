import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

// import 'rxjs/add/operator/finally';
// https://stackoverflow.com/questions/51192925/angular-how-to-call-finally-with-rxjs-6
// finally was renamed to finalize and you'll use it inside pipe() among other operators.
import { from } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gateway-web';
  authenticated = false;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    //this.app.authenticate(undefined, undefined);
    this.authenticated = this.app.authenticated;
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
        //this.router.navigateByUrl('/');
      })
    ).subscribe();
  }
}
