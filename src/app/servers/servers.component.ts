import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public serverCreationStatus = 'No server was created';
  public allowNewServer = true;
  public serverName = 'TestName';
  public serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 3000);
  }

  public OnServerCreated(): void {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created name is ' + this.serverName;
  }

  public onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
