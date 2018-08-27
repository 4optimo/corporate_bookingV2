import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-opt-item-cart',
  templateUrl: './opt-item-cart.component.html',
  styleUrls: ['./opt-item-cart.component.scss']
})
export class OptItemCartComponent implements OnInit {

  packageCartListArray = new Array(4);

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

  }
  constructor() {}

  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
    // alert("1");
  }

}
