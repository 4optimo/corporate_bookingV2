import {Component, OnInit, ViewChild} from '@angular/core';
import {FEB, MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-opt-client-summary',
  templateUrl: './opt-client-summary.component.html',
  styleUrls: ['./opt-client-summary.component.scss']
})
export class OptClientSummaryComponent implements OnInit {

  @ViewChild('myPanel1') myPanel1: MatExpansionPanel;
  matIcon1 = 'keyboard_arrow_down' || 'keyboard_arrow_up';


  constructor() { }

  ngOnInit() {
    this.myPanel1.expandedChange.subscribe((data) => {
      this.matIcon1 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  }
  expandPannel() {
    this.myPanel1.expanded = !this.myPanel1.expanded;
    // alert("1");
  }
}

