import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})
export class ServerComponent {

  serverId = 10;
  private serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  public getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  public getServerStatus(): string {
    return this.serverStatus;
  }
}
