import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  title = 'Remoted';
  name = 'Chet Hill';
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  constructor() { }

  ngOnInit() {
  }

}
