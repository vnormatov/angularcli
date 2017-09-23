import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public allowNewServer= true;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 3000);
  }

  ngOnInit() {
  }

}
