import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  company = 'Remoted App';
  name = 'Chet Hill';
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  constructor() { }

  ngOnInit() {
  }

}
