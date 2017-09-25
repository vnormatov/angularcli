import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {

  serverId = 10;
  private serverStatus = 'offline';
  public color = '';

  constructor() {
    this.color = Math.random() > 0.5 ? 'red' : 'green';
  }

  public getColor() {
    return this.color;
  }

  public getServerStatus(): string {
    return this.serverStatus;
  }
}
