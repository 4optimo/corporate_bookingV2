import {Component, OnInit, ViewChild} from '@angular/core';
import {MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-opt-booking-details',
  templateUrl: './opt-booking-details.component.html',
  styleUrls: ['./opt-booking-details.component.scss']
})
export class OptBookingDetailsComponent implements OnInit {

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  }

  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
  }

}
