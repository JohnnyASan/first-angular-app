import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnIt() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  onSubmitUsername() {
    this.username = this.username.trim();
    if (this.username === '') {
      alert('Please enter a username!');
    } else {
      alert('Username submitted: ' + this.username);
    }
    this.username = '';
  }
}
