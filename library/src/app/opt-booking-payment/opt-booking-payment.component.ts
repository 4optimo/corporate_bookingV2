import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-booking-payment',
  templateUrl: './opt-booking-payment.component.html',
  styleUrls: ['./opt-booking-payment.component.scss']
})
export class OptBookingPaymentComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit() {
  }

}
