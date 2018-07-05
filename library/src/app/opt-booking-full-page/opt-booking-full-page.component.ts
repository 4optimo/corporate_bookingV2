import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-booking-full-page',
  templateUrl:'./opt-booking-full-page.component.html',
  styleUrls: ['./opt-booking-full-page.component.scss']
})
export class OptBookingFullPageComponent implements OnInit {

  bookingListArray = new Array(1);


  constructor() { }

  ngOnInit() {
  }

}
