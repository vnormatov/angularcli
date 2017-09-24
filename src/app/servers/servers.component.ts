import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public serverCreationStatus = 'No server was created';
  public allowNewServer = true;
  public serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 3000);
  }

  public OnServerCreated(): void {
    this.serverCreationStatus = 'Server was created';
  }

  public onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
