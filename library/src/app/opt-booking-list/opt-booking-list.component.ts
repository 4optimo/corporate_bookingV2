import {Component, OnInit, ViewChild} from '@angular/core';
import {MatExpansionPanel} from "@angular/material";


@Component({
  selector: 'app-opt-booking-list',
  templateUrl: './opt-booking-list.component.html',
  styleUrls: ['./opt-booking-list.component.scss']
})
export class OptBookingListComponent implements OnInit {

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  // @ViewChild('myPanel2') myPanel2: MatExpansionPanel;
  // matIcon2 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  // @ViewChild('myPanel3') myPanel3: MatExpansionPanel;
  // matIcon3 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  // this.form.get('mat-select').disable();

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
  // expandPannel2() {
  //   this.myPanel2.expanded = !this.myPanel2.expanded;
  //    // alert("2");
  // }
  // expandPannel3() {
  //   this.myPanel3.expanded = !this.myPanel3.expanded;
  //   // alert("3");
  // }
  // expandPannel4() {
  //   this.myPanel4.expanded = !this.myPanel4.expanded;
  //   // alert("4");
  // }

}
