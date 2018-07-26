import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-alert',
  templateUrl: './opt-alert.component.html',
  styleUrls: ['./opt-alert.component.scss']
})
export class OptAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public close(){
    this.close();
  }
}
