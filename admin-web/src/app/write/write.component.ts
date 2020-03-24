import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  greeting: object;

  constructor(private http: HttpClient) {
    this.greeting = {};
  }

  ngOnInit() {
    this.http.get(/*'http://localhost:9000/resource/greeting'*/ '/resource/greeting')
      .subscribe(data => this.greeting = data);
  }

  update() {
    console.log('update')
    console.log(this.greeting)
    this.http
      .post('/resource/greeting', { content: this.greeting['content'] })
      .subscribe(response => {
        this.greeting = response;
      });
  }

}
