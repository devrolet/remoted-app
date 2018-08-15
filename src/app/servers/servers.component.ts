import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // Attribute Selector: selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];
  // username = '';
  showPass = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDisplay() {
    this.showPass = !this.showPass;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
