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
