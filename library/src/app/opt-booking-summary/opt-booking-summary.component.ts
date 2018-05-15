import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-booking-summary',
  templateUrl: './opt-booking-summary.component.html',
  styleUrls: ['./opt-booking-summary.component.scss']
})
export class OptBookingSummaryComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit() {
  }

}
