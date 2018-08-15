import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  title = 'Remoted';
  name = 'Chet Hill';
  desc = 'Digital Nomad lifestyle, jobs, and resources';

  constructor() { }

  ngOnInit() {
  }

}
