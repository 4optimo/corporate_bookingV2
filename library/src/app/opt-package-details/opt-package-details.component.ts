import {Component, OnInit, ViewChild} from '@angular/core';
import {MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-opt-package-details',
  templateUrl: './opt-package-details.component.html',
  styleUrls: ['./opt-package-details.component.scss']
})
export class OptPackageDetailsComponent implements OnInit {

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  constructor() { }

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

  }
  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
    // alert("1");
  }

}
