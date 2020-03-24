import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  greeting: object;

  constructor(private http: HttpClient) {
    this.greeting = {};
  }

  ngOnInit() {
    // const headers = new HttpHeaders(
    //   'Access-Control-Allow-Origin: *'
    // );

    this.http.get('/resource/greeting'/*, { headers: headers }*/).subscribe(
      data => this.greeting = data
    );
  }

}
