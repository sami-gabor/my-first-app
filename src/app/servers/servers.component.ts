import { Component, OnInit } from '@angular/core';
// import { createServer } from 'http';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // options = ['A','B','C','D','E'];
  allowNewServer = false;
  // serverCreationStatus = 'No new servers were created.';
  serverCreated = false;
  // get serverName() {
  //   console.log('get');
  //   return this._serverName;
  // }
  // set serverName(value) {
  //   console.log('set');
  //   this._serverName = value;
  // }
  // _serverName = 'gdfgdfg';
  serverName = '...';
  servers = ['1', '2'];

  
  constructor() { 
    this.allowServer()
  }

  ngOnInit(): void { }

  allowServer() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push('added by user');
    // this.serverCreationStatus = 'A new server was created! The name is ' + this.serverName;
  }

  onUpdateInput(event: InputEvent) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
