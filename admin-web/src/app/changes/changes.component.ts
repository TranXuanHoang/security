import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from '../app.service';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css']
})
export class ChangesComponent implements OnInit {
  data: any;
  constructor(private app: AppService, private http: HttpClient) {
    this.data = [];
  }

  ngOnInit() {
    this.http.get('/resource/changes').subscribe(response => this.data = response);
  }

}
