import { Component, OnInit } from '@angular/core';
import {OptDataTableComponent} from "../opt-data-table/opt-data-table.component";
import {MatDialog} from "@angular/material";
// import {OptCancelBookingComponent} from "../opt-cancel-booking/opt-cancel-booking.component";
@Component({
  selector: 'app-opt-booking-summary',
  templateUrl: './opt-booking-summary.component.html',
  styleUrls: ['./opt-booking-summary.component.scss']
})
export class OptBookingSummaryComponent implements OnInit {
  selected = 'option2';

  // constructor(public dialog: MatDialog)  { }
  //
  // public openCancelBooking(){
  //   this.dialog.open(OptCancelBookingComponent,{
  //     panelClass:'custom-dialog-container',
  //     height: 'auto',
  //     width: '20%'
  //   });
  //
  // }
  ngOnInit() {
  }

}
