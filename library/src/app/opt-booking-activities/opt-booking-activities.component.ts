import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-opt-booking-activities',
  templateUrl: './opt-booking-activities.component.html',
  styleUrls: ['./opt-booking-activities.component.scss']
})
export class OptBookingActivitiesComponent implements OnInit{
  foods = [
    {value: 'steak-0', viewValue: 'All'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  @ViewChild('myPanel1') myPanel1: MatExpansionPanel;
  matIcon1 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel2') myPanel2: MatExpansionPanel;
  matIcon2 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel3') myPanel3: MatExpansionPanel;
  matIcon3 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel4') myPanel4: MatExpansionPanel;
  matIcon4 = 'keyboard_arrow_down' || 'keyboard_arrow_up';



  ngOnInit() {
    this.myPanel1.expandedChange.subscribe((data) => {
      this.matIcon1 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel2.expandedChange.subscribe((data) => {
      this.matIcon2 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel3.expandedChange.subscribe((data) => {
      this.matIcon3 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel4.expandedChange.subscribe((data) => {
      this.matIcon4 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  }
  expandPannel1() {
    this.myPanel1.expanded = !this.myPanel1.expanded;
    // alert("1");
  }

  expandPannel2() {
    this.myPanel2.expanded = !this.myPanel2.expanded;
    // alert("1");

  }
  expandPannel3() {
    this.myPanel3.expanded = !this.myPanel3.expanded;
    // alert("1");
  }

  expandPannel4() {
    this.myPanel4.expanded = !this.myPanel4.expanded;
    // alert("1");
  }
}
