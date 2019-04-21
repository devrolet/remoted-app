import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-btn',
  template: `
  <button type="button" routerLink="/add-job" class="btn btn-danger btn-lg">Post A Job For $299/month</button>
  `,
  styleUrls: ['./ad-btn.component.css']
})
export class AdBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
