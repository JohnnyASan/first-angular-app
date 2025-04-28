import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnIt() {

  }
}
