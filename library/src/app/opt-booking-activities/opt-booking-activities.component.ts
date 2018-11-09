import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatExpansionPanel} from "@angular/material";
import {MatDialog} from "@angular/material";
import {OptMessageDialogComponent} from "../opt-message-dialog/opt-message-dialog.component";
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

  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  clickEvent1(){
    this.status1 = !this.status1;       
  }
  clickEvent2(){
    this.status2 = !this.status2;       
  }
  clickEvent3(){
    this.status3 = !this.status3;       
  }

// readtxt1: boolean=false;
// readtxt2: boolean=false;
// readtxt3: boolean=false;
// readToggle1(){
//   this.readtxt1 = !this.readtxt1;       
// }
// readToggle2(){
//   this.readtxt2 = !this.readtxt2;       
// }
// readToggle3(){
//   this.readtxt3 = !this.readtxt3;       
// }


  constructor(public dialog: MatDialog)  { }

  public openDeleteItem(){
    this.dialog.open(OptMessageDialogComponent,{
      panelClass:'custom-dialog-container',
      height: 'auto',
      minHeight: '100px',
      width: '30%'
    });

  }

  @ViewChild('myPanel1') myPanel1: MatExpansionPanel;
  matIcon1 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel2') myPanel2: MatExpansionPanel;
  matIcon2 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel3') myPanel3: MatExpansionPanel;
  matIcon3 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel4') myPanel4: MatExpansionPanel;
  matIcon4 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel5') myPanel5: MatExpansionPanel;
  matIcon5 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel6') myPanel6: MatExpansionPanel;
  matIcon6 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel7') myPanel7: MatExpansionPanel;
  matIcon7 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel8') myPanel8: MatExpansionPanel;
  matIcon8 = 'keyboard_arrow_down' || 'keyboard_arrow_up';



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

    this.myPanel5.expandedChange.subscribe((data) => {
      this.matIcon5 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel6.expandedChange.subscribe((data) => {
      this.matIcon6 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel7.expandedChange.subscribe((data) => {
      this.matIcon7 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel8.expandedChange.subscribe((data) => {
      this.matIcon8 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
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

  expandPannel5() {
    this.myPanel5.expanded = !this.myPanel5.expanded;
    // alert("1");
  }

  expandPannel6() {
    this.myPanel6.expanded = !this.myPanel6.expanded;
    // alert("1");
  }

  expandPannel7() {
    this.myPanel7.expanded = !this.myPanel7.expanded;
    // alert("1");
  }

  expandPannel8() {
    this.myPanel8.expanded = !this.myPanel8.expanded;
    // alert("1");
  }
}
