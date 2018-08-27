import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {MatDialog, MatExpansionPanel} from "@angular/material";
import {OptDataTableComponent} from "../opt-data-table/opt-data-table.component";

@Component({
  selector: 'app-opt-booking-details',
  templateUrl: './opt-booking-details.component.html',
  styleUrls: ['./opt-booking-details.component.scss']
})
export class OptBookingDetailsComponent implements OnInit {

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel2') myPanel2: MatExpansionPanel;
  matIcon2 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  @ViewChild('myPanel3') myPanel3: MatExpansionPanel;
  matIcon3 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  // @ViewChild('myPanel4') myPanel4: MatExpansionPanel;
  // matIcon4 = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  constructor(public dialog: MatDialog)  { }

  public openDataTable(){
    this.dialog.open(OptDataTableComponent,{
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

    this.myPanel2.expandedChange.subscribe((data) => {
      this.matIcon2 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
    // this.myPanel4.expandedChange.subscribe((data) => {
    //   this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    // });

    this.myPanel3.expandedChange.subscribe((data) => {
      this.matIcon3 = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });




  }
  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
    // alert("1");
  }
  expandPannel2() {
    this.myPanel2.expanded = !this.myPanel2.expanded;
    // alert("2");
  }
  expandPannel3() {
    this.myPanel3.expanded = !this.myPanel3.expanded;
    // alert("3");
  }
  // expandPannel4() {
  //   this.myPanel4.expanded = !this.myPanel4.expanded;
  //   // alert("4");
  // }

  PackageName: any[] = [
    {
      "name": "BTX16L4 - Premier Dinner & Eye"
    },
    {
      "name": "BTX16L4 - Premier Dinner 1 & Eye"
    },
    {
      "name": "BTX16L4 - Premier Dinner 2 & Eye"
    },
    {
      "name": "BTX16L4 - Premier Dinner 3 & Eye"
    },
    {
      "name": "BTX16L4 - Premier Dinner 4 & Eye"
    }
  ];


}
